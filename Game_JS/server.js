// ************************* SERvER USING PIPES *******************************
let fs = require('fs');
let http = require('http');

let server = http.createServer(function(req, res){//Create server with request and res -response is writable stream
console.log('Request was made: ' + req.url);
  if(req.url ==='/' || req.url ===''){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/game.html').pipe(res);
   } else{
    res.writeHead(404, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});


server.listen(3000, '127.0.0.1');//port number and ip address
console.log('Listening on port 3000...');