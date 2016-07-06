const http = require('http');
const url = require('url');

http.createServer(listener).listen(process.argv[2]);

function listener(req, res){
  // if (req.path === '/api/parsetime'){
  //
  // }
  // if (req.path === '/api/unixtime'){
  //   callback();
  // }

}
