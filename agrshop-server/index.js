const Koa =require ('koa');
const app=new Koa();

app.use(async (ctx)=>{
    ctx.body='hello world';
}).listen(3000,()=>{
    console.log('server start in 3000');
})