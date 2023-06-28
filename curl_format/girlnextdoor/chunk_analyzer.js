const fs = require('fs');
const chunk_number = '106'
const file_name = 'chunk_'+chunk_number+'_data.txt'
fs.readFile(file_name, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading ',file_name, err);
    return;
  }

  const lines = data.split('\n');
  

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('Response Data:')) {
      try{
        const responseData = JSON.parse(lines[i].substring(14));
        const { edge_followed_by, edge_follow , full_name} = responseData.graphql.user;
        // if(i=1){
        console.log('following: ',' ',edge_follow,' ','followers: ',edge_followed_by,' ', responseData.graphql.user.username );}
    //   }
      catch(e){
        const b =1
      }
    }
  }
});
