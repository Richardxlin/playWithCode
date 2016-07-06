var fs = require('fs');

var fileContent = fs.readFileSync(process.argv[2]);
var numOfLineBreaks = fileContent
  .toString()
  .split('')
  .reduce((acc, curr) => {
    if (curr === '\n') {
      acc ++
    }
    return acc;
  }, 0);

  //Better solution:
  // var lines = contents.toString().split('\n').length - 1

console.log(numOfLineBreaks);
