var http = require("http");

http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/plain"}); 
    res.end("hello world");
}).listen(3000);

console.log("server start port 3000");