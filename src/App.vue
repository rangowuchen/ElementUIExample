<!--
 * @Author: wuchen
 * @Date: 2018-08-14 10:39:32
 * @LastEditors: wuchen
 * @LastEditTime: 2021-06-22 17:22:46
 * @Description: 
 * @Email: rangowu@163.com
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html,body,#app{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

/* 引入iconfont,去掉iconfont类 */
@import './assets/iconfont/iconfont.css';
[class^="cw"],[class^=" cw"]{
  font-family: "iconfont", serif !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
