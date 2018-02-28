var http = require('http');
console.log('http staring');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    res.end('<b>안녕 ! 난 http야~');
}).listen(4003);

console.log('http started');