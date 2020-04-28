var http = require("http");
var url=require("url");
var fs = require("fs");

http.createServer(function(req,res){
    console.log(__dirname);
    var indexPath = __dirname+"/"+url.parse("demo.html").pathname;
    var indexData=fs.readFileSync(indexPath,"UTF-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexData);
}).listen(3000);

console.log("server start port 3000")