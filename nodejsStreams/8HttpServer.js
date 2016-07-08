const request = require('request');

const server = 'http://localhost:8099';

process.stdin.pipe(request.post(server)).pipe(process.stdout);
