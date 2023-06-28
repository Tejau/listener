const fs = require('fs');
const chunk_number = '1'
const file_name = 'data.txt'

fs.readFile(file_name, 'utf8', (err, data) => {
  var all_reels = []

  if (err) {
    console.error('Error reading ',file_name, err);
    return;
  }

  const lines = data.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('Response Data:')) {
      try{
        let responseData = JSON.parse(lines[i].substring(14));
        let data = responseData
        // console.log(responseData?.items[0]?.media?.usertags)
        // let co_owners = (responseData?.items).map((reel=>(reel?.media?.coauthor_producers)? reel?.media?.coauthor_producers[0]?.full_name:null));
        // let reels = (data?.items).map(reel=>reel?.media?.code);
        // let comment_counts = (data?.items).map(reel=>reel?.media?.comment_count);
        // // let comments = (data?.items).map(reel=>reel?.media?.comments[0]?.text);
        // let like_counts = (data?.items).map(reel=>reel?.media?.like_count);
        // let captions = (data?.items).map(reel=>reel?.media?.caption?.text);
        // let user_tags = (data?.items).map(reel=>reel?.media?.usertags?.in[0]?.user?.username);
        // let hashtags = captions.map(reel =>(reel?.media?.caption?.text).match(/#\w+/g));
        // let play_counts = (data?.items).map(reel=>[reel?.media?.play_count,reel?.media?.like_and_view_counts_disabled])
        
        let single_reel = (data?.items).map(reel => {
          return {
            "short_code":reel?.media?.code,
            "play_count": reel?.media?.play_count? reel?.media?.play_count: 'not there',
            "comment_count": reel?.media?.comment_count ? reel?.media?.comment_count : 'not there',
            "caption": reel?.media?.caption?.text ? reel?.media?.caption?.text:'not there',
            "like_count":reel?.media?.like_count ? reel?.media?.like_count: 'not there',
            'hashtags':reel?.media?.caption ? (reel?.media?.caption?.text).match(/#\w+/g) : 'not there',
            'collaborator':reel?.media?.coauthor_producers ? reel?.media?.coauthor_producers[0]?.full_name : 'not there',
            'user_tags':reel?.media?.usertags ? reel?.media?.usertags?.in[0]?.user?.username: ''

          };
        });
        all_reels.push(single_reel)
        // if(i=1){
        console.log(single_reel)}
    //   }
      catch(e){
        const b =1
      }
    }
  }
  fs.writeFile('urstrulymahesh.json', JSON.stringify(all_reels, null, 2), 'utf8', (err) => {
    if (err) {
      console.log('Error writing to ian_samholder.json:', err);
    } else {
      console.log('ian_samholder.json file has been written successfully.');
    }
  });
});

