<template>
  <div>
    <van-nav-bar title='商品类型'></van-nav-bar>
    <div class='category'>
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li v-for="(item,index) in types" :key="index" :class="{active:active==index}" @click="selectCategory(item.typeId,index)">
             {{ item.typeName}}
            </li>
          </ul>
        </van-col>
        <van-col span="18" class="container">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list class="content" @load='onload'  v-model="isLoading" :finished="finished">
            <div class="content-item" v-for="(item,index) in productList" :key="index">
              <img :src="item.img" alt="">
              <p class="content-item-name">{{item.name}}</p>
              <p class="content-item-price">￥{{item.price}}</p>
            </div>
          </van-list>
          </van-pull-refresh>
          
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import url from '@/views/service.config.js';
export default {
  data(){
    return {
      types:[],
      active:0,
      productList:[],
      typeId:3,
      start:0,
      limit:10,
      finished:false,//是否数据加载完成
      isLoading:false,
    }
  },
  created(){
    axios({
      url:url.getTypes,
      
    }).then(res=>{
      this.types=res.data;
      this.selectCategory(this.typeId,this.active);
    }).catch((err)=>{
      console.log(err);
    })
  },
  methods:{
    selectCategory(typeId,index){
      this.active=index;
      this.typeId=typeId;
      this.productList=[];
      this.finished=false;
      this.getProductList();
    },
    getProductList(){
      this.isLoading=true;
      axios({
        url:url.getProductsByType,
        method:"get",
        params:{
          typeId:this.typeId,
          start:this.productList.length,
          limit:this.limit,
        }

      }).then(res=>{
       // console.log(res);
       if(res.data.length!=0){
         this.productList=this.productList.concat(res.data);
       }else{
         this.finished=true;
       }
       this.isLoading=false;
      }).catch(err=>console.log(err))
    },
    onload(){
      this.getProductList();
    },
    onRefresh(){
      this.productList=[];
      this.getProductList();
    }
  }
}
</script>

<style lang="scss">
.nav{
  background: #eee;
  li{
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    border-bottom:1px solid #fff;
    padding:3px;
  }
  .active{
    background: #fff;
  }
}
.container{
  position:fixed;
  top:0.9rem;
  bottom: 1rem;
  right:0;
  overflow-y:scroll;
}
.content{
  display: flex;
  flex-wrap:wrap;
  padding-bottom:1rem;
  &-item{
    width: 40%;
    padding:0 10px;
    text-align: center;
    img{
      width: 2rem;
      height: 2rem;
    }
    &-name{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
