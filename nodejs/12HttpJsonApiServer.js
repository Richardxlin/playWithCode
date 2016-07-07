const http = require('http');
const url = require('url');

http.createServer(listener).listen(process.argv[2]);



function listener(req, res){
	const urlProps = url.parse(req.url, true);
	res.writeHead(200, { 'Content-Type': 'application/json' });
	
	if (urlProps.pathname === '/api/parsetime'){
		const isoDate = new Date(urlProps.query.iso);
		var isoTime = {
		 "hour": isoDate.getHours(),
		 "minute": isoDate.getMinutes(),
		 "second": isoDate.getSeconds()
		};
		
		res.end(JSON.stringify(isoTime));	
	} else if (urlProps.pathname === '/api/unixtime'){
		const unixDate = new Date(urlProps.query.iso);
		var  unixTime = {"unixtime": unixDate.getTime()};
		console.log(unixTime);
		res.end(JSON.stringify(unixTime));
	} else {
		res.end({'nothing':'here'});
	}
}
