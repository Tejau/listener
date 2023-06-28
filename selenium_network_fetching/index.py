from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

# Set path to your ChromeDriver executable
# chrome_driver_path = '/path/to/chromedriver'

# Configure Chrome options
chrome_options = Options()
# chrome_options.add_argument("--headless")  # Run Chrome in headless mode

# Create a new ChromeDriver instance
driver = webdriver.Chrome( options=chrome_options)

# Open the website
driver.get('https://www.youtube.com')

# Enable network logging
network_activity = driver.execute_script('''
   const performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};
const network = performance.getEntries() || [];
setTimeout(()=>{
    console.log('sleeping 1')
    var parsed_activity = JSON.stringify(network);}, 20000)
setTimeout(() => {
console.log('sleeping 2');
    return parsed_activity;
}, 30000);  // Sleep for 10 seconds (10000 milliseconds)

''')

# Wait for the network activity to be recorded
# You may need to adjust the wait time based on the website's loading speed
driver.implicitly_wait(10)

# Retrieve the recorded network activity
# network_activity = driver.execute_script('return JSON.stringify(network);')

# Print the recorded network activity
print(network_activity)

# Close the browser
driver.quit()
