import Mock from 'mockjs';
import data from './data.json';
import URL from '../views/service.config';

//方式一
Mock.mock("http://xxx.com/getData",{data:data.list});

//方式二
Mock.mock("http://xxx.com/getUser",{
    'name|2':'zx',
    'age|18-35':20
})

//方式三
Mock.mock("http://xxx.com/getRegexp",{
    'regexp1':/[a-z][A-Z][0-9]/,
    'regexp2':/\d{5,10}/
})

//方式四
Mock.mock("http://xxx.com/getList",{
    'info|10-20':[
        {
            'index|+1':1,
            'name':'@first @last',
            'id':'@integer(100,999)',
            'date':'@datetime',
            'img':'@image("200*200")',
            'text':'@sentence(6,22)'
        }
    ]
})

//农机信息数组s
let Random = Mock.Random;
let productData=()=>{
    let productList=[];
    for(let i=0;i<100;i++){
        let product={
            name:Random.ctitle(5,10),
            img:Random.dataImage('125x125','农机'+ Random.integer(1,100)),//
            price:Random.integer(1000,10000),
            owner:Random.cname()
        };
        productList.push(product);
    }
    return productList;
}
Mock.mock(URL.getVarietyItem,productData);