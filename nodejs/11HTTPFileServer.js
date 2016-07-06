const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
const file = process.argv[3];

http.createServer(callback).listen(port);

function callback(req, res) {
  const fileStream = fs.createReadStream(file);
  res.writeHead(200, {'content-type': 'text/plain'})
  fileStream.pipe(res);
}
