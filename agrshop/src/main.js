import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/reset.css"
import '@/assets/js/rem.js'
Vue.config.productionTip = false

//vant 全部引入
/*import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);*/

//按需引入
import { Button,NavBar,Icon,Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload } from 'vant';

Vue.use(Button).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

