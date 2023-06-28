import requests
import time
import json

def get_instadetails(username):
    url = "https://www.instagram.com/"+ username +"/?__a=1&__d=1"

    result = requests.get(url=url)
    res = result.json()
    # print(res.keys())
    try:
        print(res['graphql']['user']['edge_owner_to_timeline_media'])
    except Exception as e:
        print(e)

    time.sleep(0.5)


# get_instadetails()    
with open('engagement_rates.json') as file:
    # Load the JSON data
    data = json.load(file)

# Retrieve the engagement rates as an array
usernames = [item['username'] for item in data]
get_instadetails('teja._anand')

# Print the engagement rates array
# print(engagement_rates)
# for user in usernames:
#     try:
#         get_instadetails(user)
#     except Exception as e:
#         print(e)    