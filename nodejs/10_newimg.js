var http=require("http");
var url=require("url");
var fs=require("fs");
var querystring=require("querystring");

http.createServer((req,res)=>{
    var indexPath=url.parse(req.url).pathname;
    switch(indexPath){
        case "/":goIndex(res);break;
        case "/img":goImg(req,res);break;
        default:goDefault(res);break;
    }
}).listen(3000);

console.log("server start port 3000");

function goDefault(res){
    res.writeHead(404,{"content-type":"text/plain"});
    res.end("no page found");
}
function goIndex(res){
    var indexPath=url.parse("dns.html").pathname;
    var indexName=__dirname+"/static/"+indexPath;
    var indexData = fs.readFileSync(indexName,"utf-8");
    res.writeHead(200,{"content-type":"text.html"});
    res.end(indexData);
}
function goImg(req,res){
    //方法一：fs readFileSync方式
    // var indexPath=__dirname+"/static/"+url.parse("baby.png").pathname;
    // var indexData=fs.readFileSync(indexPath);
    // res.writeHead(200,{"content-type":"image/png"});
    // res.end(indexData);
    //方法二：可以用fs可读流方式
    var indexPath=__dirname+"/static/"+url.parse("baby.png").pathname;
    res.writeHead(200,{"content-type":"image/png"});
    fs.createReadStream(indexPath).pipe(res);
}