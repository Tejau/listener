const headers = {
    "accept": "*/*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-csrf-token": "6/ccbGgbwCv2hu1Eq6EZ6D5TDp735mHDID6E1tgfSKqG4s3Y8uKTVjCfA98GWhILYE3arkMpTtl2wDzuj05Ekg==",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "event-search=0; _fbp=fb.1.1688735074015.1916265143; _gcl_au=1.1.762714639.1688735074; _ga=GA1.2.771234948.1688735076; __cf_bm=dyhcMg.YI.3g.HNZnMkdGyPcNxvpoc.3lTP9Tdp2HQU-1689051830-0-ASJ8v1+7lO2bBeuS9fqwm50fvwJRYuC2y/oeixd5pit/GgfPSp3r2MjcSn5hJqJw0w==; _gid=GA1.2.1558874308.1689051830; welcome_mat_pageview=1; welcome_mat_dismissed=1; _web_session=8eb9361ccc0749cfe9cfe261a934bc74; _cioid=61e8486051d0aa59134b1cf0; _hjFirstSeen=1; _hjIncludedInSessionSample_1210695=0; _hjSession_1210695=eyJpZCI6Ijk0NGUyZWM2LWM4YzgtNDk5Ni04YmJhLTI1MTU3M2IxYjNjMiIsImNyZWF0ZWQiOjE2ODkwNTIzMTE1MjMsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; _hjSessionUser_1210695=eyJpZCI6ImJiZDFlYmM1LWIzYzEtNThiYS05YzM0LTMxODg3NjliMGM2NCIsImNyZWF0ZWQiOjE2ODkwNTIzMTE1MTgsImV4aXN0aW5nIjp0cnVlfQ==; paywall-action=Search%20Limit; _gat=1; inf_id=Ug5xlLTHyTFtKk23n11fYwMo3QaDrJ1BdGN0G420MvcOmZvaL2QEX16rIPdKMyYzE73wjEIbwW6emnfBLA%2FVmZwmdoGX8Yf%2B%2By36MBc%2FMqm678uLvlXr8WAc5gvu9g%3D%3D--n%2B1u6ENj3Q4Bevw6--cABGyUZXYcnWK65wQzlXjg%3D%3D",
    "Referer": "https://influence.co/influencer_searches/advanced?is%5Baccount_type%5D=influencer&is%5Baudience_age%5D=&is%5Baudience_age_above%5D=&is%5Baudience_age_below%5D=&is%5Baudience_city%5D=&is%5Baudience_country%5D=&is%5Baudience_ethnicity%5D=&is%5Baudience_gender%5D=&is%5Baudience_location%5D=&is%5Bbio%5D=&is%5Bcategory_ids%5D%5B%5D=&is%5Bcategory_name%5D=&is%5Bdesc%5D=false&is%5Bexclude_campaign_id%5D=&is%5Bexclude_campaign_ids%5D=&is%5Bexclude_campaigns%5D=&is%5Bfollower_max%5D=&is%5Bfollower_max_default%5D=&is%5Bfollower_min%5D=&is%5Bfollower_min_default%5D=&is%5Bgender%5D=&is%5Bhas_amazon_url%5D=&is%5Bhas_blog_posts%5D=&is%5Bhas_demographics%5D=&is%5Bhas_google_analytics%5D=&is%5Bhas_ig_posts%5D=&is%5Bhas_media_kit%5D=&is%5Bhas_patreon%5D=&is%5Bhas_pinterest_posts%5D=&is%5Bhas_snapchat_posts%5D=&is%5Bhas_tiktok%5D=&is%5Bhas_yt_posts%5D=&is%5Bhashtag_ids%5D=&is%5Bis_claimed%5D=true&is%5Bis_featured%5D=&is%5Bis_female%5D=&is%5Bis_homepage_featured%5D=&is%5Bis_male%5D=&is%5Bis_pro%5D=&is%5Bis_select%5D=&is%5Bkeywords%5D=&is%5Blimit%5D=52&is%5Blocation_ids%5D%5B%5D=&is%5Bmax_age%5D=&is%5Bmax_erate%5D=&is%5Bmax_fb_likes%5D=&is%5Bmax_ga_visitors%5D=&is%5Bmax_pinterest_followers%5D=&is%5Bmax_rate%5D=&is%5Bmax_reach%5D=50000000.0&is%5Bmax_twitter_followers%5D=&is%5Bmin_age%5D=&is%5Bmin_erate%5D=&is%5Bmin_fb_likes%5D=&is%5Bmin_ga_visitors%5D=&is%5Bmin_pinterest_followers%5D=&is%5Bmin_rate%5D=&is%5Bmin_reach%5D=0.0&is%5Bmin_twitter_followers%5D=&is%5Boffset%5D=0&is%5Bonly_emails%5D=false&is%5Bpage%5D=0&is%5Branking_score%5D=true&is%5Bsearch_type%5D=advanced&is%5Bskip_includes%5D=&is%5Bsort_order%5D=followers_desc&is%5Busername%5D=",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
//   const fetch = require('node-fetch');
  const fs = require('fs');
  
  fetch("https://influence.co/influencer_searches/get_results?is%5Baccount_type%5D=influencer&is%5Bcategory_ids%5D%5B%5D=&is%5Bis_claimed%5D=true&is%5Blimit%5D=52&is%5Blocation_ids%5D%5B%5D=&is%5Bmax_reach%5D=50000000.0&is%5Bmin_reach%5D=0.0&is%5Boffset%5D=0&is%5Bpage%5D=0&is%5Branking_score%5D=true&is%5Bsearch_type%5D=advanced&is%5Bsort_order%5D=followers_desc", {
    method: "GET",
    headers: headers,
  })
  .then(response => response.text())
  .then(data => {
    fs.writeFile('data2.html', data, (err) => {
      if (err) throw err;
      console.log('Data has been written to data2.html');
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
  