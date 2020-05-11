<template>
  <div>
    <van-nav-bar title="首页" class="nav-title">
       <van-icon name="search" size="18" slot="left" />
       <van-icon name="cart" size="18" slot="right" />
    </van-nav-bar>
    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe :autoplay="5000">
        <van-swipe-item v-for="(item,index) in swipeCarousel" :key="index" class="carousel-item">
          <img v-lazy="item.imgUrl" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 热门商品 -->
  <div class="hot">
    <p class="hot-title">热门商品</p>
    <swiper class="hot-swiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in hotProducts" :key="index">
        <div class="hot-swiper-content">
          <img :src="item.img" alt="">
          <div>{{item.name}}</div>
          <div>{{item.price}}</div>
        </div>
        </swiper-slide>    
    </swiper>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  data(){
    return {
      swipeCarousel:[
        {
          imgUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1461055495,1771094170&fm=26&gp=0.jpg',

        },{
          imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2222370551,1096458716&fm=26&gp=0.jpg',

        },{
          imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589185898908&di=09c84401aacb1a9f2074a829780d11c4&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Ffd8960f70c78c105e052f67666932836.jpeg',

      }],
      hotProducts:[
        {
          name:"xxxxxxx",
          img:"https://c-ssl.duitang.com/uploads/item/202005/05/20200505231550_WJGsS.thumb.300_300_c.jpeg",
          price:"3000",
          company:"星星猪场",
          city:"上海市"
        },{
          name:"yyyyyy",
          img:"https://c-ssl.duitang.com/uploads/item/202005/05/20200505231537_uMj3i.thumb.300_300_c.jpeg",
          price:"2500",
          company:"阳阳猪场",
          city:"北京市"
        },{
          name:"zzzzzzzzzzz",
          img:"https://c-ssl.duitang.com/uploads/item/202005/05/20200505231547_LeAUm.thumb.300_300_c.jpeg",
          price:"7700",
          company:"亮亮猪场",
          city:"湖南市"
        },{
          name:"qqqqqqqqqqqqq",
          img:"https://c-ssl.duitang.com/uploads/item/202005/05/20200505231549_xd5RX.thumb.300_300_c.jpeg",
          price:"560",
          company:"猴猴猪场",
          city:"天津市"
        },
      ],
      swiperOptions: {
          slidesPerView:3,
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
</script>

<style lang="scss">
.nav-title{
  position:fixed;
  top:0;
  left:0;
  width: 100%;
}
.carousel{
  margin-top:1rem;
  &-item{
    img{
      width: 7.5rem;
      height: 4rem;
      }
  }
}
.hot{
  &-title{
    width: 100%;
    height: 0.5rem;
    padding-left:0.2rem;
    line-height:0.5rem;
    box-sizing:border-box;
  }
  &-swiper{
    &-content{
      width: 2rem;
      text-align:center;
      img{
        width: 2rem;
      }
    }
  }
}
</style>
