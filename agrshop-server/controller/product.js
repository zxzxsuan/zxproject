const koa=require('koa');
const Router=require('koa-router');
let router=new Router();
const mongoose=require('mongoose');
const fs=require('fs');

router.get('/insertProductInfo',async (ctx)=>{
    fs.readFile('./data/product.json','utf8',(err,data)=>{
        data=JSON.parse(data);//把读取出来的数据转换成字符串
        console.log(data);
        let count=0;//计数器
        const Product=mongoose.model('Product');
        data.map((value,index)=>{
            console.log(value);
            let product=new Product(value);
            product.type=Math.floor(Math.random()*7)+1;//由于产品没有类型，随机分配1~7的typeid
            product.save().then(()=>{
                count++;
                console.log('成功'+count);
            }).catch((err)=>{
                console.log('失败啦！'+error);
            });
        });
    });
    ctx.body='导入数据'
});
router.get('/getProductsByType',async (ctx)=>{
    const Product=mongoose.model('Product');
    await Product.find({type:ctx.query.typeId}).skip(parseInt(ctx.query.start)).limit(parseInt(ctx.query.limit)).exec().then(res=>{
        ctx.body=res; 
    })
})

module.exports=router;//把router数据暴露出来