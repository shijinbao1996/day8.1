<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/category">分类</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/mine">我的</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>