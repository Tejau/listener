import requests

# Define the base URL and endpoint
base_url = 'https://api.moonio.io/api/creators'
endpoint = 'https://app.moonio.io/creators'

# Set the filter parameters for follower count
min_followers = 1000
max_followers = 10000

# Create the URL with the encoded filter parameters
url = "https://api.moonio.io/api/creators/https%3A%2F%2Fapp.moonio.io%2Fcreators%3Ffilter%5Bengagement_percentage_filter%5D%3D0%2C20%26filter%5Bfollowers_filter%5D%3D3%2C7%26network%3Dinstagram%26page%3D2"
url2 = "https://api.moonio.io/api/creators/https%3A%2F%2Fapp.moonio.io%2Fcreators%3Fnetwork%3Dinstagram%26page%3D2"
url3 = "https://api.moonio.io/api/creators/https%3A%2F%2Fapp.moonio.io%2Fcreators%3Fnetwork%3Dinstagram%26page%3D3"
# Set the headers and authorization token
headers = {
    'Authorization': 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlamFyZWRkeXZlZGFAZ21haWwuY29tIiwiaWQiOjE4NTcyLCJleHAiOjE2OTA1MjYyMjksImlzX2FkbWluIjpudWxsLCJpYXQiOjE2ODUzNDIyMjl9.Fczod-NikhVUlLCEDdGJ-BMPlRm85QUJHVTedW0Cu5w',
    'Content-Type': 'application/json',
    # Add other required headers if necessary
}

# Send the GET request
response = requests.get(url, headers=headers)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Process the response data
    data = response.json()
    # Do further processing with the filtered data
    print(data)
else:
    print(f"Request failed with status code {response.status_code}")

