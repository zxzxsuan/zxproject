exports.home=function(req,res,next){
    //console.log(req.session.id);
    
    if(req.session.id){
        res.render("home_login",{
            "sess":req.session,
        });
    }else{
        res.redirct("/unlogin");
    }
}
exports.home_unlogin=function(req,res,next){
    res.render("home");
}