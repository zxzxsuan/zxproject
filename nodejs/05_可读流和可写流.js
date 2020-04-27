var fs = require("fs");

var rs = fs.createReadStream("./demo.txt");
var ws = fs.createWriteStream("./sdemo.txt");

//rs.pipe(ws);  //管道符的方式

//node api 继承event 事件循环的方式

rs.on('data',function(chunk){
    console.log(chunk.length);
    ws.write(chunk);
});

rs.on('end',function(){
    console.log("结束了");
    ws.end();
})