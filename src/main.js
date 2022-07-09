import Vue from 'vue'
import App from './App.vue'

import Home from '@/views/Home'
import Category from '@/views/Category'
import Order from '@/views/Order'
import Mine from '@/views/Mine'


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
    component:Home
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/mine',
    component:Mine
  },
]

// 创建路由对象：传入规则
const router = new VueRouter({
  routes,
  // mode:history
})


new Vue({
  router,
  render: h => h(App)
  
}).$mount('#app')
