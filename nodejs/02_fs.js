var fs = require("fs");

//fs同步读取

// var data = fs.readFileSync("./demo.txt","UTF-8");
// console.log(data);
// console.log("end");

//fs异步读取

fs.readFile("./demo.txt","UTF-8",function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
}
);
console.log("end")