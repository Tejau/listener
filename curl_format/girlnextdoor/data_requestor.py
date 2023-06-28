import requests
import time

def fetch_instagram_data(username):
    url = f"https://www.instagram.com/{username}/?__a=1&__d=1"
    print(url)
    response = requests.get(url)
    data = response.json()
    print(data)
    if response.status_code == 200:
        
        with open("insta_data__a1__b1.txt", "a") as file:
            file.write(str(data) + "\n")
    else:
        print(f"Failed to fetch data for {username}")

# Read usernames from data.txt
with open("data.txt", "r") as file:
    usernames = file.read().splitlines()

# Call the function for each username every one second
for username in usernames:
    fetch_instagram_data(username)
    time.sleep(3)
