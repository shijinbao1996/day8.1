<template>
  <div>
    <div>
      <h3>体育改变人生</h3>
    </div>
    <div>
      <router-link to="/tiyu/thome">体育的主页</router-link>
      <router-link to="/tiyu/tchina">国内的体育</router-link>
      <router-link to="/tiyu/tguowai">国外的体育</router-link>
    </div>
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