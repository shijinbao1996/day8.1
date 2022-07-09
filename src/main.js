import Vue from 'vue'
import App from './App.vue'

import Home from '@/views/Home'
import News from '@/views/News'
import Tiyu from '@/views/Tiyu'

import Tchina from '@/views/Second/TChina'
import TGuowai from '@/views/Second/TGuowai'
import Thome from '@/views/Second/THome'

import Shuxue from '@/views/Third/Shuxue'
import Yingyu from '@/views/Third/Yingyu'
import Yuwen from '@/views/Third/Yuwen'



let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false


// 建立路由规则
const routes = [
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/news',
    component:News,
  },
  {
    path:'/tiyu',
    component:Tiyu,
    children:[
      {
        path:'thome',
        component:Thome
      },
      {
        path:'tguowai',
        component:TGuowai,
        children:[
          {
            path:'huxue',
            component:Shuxue,
          },  
          {
            path:'yingyu',
            component:Yingyu,
          }, 
           {
            path:'yuwen',
            component:Yuwen,
          },
        ]
      },
      {
        path:'tchina',
        component:Tchina
      },
    ]
  },
]

// 创建路由对象：传入规则
const router = new VueRouter({
  routes,
  // mode:history
})

const isLogin = false
router.beforeEach((to,from,next)=>{
  // console.log(to);
   if(to.path == '/my' && !isLogin) {
    alert('login')
    next(false)
   } else{
    next()
   }
   
})

new Vue({
  router,
  render: h => h(App)
  
}).$mount('#app')
