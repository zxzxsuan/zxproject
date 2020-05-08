//数据库中一张表就会有一个控制器----user.js
var user_model=require("../models/user_model.js");

exports.reg=function(req,res,next){
    res.render("reg");
}
exports.do_reg=function(req,res,next){
    var name=req.body.email;
    var password=req.body.password;
    user_model.insert_name_and_password(name,password,function(err,data){
        //console.log(data);
        if(data.affectedRows==1){
            res.redirect("/login");
        }
    })
}
exports.checkname=function(req,res,next){
    var name=req.body.email;
    user_model.check_same_name(name,function(err,data){
        if(data.length>0){
            res.json({
                'errmsg':'用户名重名',
                'errno':101
            })
        }else{
            res.json({
                'errmsg':'用户名不重名',
                'errno':1
            })
        }
    })
}

exports.login=function(req,res,next){
    res.render("login");
}

exports.do_login=function(req,res,next){
    var name=req.body.username;
    var password=req.body.password;
    user_model.get_name_and_password(name,password,function(err,data){
        if(data.length>0){
            req.session.id=data[0].USER_ID;
            req.session.name=data[0].NAME;
            res.redirect("/home");
        }else{
            console.log("false");
        }
    })
}
exports.unlogin=function(req,res,next){
    req.session=null;
    res.redirect("/home_unlogin")
}
/*
exports.login=function(req,res,next){
   // res,send("hello world");
    res.render("login");//渲染一个页面 应是在views下的login.ejs
}

exports.do_login=function(req,res,next){
    //express解析包体使用req.body.(name属性)
    var name=req.body.username;
    var pass=req.body.password;

    //console.log(name);
    //console.log(pass);
    user_model.getAll(function(err,data){
        //console.log(data);
        if(data.length>0){
            console.log(data);
        }
    });
}

exports.do_ss=function(req,res,next){
    //get 的?传参方式req.query
    var uname=req.query.uname;//localhost:3000/ss?name=zx
    console.log(uname);
}

exports.check_ss=function(req,res,next){
    //get的 restful传参方式req.params
    var name=req.params.names;//localhost:3000/checkss/zx
    console.log(name);
}

exports.check_index=function(req,res,next){
    res.send("next执行成功");
}*/