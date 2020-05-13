const Koa=require("koa");
const app=new Koa();

app.use(async ctx=>{
    if(ctx.url==='/abc'){
        ctx.cookies.set(
            'name','zxzx',{
                domain:'localhost',
                path:'/abc',
                maxAge:24*60*60*1000,
                expires:new Date('2020-5-13'),
                httpOnly:false,
                overwrite:false
            }
        );
        ctx.body='cookie success';
    }else{
        ctx.body='cookie false';
    }
}).listen(3000,()=>{
    console.log('serve start in 3000');
})