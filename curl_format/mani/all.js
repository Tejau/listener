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
    "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.133\", \"Google Chrome\";v=\"114.0.5735.133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-ch-ua-platform-version": "\"12.3.1\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "viewport-width": "1440",
    "x-asbd-id": "129477",
    "x-csrftoken": "XjDrQN980JAoYCHaWvCBXOLOcTNGuRiW",
    "x-ig-app-id": "936619743392459",
    "x-ig-www-claim": "hmac.AR0kw7s6L64Gw8tz-kJJWSMrO35aIcJHyX0CuFT0YT996FwP",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "ig_nrcb=1; mid=ZI-8NgAEAAGdNxT2Wf_Rgw9fb3DE; ig_did=0E76DE8F-636A-4BC8-BD83-31316B33AADF; datr=4MqPZHY3bVI-LgRDE56ueBOY; fbm_124024574287414=base_domain=.instagram.com; dpr=2; csrftoken=XjDrQN980JAoYCHaWvCBXOLOcTNGuRiW; ds_user_id=3655127796; sessionid=3655127796%3AupOX57ZRhzMGsO%3A16%3AAYdzkGZwo5bhRal-In5ojNvIlVHnMZgX7XKfxikBow; shbid=\"4031\\0543655127796\\0541719517029:01f7d9cf2a172452e17f7befb23395a43067cf419dee5209c506318da65caff080ae1727\"; shbts=\"1687981029\\0543655127796\\0541719517029:01f761dd0e5350abdd472da2aeac196811fa6ed9ee4ac942c900d103422350fde437eb5d\"; fbsr_124024574287414=kCKrS87t12szxKUdc6ndbP7w6ymbXupnhp1r4tm7D3w.eyJ1c2VyX2lkIjoiMTAwMDA0ODQ1ODE4ODkzIiwiY29kZSI6IkFRQ1dHdFZRaVlJSDRsdWZ6dmt3QTUtVE5yZ09lMHB6ZWxDRG9QVnRMR3d2T0JjQlVUV0dXRTc1bUpjblVTa0FwVUl1bVJYUHo0Z1JvS2xNVDloTERUTnI4WWZ0RlhneGxBSEwtOEpNY0ZrNDZxSXhTeG5Sd2t6ZU10WmFzR2tiQW9MM1BFdG5Qcnc2dVU5RFFqcW1ocDFvWVZYRlVzd3VJRGhzcmFfbVN5cDRtalF5WmlIcnRhT0lUajRFQzFRbnVKU1dwRmVPdGpCNWhsdkgyYkdJUHZHeXZGNEdPZjVfSWk2Mi1Md2RSbUpIakRlU1pFSFhMZ20wLXljTFZ0R05UZTB2YWwxSXpIR0V1Nk5HRGNLWEhDd0ktNmdWd3RmRXZ3QU9XaVhXZzJ5RlNYOEIzRjZ4WVBsUUQwUnBod0JibGVTbENHSmNlYkZsMXZHWE9BUTkzSUdMIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUZVM25mVFB4amNQQzRscVZWcFdsSm9Kc3VzWkFDem5QWkJVbldmckxhMVNXOFJUcWl6bnNxVHpaQWdtSEs2OE1XOVBMU3lPYmxLdFZBcGNOaHFrNUhNMlFOa0s2RWw5bWVwOVZsd3o2WkIybzRhTUVNRHg2MkpCWkEzZmJhd0xKWkNUNnJiMHNreGFBWkM4TFpBNE9kUVhZdkxKNlJudHRNUlNaQWtFSzlETGludm1xdHptOGE2Vk9LOU9EWkE4ZlpCbUFaRFpEIiwiYWxnb3JpdGhtIjoiSE1BQy1TSEEyNTYiLCJpc3N1ZWRfYXQiOjE2ODc5ODE0ODV9; rur=\"ODN\\0543655127796\\0541719517518:01f7015ce901ca163b11df2822d5d1876fd9eb39cebfa8279d9fe00ca52f07e1ea958a98\"",
    "Referer": "https://www.instagram.com/maya_unlimited/followers/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
function initialFetch() {
return new Promise((resolve, reject) => {
    fetch("https://www.instagram.com/api/v1/friendships/7449266310/followers/?count=12&search_surface=follow_list_page", {
    "headers": headers,
    "method": "GET"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        appendUsernamesToTextFile(data)
        const max_id = data.next_max_id.replace(/==/g, '');
        resolve(max_id);
    })
    .catch(error => {
        reject(error);
    });
});
}
  

function fetchFollowers(max_id) {
    return new Promise((resolve, reject) => {
      fetch("https://www.instagram.com/api/v1/friendships/4623934864/followers/?count=12&max_id=" + max_id + "%3D%3D&search_surface=follow_list_page", {
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
  runFetchLoop();
  
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
          fetchLoop2(updated_max_id);
        }, randomTime);
      })
      .catch(error => {
        console.error("Error fetching followers:", error);
      });
  }

// fetchLoop2('QVFETGE2WUJHS3BVeDFOcnlNVFR5VVJKdUI5UzZzUVFNMGNTc0FuLXZqcG5ZTlVkdkFPVGtqcDFOU0k3Z0xmNzNpME5SM1BhaG9TcEk0VHZTYlBOZU14dg==')