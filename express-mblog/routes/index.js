var express = require('express');
var router = express.Router();
var User=require("../controllers/user.js");
var Blog=require("../controllers/blog.js");

router.get('/', function(req, res, next) {
  var arr=[{"id":1,"name":"zx"},{"id":2,"name":"fjs"}];
  res.render('index', { title: 'Express',blogs:arr, });
});
//注册功能
router.get("/reg",User.reg);
router.post("/reg",User.do_reg);
router.post("/checkname",User.checkname);//判断是否重名
//登录功能
router.get("/login",User.login);
router.post("/login",User.do_login);
router.get("/unlogin",User.unlogin);

//主页功能
router.get("/home",Blog.home);
router.get("/home_unlogin",Blog.home_unlogin);

module.exports = router;
/*
function checkindex(req,res,next){
  if(2>3){
    res.send("没走next");
  }else{
    next();
  }
}

 GET home page. 
router.get('/', function(req, res, next) {
  var arr=[{"id":1,"name":"zx"},{"id":2,"name":"fjs"}];
  res.render('index', { title: 'Express',blogs:arr, });
});

router.get("/sindex",checkindex);//参数next解释
router.get("/sindex",User.check_index);

router.get("/ss",User.do_ss);//get ?传参
router.get("/checkss/:names",User.check_ss);//get restful传参

router.get("/login",User.login);
router.post("/login",User.do_login);//post方式传参

module.exports = router;
*/