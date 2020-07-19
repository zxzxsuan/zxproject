const express=require('express');
const app=express();
app.get('/',function(req,res){
    let {a,b,callback}=req.query;
    console.log(a);
    console.log(b);
    res.end(`${callback}('传递的数据')`)
}).listen(3000)
console.log('server start port 3000')