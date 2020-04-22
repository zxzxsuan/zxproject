// import hello from './hello';
// import world from './world';
// import img from './image/picture1.png';
// import './css/index.scss';

// console.log(hello+world);
// console.log(img);

// //创建一个img插入到boby中
// var oImg=document.createElement('img');
// oImg.src=img;
// document.body.appendChild(oImg);

// console.log("webpack-dev-server");

// import './css/index.css'
// var oBtn=document.createElement("button");
// oBtn.innerHTML="点击";
// document.body.appendChild(oBtn);
// oBtn.onclick=function(){
//     var oDiv=document.createElement("div");
//     oDiv.innerHTML=Math.random();
//     document.body.appendChild(oDiv);
// }

// import number from './number';
// import number2 from './number2';
// number();
// number2();
// if(module.hot){
//     module.hot.accept('./number2',function(){
//        document.body.removeChild(document.getElementById('number2'));
//         number2();
//     })
// }

// import '@babel/polyfill';
// import './css/index.css';
// import './css/index1.css';
// const arr=[
//     new Promise(()=>{

//     }),
//     new Promise(()=>{

//     })
// ];
// arr.map((item)=>{
//     console.log(item);
// })

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 hello
//             </div>
//         );
//     }
// }
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
