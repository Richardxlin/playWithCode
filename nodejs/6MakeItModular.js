const fs = require('fs');
const path = require('path');

function FilteredLS(dirName, fileExt, callback){
  let filteredList = [];
  fs.readdir(dirName, (err, list) => {
    if (err) return callback(err);

    list.forEach(file => {
      if (path.extname(file) === '.' + fileExt) {
        filteredList.push(file);
      }
    });

    //Better solution:
    // list = list.filter(function (file) {
    //     return path.extname(file) === '.' + filterStr
    // })

    callback(null, filteredList);
  })
}
module.exports = FilteredLS;
