const trumpet = require('trumpet');
const through = require('through2');
const upperPipe = through(write,end);

function write(buffer, encoding, next){
  const upperCased = buffer.toString().toUpperCase();
  this.push(upperCased);
  next();
}

function end(done){
  done();
}

const tr = trumpet();

const stream = tr.select('.loud').createStream();
stream.pipe(upperPipe).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);
