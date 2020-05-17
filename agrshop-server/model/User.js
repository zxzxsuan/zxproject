//创建一个user集合
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt');

const userSchema=new Schema({//设置集合中的key
    userId:Schema.Types.ObjectId,
    userName:{unique:true,type:String},//名称与前端的data名称一致！！！
    password:String,
    createDate:{type:Date,default:Date.now()}
});

userSchema.pre('save',function(next){
    //随机生成salt  10是迭代次数
    bcrypt.genSalt(10,(err,salt)=>{
        if(err) return next(err);
        bcrypt.hash(this.password,salt,(err,hash)=>{
            if(err) return next(err);
            this.password=hash;
            next();
        })
    });
});

userSchema.methods={//在集合下定义一个mathods方法
    comparePassword:(_password,password)=>{//自定义一个方法名字comparePassword,比较当前输入密码和加盐加密过的密码是否一致
        return new Promise((resolve,reject)=>{
            bcrypt.compare(_password,password,(err,isMatch)=>{
                if(!err) resolve(isMatch);
                else reject(err);
            })
        })
    }
}

//发布集合
mongoose.model('User',userSchema);