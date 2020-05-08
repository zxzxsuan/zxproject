var db=require("./db.js");
// var connection = mysql.createConnection({//这种方式不够好，一般会采用连接池
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'mblog'
// });


 exports.getAll=function(callback){
    // connection.connect();
 
    // connection.query('SELECT * from t_users', function (error, results, fields) {
    //   if (error) throw error;
    //   callback(error,results);
    // });
     
    // connection.end();
    var sql='SELECT * from t_users';
    db.query(sql,[],callback);
    
 }

 exports.insert_name_and_password=function(name,password,callback){
    var sql='insert into t_users(ACCOUNT,PASSWORD) values(?,?)';
    db.query(sql,[name,password],callback);
 }

 exports.check_same_name=function(name,callback){
    var sql='select * from t_users where ACCOUNT=?';
    db.query(sql,[name],callback);
 }

 exports.get_name_and_password=function(name,password,callback){
    var sql='select * from t_users where ACCOUNT=? and PASSWORD=?';
    db.query(sql,[name,password],callback);
 }
