import Vue from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/iconfont.css"

import MyGoodsList from '@/views/MyGoodsList'
import MyGoodsSearch from '@/views/MyGoodsSearch'
import MyUserInfo from '@/views/MyUserInfo'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false


const routes = [
  {
    path: "/list",
    component: MyGoodsList,
    name:'MyGoodsList'
  },
  {
    path: "/search",
    component: MyGoodsSearch,
    name:'MyGoodsSearch'
  },
  {
    path: "/info",
    component: MyUserInfo,
    name:'MyUserInfo'
  }
]

const router = new VueRouter({
  routes
})

import axios from 'axios';
axios.defaults.baseURL = 'https://www.escook.cn';
Vue.prototype.$axios =axios;

Vue.directive('focus',{
  inserted(el){
    el.focus()
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
