import Vue from 'vue'
import App from './App.vue'
import Find from '@/views/Find'
import My from '@/views/My'
import Part from '@/views/Part'
import NotFound from '@/views/NotFound'
import Ranking from '@/views/Second/Ranking'
import Recommend from '@/views/Second/Recommend'
import SongList from '@/views/Second/SongList'


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
    path:'/',
    redirect: '/find'
  },
  {
    path:'/find',
    component:Find,
    name:'Find',
    children:[
      {
        path:'ranking',
        component:Ranking,
      },
      {
        path:'recommend',
        component:Recommend,
      },
      {
        path:'songlist',
        component:SongList,
      },
    ]
  },
  {
  path:'/my',
  component:My ,
  name:'My'
  },
  {
    path:'/part/:username/:id',
    component:Part  ,
    name:'Part'
    },
    {
      path:'*',
      component:NotFound
    }
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
