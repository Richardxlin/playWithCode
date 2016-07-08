const concat = require('concat-stream');

process.stdin.pipe(concat(function(buffer){
  const reversedStr = buffer.toString().split('').reverse().join('');
  process.stdout.write(reversedStr);

}))
