<template>
    <div>
        <van-button type="primary" @click="add">增加数据</van-button>
        <van-button type="warning">删除数据</van-button>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                {{index+1}}:{{item.title}}
            </li>
        </ul>
    </div>
 
</template>

<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
        ajax(){
            let movieUrl="https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/coming_soon";
            let xmlhttp;
            if(window.XMLHttpRequest){
                xmlhttp=new XMLHttpRequest();
            }
            // else{
            //     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            // }
            //发送请求
            xmlhttp.open("GET",movieUrl,true);
            xmlhttp.send();
            //服务器端响应
            xmlhttp.addEventListener("readystatechange",()=>{
                if(xmlhttp.readyState==4 && xmlhttp.status==200){
                    let obj=JSON.parse(xmlhttp.responseText);
                    console.log(obj);
                    this.list=obj.subjects;
                }
            })
        },
        add(){
            this.ajax();
        }
    }
}
</script>

<style>

</style>