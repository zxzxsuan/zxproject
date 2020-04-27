var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
    fs.createReadStream("./demo.html").pipe(res);
}).listen(3000);

console.log("server start port 3000");