const http=require("http");
const url=require("url");//url 模块用于处理与解析 URL。
const querystring=require("querystring");//querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具。

http.createServer((req,res)=>{
    //console.log(url.parse(req.url));
    //想要提取get的url中的传递的参数(方法一)----并不常用，不好用
    // var queryArr=url.parse(req.url).query.split("&");
    // var queryItem=queryArr[0].split("=");
    // console.log(queryItem[1]);
    //想要提取get的url中的传递的参数(方法二)
    //str-->obj  obj-->str  序列化与反序列化
    var queryItem=url.parse(req.url).query;
    var queryObj=querystring.parse(queryItem);
    console.log(queryObj);
    console.log(queryObj.name);
}).listen(3000);

console.log("server port 3000");