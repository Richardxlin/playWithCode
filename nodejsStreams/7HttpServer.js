const http = require('http');
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

function listener(req, res){
  if (req.method  === 'POST') {
    res.writeHead(200, {'content-type': 'text/plain'})
    req.pipe(stream).pipe(res);
  }
}

http.createServer(listener).listen(process.argv[2]).on('error', (err) => {console.log('errorsds: ', err)})
