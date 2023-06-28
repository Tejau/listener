const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading data.txt:', err);
    return;
  }

  const usernames = data.split('\n').map(username => username.trim()).filter(username => username !== '');

  const chunkSize = 100;
  const chunks = [];
  for (let i = 0; i < usernames.length; i += chunkSize) {
    chunks.push(usernames.slice(i, i + chunkSize));
  }

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const filename = `chunk_${i + 1}.txt`;
    const data = chunk.join('\n');
    fs.writeFile(filename, data, (err) => {
      if (err) {
        console.error(`Error writing to ${filename}: ${err}`);
      } else {
        console.log(`Chunk ${i + 1} written to ${filename}`);
      }
    });
  }
});
