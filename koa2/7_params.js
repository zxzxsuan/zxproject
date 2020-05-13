const Koa=require('koa');
const app=new Koa();
const Router=require('koa-router');
const router=new Router();
router.get('/abc',(ctx,next)=>{
    ctx.body=ctx.query;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async ctx=>{
    
}).listen(3000,()=>{
    console.log('serve start in 3000');
})
