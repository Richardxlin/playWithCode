const through = require('through2');
const stream = through(write,end);

function write(buffer, encoding, next){
  const upperCased = buffer.toString().toUpperCase();
  this.push(upperCased);
  next();
}

function end(done){
  done();
}

process.stdin.pipe(stream).pipe(process.stdout);
