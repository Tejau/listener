// const fetch = require('node-fetch');
const fs = require('fs');

var cheaders = {
  "accept": "*/*",
  "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
  "content-type": "application/x-www-form-urlencoded",
  "sec-ch-prefers-color-scheme": "dark",
  "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
  "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.106\", \"Google Chrome\";v=\"114.0.5735.106\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"macOS\"",
  "sec-ch-ua-platform-version": "\"12.3.1\"",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "viewport-width": "1440",
  "x-asbd-id": "129477",
  "x-csrftoken": "JlkOLu6d2xfaAqM59M0BkeZ6q8oaqVNW",
  "x-ig-app-id": "936619743392459",
  "x-ig-www-claim": "hmac.AR3v09qKitQInYuz9OCJ6ZQN3PVx3Invm69kYgqYXUgLDvT2",
  "x-instagram-ajax": "1007660754",
  "x-requested-with": "XMLHttpRequest",
  "cookie": "mid=ZGGZCAAEAAHX2c9KlxyZBs0OcXI3; ig_nrcb=1; ig_did=ECFEB947-D39A-4319-B056-1EB95BF7DFFD; fbm_124024574287414=base_domain=.instagram.com; datr=b6NhZNVrFi1_mm2BNrKSpV1m; shbid=\"15584\\05451304663025\\0541717736267:01f73a945d33a170be92362ea429bdd2ee4d3e6e3eca3c2988a58686e2b21d66195b5211\"; shbts=\"1686200267\\05451304663025\\0541717736267:01f7caeaf501ad39e8b4e6acfe32efa10808dfc56d70b3057fc5d3b62aa3d237d449c214\"; dpr=2; csrftoken=JlkOLu6d2xfaAqM59M0BkeZ6q8oaqVNW; ds_user_id=59502245384; sessionid=59502245384%3AftlFiP2p23p4Ob%3A6%3AAYf2GwmsdMtbw0DClwOlk4BlajapiEP1Hf56GYkgcw; fbsr_124024574287414=MvdFoWFCFxgL5wEeDmGlaTtywAyEcx9yEZ6_lLcmRNc.eyJ1c2VyX2lkIjoiMTAwMDA0ODQ1ODE4ODkzIiwiY29kZSI6IkFRQXlWZEhWQXBxekE3Mm81emx3S2NxY1FjQXRySHZGcEtSVjVJajJKZDk0TjVfZXcyZnhTcktkNGl4ckdtNFVWWl9lUkNNSC1SY1l5OVY3eU9BV2xYNmRxajRzYnpDVzFlNlNlbzZfTlp5b1lHUzQ2cG1zeHJUNTl4bkNZQlNVZWZ3ZVB0SldkUmMwRkhTWU00eThpRUV5MXdFWVNGQ3o3UWpJUjNOcFp6UTIwYjZPeEwwRGN2YnhDSlhnT29vWlozWjBTYkdwZVBlQzdJNGo0Q0tkRW5CTm1HdVNIa05HdWRXVjVPLThTbHJoSE41cU5nSzhVbW9NV0ZBeWEwX3pSNzJTMnNxcWNvVzZaVFdsZENJcTkzSEZ0ZnoyWktQTjdtVFNqdmFFMU5kUlhKMEYxNkxETkxLeF9LS1JIek01bEVET05uc3AwQUx6b3JiM1dkcDlKMWhpbzVoanFuTW04M09CbGNzUmt0SlI5dyIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFIWkJsWFpDcklmaUN5Sm5RZXFaQlVQWkJUNlZPZXBmM1lRRXdERllQdHU5ejJCUkFUSURWWkFZdTdqWkFubzNsc0lJN0pxd2Zvdm1vclZUYzY5bDZmcVlSSmk1eWl4UmI0aWxaQlJwRDFnN3p6ZEFrb2drMUZ5bDVCOUM0TmY1MExnWkJMcEhaQkUwYnNoa2pyNk8xWVFVbDBqRlV2NkVsWElZRXlZREVyQTNtbXlzdWR0UEt2RzBRUHdNRTZ1c1ZWd1pEWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTY4NjUzNTM0NX0; fbsr_124024574287414=rtHYILQUuaUUDrsanoYXxe_YY2XyWD___HNQgQULaqI.eyJ1c2VyX2lkIjoiMTAwMDA0ODQ1ODE4ODkzIiwiY29kZSI6IkFRQjdwTDBIYnhHMVBPcW8wS0FGcGxOeWtCbG9xV1pybkNOYnZRSlpJNlBndklvSEVzLUpjZWJzMTloZ2U5X21oUzd2dktNZ0pRcEtRaXNVRWwwN1VVVThFR3NncGp3YlNrVS1mbG5ZRXBVVDlUbHU3dzYxQm1fa3FBWUUycnlIck1zMGN0bkRlWkpuMzgxQ0FoT1lva1RtemVnb05ZcnRCTUhfaVhvNXctRnJhdVBuRTZET0dTWjNtdlpmNVVCU0dLM1NCQWg5dU5XQko4UTFQNHdDYW4tcXRNZk4tZkZkZENLNmdEbVFILWowTmFldXhvcW1GSE5GTW1tNTJsQTlpT3VmSVZ6el9tU2hWdkxUUk0zN2JPTG5RNkRGZk5lWEtnRWZyby1pTkM4YzJOMFBldml0Nm9kNExDQXhucVBoZlNPZ29QY1QxWFctNjVjNFZzS3JsWHpaRjVxMUt2UVV4OUZ0cUxIX0hoMXRZZyIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFCWThLSTFqZGZyTzlMQ1FUMEd4MUZ4MWZ5V1pBSDY5cEwzaEl1T1pDRDZFU1pBMTBOYzNqOUJyQ2xaQ0plQkJLS3hoVTJDcGo1YjFDYzdnZjJEeW1LdjRnaEIxSnhEM1VGa2JDZm50QlhZTFYyb3BEWkMzRGJuUW1EVkFReWFxSWpZUTF0UmYzRkxoWGJaQzdpUnl0eHhqTkZRWTRlVGhUNkl4WDBsYnIxbW5aQjBqWkJ0UXlNYlJYU3prQjdNUUhBWkRaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjg2NTMyOTY3fQ; rur=\"CLN\\05459502245384\\0541718080053:01f7083c1b940198a6f4b3a9c846ab6759405e181affc034839da63060d53325851c5d24\"",
  "Referer": "https://www.instagram.com/iansomerhalder/reels/",
  "Referrer-Policy": "strict-origin-when-cross-origin"
}

function appendDataToTextFile(jsonData) {
  let fileData = `\nResponse Data: ${jsonData}\n\n`;

  fs.appendFile('data.txt', fileData, 'utf8', (err) => {
    if (err) {
      console.error('Error appending usernames to file:', err);
    } else {
      console.log('Usernames appended to file successfully!');
    }
  });
}
function fetchHeaders(){
  fetch('headers.json')
  .then(response => response.json())
  .then(data => {
    console.log(data.headers);
    // cheaders = data.headers;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function InitialfetchInstagramClips(targetUserId) {
  
  const requestBody = `target_user_id=${targetUserId}&page_size=12&include_feed_video=true`;

  return new Promise((resolve, reject) => {
    
    fetch('https://www.instagram.com/api/v1/clips/user/', {
    headers: cheaders
    ,
      body: requestBody,
      method: 'POST'
    })
      .then(response => {
        // console.log(cheaders)
        // console.log(response)
        if (!response.ok) {
          throw new Error(`Request failed with status ${response}`);
        }
        return response.json();
      })
      .then(data => {
        let res = data
        // console.log(res?.items[0]?.media?.)
        console.log(data)
        let responseData = JSON.stringify(data);
        appendDataToTextFile(responseData)
        const reels = (data?.items).map(reel=>reel?.media?.code);
        const comment_counts = (data?.items).map(reel=>reel?.media?.comment_count);
        // const comments = (data?.items).map(reel=>reel?.media?.comments[0]?.text);
        const like_counts = (data?.items).map(reel=>reel?.media?.like_count);
        // console.log(data)
        console.log(reels,comment_counts, like_counts)
        let load_more = data?.paging_info?.more_available
        let max_id = res?.paging_info?.max_id
        console.log(max_id,load_more)
        
        resolve(max_id)})
      .catch(error => reject(error));
  });
}




function fetchInstagramClips(targetUserId, maxId) {
    console.log('given max id:', maxId)
    const url = 'https://www.instagram.com/api/v1/clips/user/';
   
    const body = `target_user_id=${targetUserId}&page_size=12&max_id=${encodeURIComponent(maxId)}&include_feed_video=true`;
    const method = 'POST';
    // const fetch = require('node-fetch');

    return new Promise((resolve, reject) => {
      fetch(url, {
        headers:cheaders,
        body,
        method
      })
        .then(response => {
            // console.log(response)
          if (!response.ok) {
            throw new Error(`Request failed with status ${response}`);
          }
          return response.json();
        })
        .then(data =>{
            // console.log(data?.items)
            let responseData = JSON.stringify(data);
            appendDataToTextFile(responseData)
            let max_id = data?.paging_info?.max_id;
            let load_more = data?.paging_info?.more_available;
            const reels = (data?.items).map(reel=>reel?.media?.code);
            const comment_counts = (data?.items).map(reel=>reel?.media?.comment_count);
            // const comments = (data?.items).map(reel=>reel?.media?.comments[0]?.text);
            const like_counts = (data?.items).map(reel=>reel?.media?.like_count);
            const caption = (data?.items).map(reel=>reel?.media?.caption?.text);
            let single_reel = {'reel_code':reels[0], 'comment_count':comment_counts[0], 'like_count':like_counts[0]}
            // console.log(data)
            console.log(reels,comment_counts, like_counts)
            console.log(max_id,load_more)
        
            if(!load_more){
                reject("all scraped")
            }
            resolve(max_id,load_more)})
        .catch(error => reject(error));
    });
  }
  
  function runFetchLoop(targetUserId) {
    // Helper function to generate random time between 10 and 15 seconds
    function getRandomTime() {
      return Math.floor(Math.random() * (30000 - 250000 + 1)) + 100000;
    }
  
    // Recursive function that fetches followers and continues the loop
    var count = 0
    function fetchLoop(targetUserId,max_id) {
        fetchInstagramClips(targetUserId,max_id)
        .then(updated_max_id => {
          // Process the data or do something with it
          // ...
  
          const randomTime = getRandomTime();
          setTimeout(() => {
            console.log('posts count are :', count*12);
            count= count+1
            if(count==20){
              throw new Error('200 posts scrapped.');

            }
            fetchLoop(targetUserId,updated_max_id);
          }, randomTime);
        })
        .catch(error => {
          console.error("Error fetching posts:", error);
        });
    }
  
    InitialfetchInstagramClips(targetUserId)
      .then(max_id => {
        fetchLoop(targetUserId,max_id);
      })
      .catch(error => {
        console.error("Error fetching initial data:", error);
      });
  }
  
  // Start the fetch loop
// fetchHeaders();
runFetchLoop('6973582115');
  
function fetchLoop2(targetUserId,max_id) {
    fetchInstagramClips(targetUserId,max_id)
      .then(updated_max_id => {
        // Process the data or do something with it
        // ...
        function getRandomTime2() {
            return Math.floor(Math.random() * (15000 - 10000 + 1)) + 10000;
          }
        const randomTime = getRandomTime2();
        setTimeout(() => {
          fetchLoop2(targetUserId,updated_max_id);
        }, randomTime);
      })
      .catch(error => {
        console.error("Error fetching followers:", error);
      });
  }
// fetchLoop2('2970587902','QVFCbFppUzdaS0k1WklOVTR5dVFEelJjQjdyVkRoeWFZNDExVHRMM0QzLTI3ZUsxNE9FaFhsbWlBTnBGQ0tkajJZcjRFZng3N1lyTzZBc1dsaTVBY0lhNQ==')
  


      
      
      
      
      