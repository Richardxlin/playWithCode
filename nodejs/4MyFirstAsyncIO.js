const fs = require('fs');

const fileToRead = process.argv[2];
let lineBreakLength = null;

fs.readFile(fileToRead, readFileCallback);

function readFileCallback(err, data){
  if (err) {
    console.log(err);
    return false;
  }

  lineBreakLength = data.toString().split('\n').length-1;
  console.log(lineBreakLength);
}
