const Koa =require('koa');
const app=new Koa();

app.use(async ctx=>{
    let url =ctx.url;
    let query = ctx.query;//返回的是格式化好的参数对象
    let queryString =ctx.querystring;//返回的是请求字符串
    ctx.body={
        url,
        query,
        queryString
    }
}).listen(3000,()=>{
    console.log('serve start in 3000');
})