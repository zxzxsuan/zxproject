const Koa=require("koa");
const app=new Koa();
const views=require("koa-views");
const path=require('path');

//加载模板
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
}))

app.use(async ctx=>{
    let title='hello fjs';
    await ctx.render("01_index",{
        title,
        list:[
            {name:'zzzz',age:22},
            {name:'wwww',age:22},
            {name:'zzeeeezz',age:22},
        ]
    });
}).listen(3000,()=>{
    console.log('serve start in 3000');
});