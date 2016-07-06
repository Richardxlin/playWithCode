const fs = require('fs');
const path = require('path');

const dirName = process.argv[2];
const filterExt = '.' + process.argv[3];

fs.readdir(dirName, dirCallback);

function dirCallback(err, list){
  if (err) {
    console.log(err);
    return false;
  }
  list
  .filter(file => {
    return path.extname(file) === filterExt
  })
  .forEach(file => {
    console.log(file)
  })
}
