import requests
from bs4 import BeautifulSoup
import re
from python_graphql_client import GraphqlClient
import json
import csv
import logging

# defining the graphql client
client = GraphqlClient(
    endpoint="https://penni.hylo.club/v1/graphql",
    headers={
        'content-type': 'application/json',
        'x-hasura-admin-secret': 'Pennipenni',
    }
)


query = """
mutation MyMutation($base_url: String!, $facebook_followers: bigint!, $facebook_url: String!, $followers_reach: bigint!, $instagram_followers: bigint!, $instagram_url: String!, $linkedin_url: String!, $linktree_url: String!, $name: String, $others_url: String!, $patreon_url: String!, $pinterest_followers: bigint!, $pinterest_url: String!, $snapchat_url: String!, $tiktok_followers: bigint!, $tiktok_url: String!, $twitter_followers: bigint!, $twitter_url: String!, $youtube_followers: bigint!, $youtube_url: String!, $usertype: String!,$categories: String!, $age: String!, $gender: String!, $location: String!) {
  insert_influence_one(object: {base_url: $base_url, facebook_followers: $facebook_followers, facebook_url: $facebook_url, followers_reach: $followers_reach, instagram_followers: $instagram_followers, instagram_url: $instagram_url, linkedin_url: $linkedin_url, linktree_url: $linktree_url, name: $name, others_url: $others_url, patreon_url: $patreon_url, pinterest_followers: $pinterest_followers, pinterest_url: $pinterest_url, snapchat_url: $snapchat_url, tiktok_followers: $tiktok_followers, tiktok_url: $tiktok_url, twitter_followers: $twitter_followers, twitter_url: $twitter_url, youtube_followers: $youtube_followers, youtube_url: $youtube_url, usertype: $usertype, categories: $categories, age: $age, gender: $gender, location: $location}) {
    id
    base_url
  }
}
"""

def parseFollowers(text):
  if text == None:
    return None
  if text == "":
    return None
  
  text = text.lower()
  if text[-1] == "k":
    return str(int(float(text[:-1])*1000))
  elif text[-1] == "m":
    return str(int(float(text[:-1])*1000*1000))
  else:
    return text
  
class InfluenceScraper:
  def __init__(self):
    self.link = None
    self.data = {
      'name': None,
      'usertype':None,
      'location':None,
      'gender':None,
      'age':None,
      'categories':[],
      'base_url':None,
      'followers_reach':None,
      'instagram_url': None,
      'facebook_url': None,
      'tiktok_url': None,
      'twitter_url': None,
      'youtube_url': None,
      'pinterest_url': None,
      'linkedin_url': None,
      'snapchat_url': None,
      'linktree_url': None,
      'patreon_url': None,
      'others_url': [],
      'instagram_followers': None,
      'facebook_followers': None,
      'tiktok_followers': None,
      'twitter_followers': None,
      'youtube_followers': None,
      'pinterest_followers': None,
    }
  
  def scrape(self, usertype, username):
    link="https://influence.co"+username
    self.link = link
    self.data['base_url'] = link
    self.data['usertype'] = usertype
    
    try:
      r = requests.get(link)	
    except requests.exceptions.RequestException as error:
      logging.info("Error: {}, {}".format(self.link, error))
      return
      
    soup = BeautifulSoup(r.content, 'html5lib') 
    link_elements = soup.findAll(attrs={'class': re.compile(r"^network$")})
    self.setUserData(soup)
    self.setLinks(link_elements)
    self.saveData()
    # print(self.data)
    
  def saveData(self):
    try:
      self.data['others_url'] = json.dumps({"data":self.data['others_url']})
      self.data['categories'] = json.dumps({"data":self.data['categories']})
      print(self.data)
    #   response = client.execute(query=query, variables= self.data)
    #   logging.info("Success: {}, {}".format(self.link, response))
    except Exception as e:
      logging.info("Error: {}, {}".format(self.link, e))
    
  def setUserData(self, soup):
    try:
      name_el = soup.find('h1', attrs={'style':'margin: 0; font-size:30px'})
      self.data['name'] = ' '.join(BeautifulSoup(name_el.get_text(), "html.parser").stripped_strings)
    except Exception as e:
      logging.info("Error: {}, {}".format(self.link, e))
    
    try:
      pipe_el = soup.find('span', attrs={'style':'color: #E4E4E4;'})
      reach_el = pipe_el.find_next_sibling('strong')
      reach_parsed = ' '.join(BeautifulSoup(reach_el.get_text(), "html.parser").stripped_strings)
      self.data['followers_reach'] = parseFollowers(reach_parsed)
    except Exception as e:
      logging.info("Error: {}, {}".format(self.link, e))
      
    try:
      demographic_el = soup.find('p', attrs={'style':'text-overflow: ellipsis; overflow: hidden; white-space: nowrap;'})
      demographic_text = demographic_el.get_text()
      
      if demographic_text:
        arr = demographic_text.split()
        if arr[1]:
          self.data['gender'] = arr[1]
        if arr[2]:
          self.data['age'] = arr[2]
    except Exception as e:
      logging.info("Error: {}, {}".format(self.link, e))
      
    try:
      location_el = soup.find_all(lambda tag: tag.name == "strong" and "Location" in tag.text)
      if location_el[0] and location_el[0].parent:
        location_text = location_el[0].parent.get_text()
        arr = location_text.split()
        if arr[1]:
          self.data['location'] = " ".join(arr[1:])
    except Exception as e:
      logging.info("Error: {}, {}".format(self.link, e))

    try:
      categories_elements = soup.findAll('span', attrs={'class':'category-ribbon'})
      for item in categories_elements:
        text = item.get_text().strip()
        if text:
          self.data['categories'].append(text)
    except Exception as e:
      logging.info("Error: {}, {}".format(self.link, e))

  def setLinks(self,items):
    for item in items:
      link = item.findChild("a")['href']
      link = link.lower()
      
      followers_el = item.find('span', class_='badge badge-influence')
      if followers_el:
        followers = parseFollowers(followers_el.get_text())
      else: 
        followers = None
      
      if ('instagram.com' in link):
        self.data['instagram_url'] = link
        self.data['instagram_followers'] = followers
      elif ('facebook.com' in link):
        self.data['facebook_url'] = link
        self.data['facebook_followers'] = followers
      elif ('tiktok.com' in link):
        self.data['tiktok_url'] = link  
        self.data['tiktok_followers'] = followers
      elif ('twitter.com' in link):
        self.data['twitter_url'] = link   
        self.data['twitter_followers'] = followers
      elif ('youtube.com' in link):
        self.data['youtube_url'] = link   
        self.data['youtube_followers'] = followers
      elif ('pinterest.com' in link):
        self.data['pinterest_url'] = link
        self.data['pinterest_followers'] = followers
      elif ('linkedin' in link):
        self.data['linkedin_url'] = link
      elif ('snapchat.com' in link):
        self.data['snapchat_url'] = link
      elif ("linktr.ee" in link):
        self.data['linktree_url'] = link
      elif ("patreon.com" in link):
        self.data['patreon_url'] = link
      else:
        self.data['others_url'].append(link)


logging.basicConfig(level=logging.INFO, filename="output.txt", filemode="w")
filename = 'influencers.csv'
# with open(filename, mode ='r') as file:
#   csvFile = csv.reader(file)
#   next(csvFile)
#   for lines in csvFile:
#     iScraper = InfluenceScraper()
#     iScraper.scrape(lines[1], lines[3])
    
iScraper = InfluenceScraper()
iScraper.scrape('/test_updated', '/tygeesensei')