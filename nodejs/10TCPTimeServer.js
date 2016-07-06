const net = require('net');

net.createServer(listener).listen(process.argv[2])

function listener(socket){

  const date = new Date();
  const arr = [
    date.getFullYear(),
    '-',
    date.getMonth()+1 < 10 ? '0' : '',
    date.getMonth()+1,
    '-',
    date.getDate() < 10 ? '0' : '',
    date.getDate(),
    ' ',
    date.getHours() < 10 ? '0' : '',
    date.getHours(),
    ':',
    date.getMinutes() < 10 ? '0' : '',
    date.getMinutes(),
    "\n"
  ];
  const timestamp = arr.join('');
  socket.end(timestamp);
}
