// const fetch = require('node-fetch');
const { ok } = require('assert');
const fs = require('fs');

var cheaders = {
  "accept": "*/*",
  "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
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
  "x-ig-www-claim": "hmac.AR3v09qKitQInYuz9OCJ6ZQN3PVx3Invm69kYgqYXUgLDnsb",
  "x-requested-with": "XMLHttpRequest",
  "cookie": "mid=ZGGZCAAEAAHX2c9KlxyZBs0OcXI3; ig_nrcb=1; ig_did=ECFEB947-D39A-4319-B056-1EB95BF7DFFD; fbm_124024574287414=base_domain=.instagram.com; datr=b6NhZNVrFi1_mm2BNrKSpV1m; shbid=\"15584\\05451304663025\\0541717736267:01f73a945d33a170be92362ea429bdd2ee4d3e6e3eca3c2988a58686e2b21d66195b5211\"; shbts=\"1686200267\\05451304663025\\0541717736267:01f7caeaf501ad39e8b4e6acfe32efa10808dfc56d70b3057fc5d3b62aa3d237d449c214\"; dpr=2; csrftoken=JlkOLu6d2xfaAqM59M0BkeZ6q8oaqVNW; ds_user_id=59502245384; sessionid=59502245384%3AftlFiP2p23p4Ob%3A6%3AAYfS7dLKQTHBC034jZOePR1u4J7P0ddrMcbqeLSVIw; fbsr_124024574287414=0mj3yxs3IyyUX4OhF7dBHP8AgnEqzfdh4UMT4sKBIbs.eyJ1c2VyX2lkIjoiMTAwMDA0ODQ1ODE4ODkzIiwiY29kZSI6IkFRQkZRRTlHUzIzNWF2VWNVWDJXRDU2V2gyLU5BQlpBdExiZGJ1dFp4VEdhY2FMbW9WNkFhWEFHcDBURzhnTUQ5T2xtbDhDZUZwaC1DRWIzOHFGOHpZTzBOZzB5NU1QWk1MTjIyRjdqTVdYUzBScFBBNXQ3eXhIUEtYSklSVmJvY1F2RnNCUl94bm5ZU1VGbXNVUXpfS1N5TjFjOGxIWk9XNU02SzBWanZyWENMdWJiOGo2ckFnNjR0UVA3RXhnOXlaUkVtR25MTjdFOUJNYVBzLXpjOTM0T0cwb1NuNDd2eko3X0xoUzF3RFVMMWg1MnhtSkxLcVZIUDBoWXI4YzAxem4xSllQR1doWFJGOWUtdmp6amxJUXRCWnFOSG1jN3Vvay1FNXRtVVhnaUtUaC1UbGo0ZV9iTnNDUEFhUmdPbHZHRWEwejZVeXEyRnYxeDgzS01RWWlTNUd4RFZCaFBKS1dKTzh1N0YtdnR2USIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFFOUZBRlhzaDNsVmh4aDBQYmZPdHZzYkkwdjFaQlF1UmZFM3FNMlFHNWZmYkVGeVpBREVtTVZFbVR4ZGFWUTJrc0pBQjFlcU1rcVZqd1U5QllZMnJSeGg0eTJrVlk2WWtReHpTYmFUMTh5QTJCY2Fic2diYzVrbVpDTmhwNVA4YVdaQmFPN2JGaEw2a2twaTJwaGVQTzRuSHpCN2pFWWpQWkJKQ1VkWExVQWZjVHRNZWdOODNIMXNvRkN6Q1hRWkRaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjg2NTY0NTQ3fQ; rur=\"CLN\\05459502245384\\0541718103556:01f7e767d85b880083f15ac6be90ed675ecd531529feda0499a85095a1abcf767057ea40\"",
  "Referer": "https://www.instagram.com/urstrulymahesh/",
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

function InitialfetchInstagramClips(username) {
  
  const requestBody = `https://www.instagram.com/api/v1/feed/user/${username}/username/?count=6`;

  return new Promise((resolve, reject) => {
    
    fetch(`https://www.instagram.com/api/v1/feed/user/${username}/username/?count=6`, {
    headers: cheaders
    ,
      body: null,
      method: 'GET'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Request has failed with status${response} ${JSON.stringify(response.json())}`);
        }
        return response.json();
      })
      .then(data => {
        let res = data
        let responseData = JSON.stringify(data);
        appendDataToTextFile(responseData)
        const reels = (data?.items).map(reel=>reel?.code);
        const comment_counts = (data?.items).map(reel=>reel?.comment_count);
        // const comments = (data?.items).map(reel=>reel?.comments[0]?.text);
        const like_counts = (data?.items).map(reel=>reel?.like_count);
        console.log(reels,comment_counts, like_counts)
        let load_more = data?.more_available
        let max_id = res?.next_max_id
        let pk = res?.user?.pk_id
        console.log(max_id,load_more,pk)
        
        resolve([max_id, pk])})
      .catch(error => reject(error));
  });
}




function fetchInstagramClips(targetUserId, maxId) {
    console.log('given max id:', maxId)
    const url = 'https://www.instagram.com/api/v1/feed/user/'+targetUserId+'/?count=12&max_id='+maxId;
   
    const body = null;
    const method = 'GET';
    // const fetch = require('node-fetch');

    return new Promise((resolve, reject) => {
      fetch(url, {
        headers:cheaders,
        body,
        method
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Request failed with status ${response}`);
          }
          return response.json();
        })
        .then(data =>{
            let responseData = JSON.stringify(data);
            appendDataToTextFile(responseData)
            let max_id = data?.next_max_id;
            let load_more = data?.more_available;
            const reels = (data?.items).map(reel=>reel?.code);
            const comment_counts = (data?.items).map(reel=>reel?.comment_count);
            // const comments = (data?.items).map(reel=>reel?.comments[0]?.text);
            const like_counts = (data?.items).map(reel=>reel?.like_count);
            const caption = (data?.items).map(reel=>reel?.caption?.text);
            let single_reel = {'reel_code':reels[0], 'comment_count':comment_counts[0], 'like_count':like_counts[0]}
            console.log(reels,comment_counts, like_counts)
            console.log(max_id,load_more)
        
            if(!load_more){
                reject("all scraped")
            }
            resolve(max_id)})
        .catch(error => reject(error));
    });
  }
  
  function runFetchLoop(username) {
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
  
    InitialfetchInstagramClips(username)
      .then((data) => {
        console.log('gotten max id:', data[0], 'user_id:', data[1])

        fetchLoop(data[1],data[0]);
      })
      .catch(error => {
        console.error("Error fetching initial data:", error);
      });
  }
  
  // Start the fetch loop
// fetchHeaders();
runFetchLoop('urstrulymahesh');
  
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
  


      
      
      
      
      