const Koa =require ('koa');
const app=new Koa();

//解决跨域问题
const cors=require('koa2-cors');
app.use(cors({
    origin:['http://localhost:8080'],
    credentials:true
}));

//接收前端post请求
const bodyParser =require('koa-bodyparser');
app.use(bodyParser());

//加载路由
const Router=require('koa-router');
let user=require('./controller/user.js');
let router =new Router();
router.use('/user',user.routes());//这个user与前端中service.config.js的user是一致的
app.use(router.routes());
app.use(router.allowedMethods());//只允许特定的方法进行请求，如果配置get就用get方法

const {connect,initSchemas}=require('./init.js');
(async ()=>{
    await connect();
    initSchemas();
})();


app.use(async (ctx)=>{
    ctx.body='hello world';
}).listen(3000,()=>{
    console.log('server start in 3000');
})