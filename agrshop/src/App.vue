<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
   <!-- <ul class="footer-bar">
     <li class="footer-bar-item"> <router-link to="/">首页</router-link></li>
     <li class="footer-bar-item"><router-link to="/category">分类</router-link></li>
     <li class="footer-bar-item"><router-link to="/cart">购物车</router-link></li>
     <li class="footer-bar-item"><router-link to="/profile">我的</router-link></li>
   </ul> -->
  </div>
</template>
<script>
export default {
  data(){
    return {
      active:0,
    };
  },
};
</script>
<style lang="scss">
.footer-bar{
  display:flex;
  position:fixed;
  bottom:0;
  background: #eee;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  &-item{
    flex-grow:1;
    text-align:center;
  }
}
</style>
