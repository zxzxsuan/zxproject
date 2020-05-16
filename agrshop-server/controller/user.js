//在controller文件夹下的user.js只是与model文件夹下配置的信息一致
const Router=require('koa-router');
let router=new Router();
const mongoose=require('mongoose');

router.post('/registUser',async (ctx)=>{//这个registUser与前端中service.config.js的registUser是一致的
    // console.log('请求成功');
    // ctx.body='请求成功';
    //获取model
    const User=mongoose.model('User');
    //接收post请求封装成user对象
    let newUser=new User(ctx.request.body);
    //使用save保存用户信息
    await newUser.save().then(()=>{
        ctx.body={
            code:200,
            message:'注册成功'
        };
    }).catch(err=>{
        ctx.body={
            code:500,
            message:err
        }
        
    });
});
router.post('/loginUser',async (ctx)=>{
    //接收前端发送的数据
    let loginUser=ctx.request.body;
    let userName=loginUser.userName;//loginUser.xxx里的xxx与profile.vue里的loginHandler()中axios定义的data的key值相同
    let password=loginUser.password;
    //引入model
    const User=mongoose.model('User');
    //比对密码
    //1、查询用户名是否存在 ，存在再比较密码
    await User.findOne({userName:userName}).exec().then(async (result)=>{
        if(result){
            let newUser=new User();
            await newUser.comparePassword(password,result.password)
            .then(isMatch=>{
                if(isMatch){//登录成功
                    ctx.body={
                        code:200,
                        message:'登录成功',
                        userInfo:result,
                    }
                }else{//登录失败
                    ctx.body={
                        code:201,
                        message:'登录失败'
                    }
                }
            })
        }else{
            ctx.body={
                code:201,
                message:'用户名不存在'
            }
        }
    })
})

module.exports=router;
