// var http = require("http");

// var urls=['www.baidu.com','www.sohu.com','www.qq.com','www.taobao.com'];

// function fetchPage(url){
//     var start=new Date();
//     http.get({host:url},function(res){
//         console.log("Got response from "+url);
//         console.log("Request took:",(new Date()-start),"ms");
//     })
// }
// for(i=0;i<urls.length;i++){
//     fetchPage(urls[i]);
// }

// for(var i=0;i<4;i++){
//     setTimeout(function(){
//         console.log(i);
//     },200);
    
//  }//输出4444

// var start = new Date();
// setTimeout(function(){
//     var end=new Date();
//     console.log("time is ",end-start,"ms");
// });
// while(new Date()-start<1000){}//输出的时间可能是1000ms，或者1001ms不等，因为v8处理不同

// var start = new Date();
// var fireCount = 0;
// var timer=setInterval(function(){
//     var end = new Date();
//     if( end-start>1000){
//         clearInterval(timer);
//         console.log(fireCount);
//         return;
//     }
//     fireCount++;
// },0)//输出并不是1000

// for(var i=0;i<10;i++){
//     var m=i;
//     setTimeout(function(){
//         console.log(m);
//     },1000);
// }

//同步中调用异步函数
// for(var i=0;i<10;i++){
//     var m=i;
//     exec(m,function(m){//同步函数exec(m,callback),callback不一定是异步的，还有同步的
//         console.log(m);
//     })
// }
// function exec(param,callback){
//     setTimeout(function(){
//         callback(param);
//     },1000);
// }

// function Person(){
//     this.think=function(){
//         console.log("thinking ~~~~~~");
//         setTimeout(function(){
//             console.log("think over");
//         },5000);
//     };
//     this.answer=function(){
//         console.log("thinking another question");
//     }
// }
// var person=new Person();
// person.think();
// person.answer();

function Person(){
    this.think=function(callback){
        console.log("thinking ~~~~~~");
        setTimeout(function(){
            callback();
        },5000);
        
    };
    this.answer=function(){
        console.log("thinking another question");
    }
}
var person=new Person();
person.think(function(){
    console.log("think over")});
person.answer();