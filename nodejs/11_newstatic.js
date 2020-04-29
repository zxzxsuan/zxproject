const http = require("http");
const url=require("url");
const fs=require("fs");

http.createServer((req,res)=>{
    var pathname=url.parse(req.url).pathname;
    var realPath=__dirname+"/static"+pathname;
    if(pathname=="/favicon.icon"){
        return;
    }else if(pathname=="/"||pathname=="/index"){
        goIndex(res);
    }else{
        dealWithStatic(pathname,realPath,res);
    }

}).listen(3000);

function goIndex(res){
    var indexPath = __dirname+"/static/"+url.parse("index.html").pathname;
    var indexData = fs.readFileSync(indexPath,"utf-8");
    res.writeHead(200,{"content-type":"text/html"});
    res.end(indexData);
}

function dealWithStatic(pathname,realPath,res){
    fs.exists(realPath,function(exists){
        if(!exists){
            res.writeHead(404,{"content-type":"text/plain"});
            res.write("the page is not found");
            res.end();
        }else{
            var pointerIndex=pathname.lastIndexOf(".");
            var mimeString=pathname.substring(pointerIndex+1);
            var mimeType="";
            switch(mimeString){
                case "css":
                    mimeType="text/css";break;
                case "png":
                    mimeType="text/png";break;
                default:
                    mimeType="text/plain";break;
            }
            fs.readFile(realPath,"binary",function(err,file){
                if(err){
                    res.writeHead(500,{"content-type":"text/plain"});
                    res.end(err);
                }else{
                    res.writeHead(200,{"content-type":mimeType});
                    res.write(file,"binary");
                    res.end();
                }
            })
        }
    })

    
}

console.log("server start port 3000");