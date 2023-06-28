from selenium import webdriver as web
from selenium.webdriver.common.keys import Keys
import time
import random
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import json


options = web.ChromeOptions()

options.add_experimental_option("excludeSwitches", ["enable-logging"])
# options.add_argument("--headless")  # Enable headless mode
# options.add_argument("--disable-gpu")  # Disable GPU acceleration


browser = web.Chrome(options=options)
browser.set_window_size(400, 900)

bot_username = 'anandanwrites'
bot_password = 'Damner@123456'
profiles = ['sruthijaj_official']
amount = 300
result = 'usernames'

us=''
followers_list = []
browser.get('https://www.instagram.com')
time.sleep(random.randrange(3, 6))
# Enter username:
            # Enter username:
username_input = browser.find_element(By.NAME, 'username')
password_input = browser.find_element(By.NAME, 'password')

username_input.clear()
username_input.send_keys(bot_username)
time.sleep(random.randrange(2, 4))
# Enter password:
# password_input = login_form.find_element_by_name('password')
password_input.clear()
password_input.send_keys(bot_password)
time.sleep(random.randrange(1, 2))
password_input.send_keys(Keys.ENTER)
time.sleep(random.randrange(100, 150))
print(f'[{bot_password}] Successfully logged on!')
print('https://instagram.com/' + profiles[0])
browser.get('https://instagram.com/' + profiles[0]+'/followers/')
time.sleep(random.randrange(10, 20))
# scroll_divison= browser.find_element(By.CSS_SELECTOR, "div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.xx6bls6.x1cnzs8.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x6s0dn4.x1oa3qoh.xl56j7k")

# Iterate over each div element and extract the content
scroll_divison = browser.find_element(By.CSS_SELECTOR, "div._aano")

unique_content = []

while True:
    script = """
    setInterval(function() {
        // Assuming the scroll_division element is already defined in JavaScript
        var scrollDivision = document.querySelector("div._aano");

        // Scroll to the bottom of the division
        scrollDivision.scrollTop = scrollDivision.scrollHeight;

        // Wait for a short duration
        setTimeout(function() {
            // Scroll back to the top of the division
            scrollDivision.scrollTop = 0;
        }, 3000); // Adjust the delay duration as needed
    }, 3000); // Adjust the interval duration as needed
    """

    browser.execute_script(script)

    div_elements = browser.find_elements(By.CSS_SELECTOR, "div.x9f619.xjbqb8w.x1rg5ohu.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x6s0dn4.x1oa3qoh.x1nhvcw1")

    # Open the JSON file in append mode
    with open('output_shruti.json', 'a') as json_file:

        # Iterate through div_elements
        for div_element in div_elements:
            content = div_element.text
            
            # Check if content is already in unique_content
            if content not in unique_content:
                
                # Add content to unique_content list
                unique_content.append(content)
                
                # Print the content
                print(content)
                
                # Write the content to the JSON file
                json.dump({'content': content}, json_file)
                json_file.write('\n')  # Add a newline after each JSON object

   
# Close the browser window


