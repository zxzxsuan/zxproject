//统一后台接口
const MOCKURL='http://zzzzz.com/';//MOCK模拟URL
const SERVERURL='http://localhost:3000/';//真实URL配置的后端地址

const URL={
    getVarietyItem:MOCKURL+'getVarietyItem',
    getHotProduct:MOCKURL+"getHotProduct",
    registUser:SERVERURL+"user/registUser",//在后端controller的user中有一个registUser方法
    loginUser:SERVERURL+"user/loginUser",
};

export default URL;