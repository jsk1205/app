<template>
  <div id="app">
    <!-- 主路由出口 -->
    <!--4. 路由匹配到的组件将渲染在此处 -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="less">
html,body,h3{
  margin: 0;
  padding: 0;
}
</style>
