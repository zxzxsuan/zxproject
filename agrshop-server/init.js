//初始化mongoose 用于连接mongodb
const mongoose = require('mongoose');
const db='mongodb://localhost/shop';//localhost:xxxx，不写端口号时默认是27017,shop表示的是数据库的名称

//引入schema
const glob=require('glob');
const path=require('path');
exports.initSchemas=()=>{
    glob.sync(path.resolve(__dirname,'./model','*.js')).forEach(require);
}

//创建连接数据库方法
exports.connect=()=>{
    //连接数据库
    mongoose.connect(db,{useNewUrlParser:true});
    //监听数据库连接
    mongoose.connection.on('disconnected',()=>{
        mongoose.connect(db);
    });
    //数据库出现错误
    mongoose.connection.on('error',err=>{
        console.log(err);
        mongoose.connect(db);
    });
    //连接时
    mongoose.connection.once('open',()=>{
        console.log('mongodb connected success');
    });
}