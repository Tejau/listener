from data2 import x
import json

engagement_rates = []
def calculate_median(array):
    if not array:
        return None
    sorted_array = sorted(array)
    length = len(sorted_array)
    middle_index = length // 2
    if length % 2 == 0:
        median = (sorted_array[middle_index - 1] + sorted_array[middle_index]) / 2
    else:
        median = sorted_array[middle_index]
    return median

for item in x:
    engagement_rate={}
    try:
        creator = item
        # print(creator.keys())
        latestposts= creator['latestPosts']
        # print(type(latestposts))
        comments_array = []
        likes_array = []
        def calculate_custom_median(array):
            if not array:
                return None
            sorted_array = array
            length = len(sorted_array)
            middle_index = length // 2
            if length % 2 == 0:
                median = calculate_median([sorted_array[middle_index - 2] , sorted_array[middle_index - 1] ,sorted_array[middle_index] , sorted_array[middle_index + 1] , sorted_array[middle_index +2]]) 
            else:
                median = sorted_array[middle_index]
            return median
        singlepost = latestposts[0]
        # print(singlepost.keys())
        for i in latestposts:
            # print(i['timestamp'], i['likesCount'], i['commentsCount'])
            likes_array.append(i['likesCount'])
            comments_array.append(i['commentsCount'])
        # comments_array = sorted(comments_array, reverse=True)
        # print(comments_array)
        comments = calculate_custom_median(comments_array)
        # print(comments, str(sum(comments_array)/len(comments_array)))
        # print(likes_array)
        likes = calculate_custom_median(likes_array)
        # print(likes, str(sum(likes_array)/len(likes_array)))
        # print()
        # print((likes+comments)*100/creator['followersCount'])
        engagement_rate['username'] = creator['username']
        engagement_rate['engagement_rate'] = (likes+comments)*100/creator['followersCount']
        engagement_rates.append(engagement_rate)


    except Exception as e:
        print(e)    
with open('engagement_rates.json', 'w') as json_file:
    json.dump(engagement_rates, json_file)
filtered_array = [element for element in engagement_rates if element["engagement_rate"] > 10]
print(filtered_array)
