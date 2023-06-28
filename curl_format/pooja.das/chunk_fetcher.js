const chunk_number = '10'
  const headers={
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "cache-control": "max-age=0",
    "sec-ch-prefers-color-scheme": "dark",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "sec-ch-ua-full-version-list": "\"Not.A/Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"114.0.5735.90\", \"Google Chrome\";v=\"114.0.5735.90\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-ch-ua-platform-version": "\"12.3.1\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "viewport-width": "928",
    "cookie": "ig_did=F5F41D95-77EF-4FC4-B76C-E7DCDE1D201F; mid=YoNsgQAEAAFBLiNUbWo-OIIAqH2j; datr=bde-Y7xmMLv2Ugk0DZJifp6t; fbm_124024574287414=base_domain=.instagram.com; dpr=2; shbid=\"16482\\05457761454758\\0541717679291:01f7e568328f5167319b13f2a045e4fd7af736514f55100f78379ea761838463215bf2f2\"; shbts=\"1686143291\\05457761454758\\0541717679291:01f7fceed09d48926796e91c092d2f6e7215e5a7b11eedb25422e1347e45cadcbcc33934\"; fbsr_124024574287414=wQsz5yD-rPr-DvFb4-hVX9f_yYtcufU4wABIp_nT3-U.eyJ1c2VyX2lkIjoiMTAwMDkxOTI2NzkzMzUzIiwiY29kZSI6IkFRQ0RxWXhTQzNNbzBqNHRzUnVDdUlna3RmVktvN29mWTZLOW00bW5ZS2I4M2pmNEdsTW0yTTA4OFVxdVRCVUxrWHVDNE01OXpuaWVsRjZ3TmpPakpRdlVhZVFIb3ZSamVOeTNVVDUxRy1wZXlOVEJ2amZXZUVwRHMxR3VlTVZ2eURKcVRCUkozRGdqbFllb2pfYzZrbm90Y21jRVl6T2lHLURzWENkLUxteGdfdFdGWFZCb25GeGJ3dmpfQlp5LTNWU1NuaUVWSVhvR3ozeVQzRHZvcGduUl9tZEtvTjFzMS1yNVdEVEpPWTRJS21zS1RsVGtxS09wdFptNXJUTE02VTdLNDhrU0lyQkhsUFB2TkxNTUpERWtJTkxGeHVqZUFBVlhzenhqNWZmN2VQYl95bXJCTDJmcXppaExRdjhXRE12M2FpNlBMMk9XT1FJTEpSVTZaN2o5Iiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUxUYXhtTFkybzROeWdpZ25NeWlFTTg5NVBKR1pCY0pUbTR0SVZHVUFGOUI5eTZqT05ObHpEY1RHaUhLdjN1YnNGQXZsV1lRaEV1R0cydG9DdXEwdzZySDBva1pCYzdheGRrb2gyeGtqcll1eDFYUWJxbzFLN2FDcDVQdzU3Yng2Z3pKYVhWQ2k0ZjBaQUFCZ0JnTE5TNktOWkM5VTltc09WRUE3VFFvMEQ5NnE5bzZ2Vm9aRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjg2MjEzMjM5fQ; csrftoken=dHppSYbXBSQaHXq79nXrUDqT5mOwWByW; ds_user_id=41297474967; sessionid=41297474967%3AVW7oc0EIVQdICz%3A11%3AAYdGuShUI16OXL4aXCTh583Gx-D7CFkLzLi_7cVz-w; fbsr_124024574287414=wQsz5yD-rPr-DvFb4-hVX9f_yYtcufU4wABIp_nT3-U.eyJ1c2VyX2lkIjoiMTAwMDkxOTI2NzkzMzUzIiwiY29kZSI6IkFRQ0RxWXhTQzNNbzBqNHRzUnVDdUlna3RmVktvN29mWTZLOW00bW5ZS2I4M2pmNEdsTW0yTTA4OFVxdVRCVUxrWHVDNE01OXpuaWVsRjZ3TmpPakpRdlVhZVFIb3ZSamVOeTNVVDUxRy1wZXlOVEJ2amZXZUVwRHMxR3VlTVZ2eURKcVRCUkozRGdqbFllb2pfYzZrbm90Y21jRVl6T2lHLURzWENkLUxteGdfdFdGWFZCb25GeGJ3dmpfQlp5LTNWU1NuaUVWSVhvR3ozeVQzRHZvcGduUl9tZEtvTjFzMS1yNVdEVEpPWTRJS21zS1RsVGtxS09wdFptNXJUTE02VTdLNDhrU0lyQkhsUFB2TkxNTUpERWtJTkxGeHVqZUFBVlhzenhqNWZmN2VQYl95bXJCTDJmcXppaExRdjhXRE12M2FpNlBMMk9XT1FJTEpSVTZaN2o5Iiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUxUYXhtTFkybzROeWdpZ25NeWlFTTg5NVBKR1pCY0pUbTR0SVZHVUFGOUI5eTZqT05ObHpEY1RHaUhLdjN1YnNGQXZsV1lRaEV1R0cydG9DdXEwdzZySDBva1pCYzdheGRrb2gyeGtqcll1eDFYUWJxbzFLN2FDcDVQdzU3Yng2Z3pKYVhWQ2k0ZjBaQUFCZ0JnTE5TNktOWkM5VTltc09WRUE3VFFvMEQ5NnE5bzZ2Vm9aRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjg2MjEzMjM5fQ; rur=\"CLN\\05441297474967\\0541717749459:01f7f7e690492cf4ff6e1dbcfad2d2540e87b878e07216d5838474380c6c158c351ea3f2\""
  }


const fs = require('fs');
// const fetch = require('node-fetch');

// Read usernames from a file
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
 
function getRandomNumber() {
const min = 4000;
const max = 6000;
return Math.floor(Math.random() * (max - min + 1)) + min;
}  
fs.readFile('chunk_'+chunk_number+'.txt', 'utf8', async (err, data) => {
  if (err) {
    console.error('Error reading data.txt:', err);
    return;
  }

  const usernames = data.split('\n').map(username => username.trim()).filter(username => username !== '');
  const apiUrl = 'https://www.instagram.com/';

  const fetchPromises = usernames.map(async (username) => {
    const url = `${apiUrl}${username}/?__a=1&__d=1`;
    try {
      const response = await fetch(url, {
        headers: headers,
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: null,
        method: 'GET'
      });

      if (response.ok) {
        const json = await response.json();
        const responseData = JSON.stringify(json);
        // console.log(responseData.graphql.user.full_name)
        return { username, responseData };
      } else {
        console.error(`Error fetching data for ${username}: ${response.status} ${response.statusText}`);
        return { username, responseData: null };
      }
    } catch (error) {
      console.error(`Error fetching data for ${username}: ${error}`);
      return { username, responseData: null };
    }
  });

  try {
    const fetchResponses = await Promise.all(fetchPromises);
    const filename = 'chunk_'+chunk_number+'_data.txt';
    let fileData = '';
    fetchResponses.forEach((fetchResponse) => {
      fileData += `Username: ${fetchResponse.username}\nResponse Data: ${fetchResponse.responseData}\n\n`;
      sleep(getRandomNumber())
    });

    fs.writeFile(filename, fileData, (err) => {
      if (err) {
        console.error(`Error writing to ${filename}: ${err}`);
      } else {
        console.log(`Fetch responses written to ${filename}`);
      }
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
