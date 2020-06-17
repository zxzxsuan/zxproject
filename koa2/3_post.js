const Koa =require("koa");
const app=new Koa();

app.use(async ctx=>{
    //叠加数据
    let data="";
    console.log(ctx)
    //监听data事件，收到表单数据时候就会执行
    ctx.req.on('data',chunk=>{
        data+=chunk;
    });

    //接收表单提交数据完成后
    ctx.req.on('end',()=>{
        data=decodeURI(data);
        console.log(data);
    });

    ctx.body='123';
}).listen(3000,()=>{
    console.log("serve start in 3000");
});