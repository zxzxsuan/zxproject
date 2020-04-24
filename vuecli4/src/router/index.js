import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Path from '../views/Path.vue'
import Frontend from '../views/Frontend.vue'
import Backend from '../views/Backend.vue'
import Count from '../views/Count.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:'/path',
    name:'Path',
    component:Path,
    children:[
      {
        path:'frontend',
        name:'Frontend',
        component:Frontend
      },{
        path:'backend/:classname/:classid',
        component:Backend
      },
    ]
  },{
    path:'/count',
    name:'Count',
    component:Count
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
