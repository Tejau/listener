// "https://www.instagram.com/api/v1/feed/user/janviiyy/username/?count=6"
// "https://www.instagram.com/api/v1/feed/user/8922110462/?count=12&max_id=3103986948482373253_8922110462"
// first request
const fs = require('fs');

var max_id = ''
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
 
function removeDoubleEquals(str) {
    return str.replace(/==/g, '');
  }  

function getRandomNumber() {
const min = 10000;
const max = 150000;
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function appendUsernamesToTextFile(jsonData) {
    const users = jsonData.users;
    const usernames = users.map(user => user.username);
  
    const content = usernames.join('\n');
  
    fs.appendFile('data.txt', content, 'utf8', (err) => {
      if (err) {
        console.error('Error appending usernames to file:', err);
      } else {
        console.log('Usernames appended to file successfully!');
      }
    });
  }
const headers = {
  "accept": "*/*",
  "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
  "sec-ch-prefers-color-scheme": "dark",
  "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
  "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.90\", \"Google Chrome\";v=\"114.0.5735.90\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"macOS\"",
  "sec-ch-ua-platform-version": "\"12.3.1\"",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "viewport-width": "1440",
  "x-asbd-id": "129477",
  "x-csrftoken": "6CwlH221WulhIgPhKNv8bAtihbUHPLlQ",
  "x-ig-app-id": "936619743392459",
  "x-ig-www-claim": "hmac.AR12y-CaZnZcTeNoC-nvJmyiZZdhvBAGLnh5SA26R-cTZkVJ",
  "x-requested-with": "XMLHttpRequest",
  "cookie": "mid=ZGGZCAAEAAHX2c9KlxyZBs0OcXI3; ig_nrcb=1; ig_did=ECFEB947-D39A-4319-B056-1EB95BF7DFFD; fbm_124024574287414=base_domain=.instagram.com; datr=b6NhZNVrFi1_mm2BNrKSpV1m; dpr=2; ds_user_id=51304663025; csrftoken=6CwlH221WulhIgPhKNv8bAtihbUHPLlQ; sessionid=51304663025%3AqIsMdlUCixRQIe%3A15%3AAYcO8pQbfSGUHaHpnYhUEQq8Sy7yrKmS-26wq7lAQw; shbid=\"15584\\05451304663025\\0541717736267:01f73a945d33a170be92362ea429bdd2ee4d3e6e3eca3c2988a58686e2b21d66195b5211\"; shbts=\"1686200267\\05451304663025\\0541717736267:01f7caeaf501ad39e8b4e6acfe32efa10808dfc56d70b3057fc5d3b62aa3d237d449c214\"; rur=\"LDC\\05451304663025\\0541717736583:01f70dc1f96ab6bf6f1216937de46e012f73171199e34f26e23a75277715e391e09a87fe\"",
  "Referer": "https://www.instagram.com/pooja.das_/followers/",
  "Referrer-Policy": "strict-origin-when-cross-origin"
}
function initialFetch() {
return new Promise((resolve, reject) => {
    fetch("https://www.instagram.com/api/v1/feed/user/pooja.das/username/?count=6", {
    "headers": headers,
    "method": "GET"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // appendUsernamesToTextFile(data)
        // const max_id = data.next_max_id.replace(/==/g, '');
        resolve(true);
    })
    .catch(error => {
        reject(error);
    });
});
}
  

function fetchFollowers(max_id) {
    return new Promise((resolve, reject) => {
      fetch("https://www.instagram.com/api/v1/feed/user/8922110462/?count=12&max_id="+max_id, {
        "headers": headers,
        "method": "GET"
      })
        .then(response => response.json())
        .then(data => {
          console.log("Followers response:", data);
          appendUsernamesToTextFile(data)
          const updated_max_id = removeDoubleEquals(data.next_max_id);
          resolve(updated_max_id);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  


async function scrapedata(){
    initialFetch().then(async (id)=>{
        await sleep(getRandomNumber())
        fetchFollowers(id)
    })
}      

// scrapedata()
function runFetchLoop() {
    // Helper function to generate random time between 10 and 15 seconds
    function getRandomTime() {
      return Math.floor(Math.random() * (15000 - 10000 + 1)) + 10000;
    }
  
    // Recursive function that fetches followers and continues the loop
    function fetchLoop(max_id) {
      fetchFollowers(max_id)
        .then(updated_max_id => {
          // Process the data or do something with it
          // ...
  
          const randomTime = getRandomTime();
          setTimeout(() => {
            fetchLoop(updated_max_id);
          }, randomTime);
        })
        .catch(error => {
          console.error("Error fetching followers:", error);
        });
    }
  
    initialFetch()
      .then(max_id => {
        fetchLoop(max_id);
      })
      .catch(error => {
        console.error("Error fetching initial data:", error);
      });
  }
  
  // Start the fetch loop
  // runFetchLoop();
var count = 1;

function fetchLoop2(max_id) {
    fetchFollowers(max_id)
      .then(updated_max_id => {
        // Process the data or do something with it
        // ...
        function getRandomTime2() {
            return Math.floor(Math.random() * (15000 - 10000 + 1)) + 10000;
          }
        const randomTime = getRandomTime2();
        
        setTimeout(() => {
          count= count+1;
          if(count==30){
            count = 0
            console.log("sleeping 5 min")
            sleep(300000)
          }
          console.log("count is ",count)
          fetchLoop2(updated_max_id);
        }, randomTime);
      })
      .catch(error => {
        console.error("Error fetching followers:", error);
      });
  }

// fetchLoop2('QVFCal9uTl9UY2NlYktBc285cDNvUnJRV1g0dC05c0g1OGJCUzhvUjY2cllvYjNQbDBsekNZdUxwVk1uc1dZbkVxajBNVU1idmJ6ZVRRRGtUeFBYZ2c3dQ')
initialFetch()