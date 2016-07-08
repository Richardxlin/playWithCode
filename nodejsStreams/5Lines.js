const through = require('through2');

let counter = 1;

const stream = through((buffer, _, next) => {
  let output = null;
  const bufferStr = buffer.toString();
  if (counter % 2 > 0) {
    output = buffer.toString().toLowerCase();
  } else {
    output = buffer.toString().toUpperCase();
  }
  stream.push(output);
  next();
  counter ++;
});

process.stdin.pipe(stream).pipe(process.stdout);

//With Split:
// var through = require('through2');
// var split = require('split');
//
// var lineCount = 0;
// var tr = through(function (buf, _, next) {
//     var line = buf.toString();
//     this.push(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//
//     lineCount ++;
//     next();
// });
// process.stdin
//     .pipe(split())
//     .pipe(tr)
//     .pipe(process.stdout)
// ;
