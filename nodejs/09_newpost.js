const http=require("http");
const url=require("url");
const fs=require("fs");
const querystring=require("querystring");

http.createServer((req,res)=>{
    var newpath=url.parse(req.url).pathname;
    if(newpath=="/"){
        goIndex(res);
    }else if(newpath=="/add"){
        goPost(req,res);
    }else{
        res.writeHead(404,{"content-type":"text/plain"});
        res.end("no page found");
    }
}).listen(3000);

console.log("server port 3000");

function goIndex(res){
    var indexpath=__dirname+"/static/"+url.parse("post.html").pathname;
    var indexData=fs.readFileSync(indexpath,'utf-8');
    res.writeHead(200,{"content-type":"text/html"});
    res.end(indexData);
}
function goPost(req,res){
    var postData="";
    req.setEncoding("utf8");
    req.addListener("data",function(postChunkData){
        postData+=postChunkData;
    });
    req.addListener("end",function(){
        var queryData=querystring.parse(postData);
        if(queryData.username=="zx"&&queryData.pwd=="123456"){
            res.writeHead(200,{"content-type":"text/plain"});
            res.end("login success")
        }else{
            res.writeHead(200,{"content-type":"text/plain"});
            res.end("login error");
        }
    })
}
