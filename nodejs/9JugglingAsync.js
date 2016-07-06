const http = require('http');

const urlOne = process.argv[2];
const urlTwo = process.argv[3];
const urlThree = process.argv[4];

function* siteGenerator(){
  yield http.get(urlOne, callback).on('error', console.error);
  yield http.get(urlTwo, callback).on('error', console.error);
  yield http.get(urlThree, callback).on('error', console.error);
}

function callback(response) {
  let collection = [];
  response.setEncoding('utf8');
  response.on('data', data => collection.push(data))
  response.on('error', console.log)
  response.on('end', data => {
    let content = collection.join('');
    console.log(content);
    site.next();
  })
}

const site = siteGenerator();

site.next();
