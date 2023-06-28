import json

file_path = "single_reel_data.json"  # Replace with the actual path to your JSON file

# Read the JSON file
with open(file_path, "r") as file:
    json_data = json.load(file)

# Access and process the JSON data
# Here's an example of printing the content of the JSON file
print(json_data['items'][0]['location']['city'])
