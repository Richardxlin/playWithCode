const http = require('http');

const url = process.argv[2];

http.get(url, response => {
  let collection = [];
  response.on('data', data => collection.push(data))
  response.on('error', console.log)
  response.on('end', data => {
    let content = collection.join('');
    console.log(content.length);
    console.log(content);
  })
}).on('error', console.error);
