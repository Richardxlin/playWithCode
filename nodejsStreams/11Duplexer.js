const spawn = require('child_process').spawn;
const duplexer = require('duplexer2');

function spawner(cmd, args){

  const command = spawn(cmd, args);


  const duplex = duplexer(command.stdin, command.stdout);

  return duplex;
}

module.exports = spawner
