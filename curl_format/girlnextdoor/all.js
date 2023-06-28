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
    "x-asbd-id": "198387",
    "x-csrftoken": "d9vhlwrV1rSVAtR26LA9VDzgQreuHL3z",
    "x-ig-app-id": "936619743392459",
    "x-ig-www-claim": "hmac.AR12y-CaZnZcTeNoC-nvJmyiZZdhvBAGLnh5SA26R-cTZtO1",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "mid=ZGGZCAAEAAHX2c9KlxyZBs0OcXI3; ig_nrcb=1; ig_did=ECFEB947-D39A-4319-B056-1EB95BF7DFFD; fbm_124024574287414=base_domain=.instagram.com; datr=b6NhZNVrFi1_mm2BNrKSpV1m; dpr=2; ds_user_id=51304663025; csrftoken=d9vhlwrV1rSVAtR26LA9VDzgQreuHL3z; shbid=\"15584\\05451304663025\\0541717476393:01f7d34d19da7a9a64e440ab0302ebfc29b740f86ce369368e320c910633b30863169283\"; shbts=\"1685940393\\05451304663025\\0541717476393:01f751cd3d8baaf835a150a9759d3090cdced94c335735d68115dade50c117f3e479bae1\"; fbsr_124024574287414=ySpGYYw0y5x44HCz2TvK66IGrd0Gcf2hS8o2vBLMfLo.eyJ1c2VyX2lkIjoiMTAwMDA0ODQ1ODE4ODkzIiwiY29kZSI6IkFRQ2hUVHkwQmhrMlBVei11c0RReDBuXzd0RmU3cThSUzE4X3JqTmxyUHYyZ0tkUDQ1UlhaemVzaTRmMkxXQ0ZBaHRYVGFrdW5lOFExVGpJci1McnB3VTcxbXBXdjlBRWJOd1ZMTl9xZEtDZ09EMzkwYWh4X1dzcU13OEJsSE1aUHBuajZ3UTNXTThXQ0d3TkVra3BkRUlhRDZ0UEZZejVWZDZ2VUNiRHpyYkFxREZkOU5DUDRKd1RiTkhOZVVMSVVYTXFoeHJONXdpSk1vSjZCNVkxOThsZnNfb0xSUXl5bTZxeHl6TGlEVk9JOGk4NjQ3bE1MaHVaZlhBTWhaUVB6WFV2cUFhX09PWTJRUTVxYkM3em5kb1M4ZkYyR3ZFM2ItbU9aZ0tvSUp2YllxRXdMV1hBdW5FNU1vUy1wVTkzeWk0X2dPMk9qZDU2NVVnRENTMEdFLWoxIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUNrUnhqVE0wSHc0YVF5dEpObmF3a2tnak9SYnFGZHZVaDdXelB0Z3hJb3F6d0FWWWRSeXJDcHUxNHRnSVpBVEZQRzJTU1pDUVlqSzFBU0hVcGthRldGTERGUGNhUGR5N3RGT2xVVkJuMm1uMUlQWkNKdXNmOHF1Y010bE1zQjlTT3JveVI5WkNURDBDT1BFVFE0Z2hqOWhHbXVFMmNoM0VkRnhpUTlUZE16bFU2OG5IUnlHV3VFOEFiOVRvQVpEWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTY4NTk0MjUxNX0; sessionid=51304663025%3A0iylpqo3sEYJJD%3A21%3AAYfFk4ezwoY-vKkqyDL_TQ2e8nNnG7sGO8bUk-FWQg; rur=\"LDC\\05451304663025\\0541717499960:01f795002d4a16880e3abd90c4efb157f4f672bc87f7d380553554573b3de4070c7f1518\"",
    "Referer": "https://www.instagram.com/onlymuchlouder/followers/",
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
      fetch("https://www.instagram.com/api/v1/friendships/7449266310/followers/?count=12&max_id=" + max_id + "%3D%3D&search_surface=follow_list_page", {
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
//   runFetchLoop();
  
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

fetchLoop2('QVFETGE2WUJHS3BVeDFOcnlNVFR5VVJKdUI5UzZzUVFNMGNTc0FuLXZqcG5ZTlVkdkFPVGtqcDFOU0k3Z0xmNzNpME5SM1BhaG9TcEk0VHZTYlBOZU14dg==')