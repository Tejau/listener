import requests
import threading

api_url = "https://www.instagram.com/mani/?__a=1&__d=1"  # Replace with the actual API URL

num_requests = 100  # Number of requests to send
block_limit = 0  # Counter for block limit
lock = threading.Lock()  # Lock to synchronize access to the block_limit variable


def make_request():
    global block_limit

    response = requests.get(api_url)
    
    with lock:
        try:
            json_data = response.json()
            # print(json_data.keys())
            print(json_data['graphql']['shortcode_media']['video_view_count'])

        except Exception as e:
            print(e)
            print('blocked')    



# Create and start the threads
threads = []
i =0
for _ in range(num_requests):
    i=i+1
    print(i)
    thread = threading.Thread(target=make_request)
    thread.start()
    threads.append(thread)

# Wait for all threads to finish
for thread in threads:
    thread.join()

print("Block limit reached", block_limit, "times out of", num_requests, "requests")
