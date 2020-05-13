const Koa=require('koa');
const app=new Koa();
const Router=require('koa-router');
const router=new Router({
    prefix:"/love"//路由前缀
});
router.get('/abc',(ctx,next)=>{
    // console.log(ctx);
    // console.log(next);
    ctx.body="zxzx";
});
router.get('/test',(ctx,next)=>{
    ctx.body="fjs";
})

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async ctx=>{
    
}).listen(3000,()=>{
    console.log('serve start in 3000');
})
