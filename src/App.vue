<template>
  <!-- 这个是网页布局 -->
  <div>
    <!-- <h1>Database（demo）</h1> -->
  <router-view></router-view>
  </div>
    <!--a标签 to就是href属性-->
    <!-- <router-link to="/main">首页</router-link>
    <router-link to="/login">登陆页</router-link>
    <router-link to="/login">联系人页面</router-link> -->
    <!-- 这个标签就是用来展示路由页面的视图 -->
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
