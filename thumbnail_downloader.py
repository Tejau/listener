import os
import requests
import json

def download_images(data):
    folder_name = "thumbnailimages"
    if not os.path.exists(folder_name):
        os.makedirs(folder_name)

    for item in data:
        reel_url = item["reel_url"]
        thumbnail_url = item["thumbnailurl"]
        reel_id = reel_url  # Extracting reel ID from the URL

        image_data = requests.get(thumbnail_url).content
        file_path = os.path.join(folder_name, f"{reel_id}.jpg")

        with open(file_path, "wb") as f:
            f.write(image_data)

        print(f"Image downloaded: {file_path}")

# Load data from JSON file
with open("thumbnail_data.json", "r") as file:
    json_data = json.load(file)

# Download and save the images
download_images(json_data)
