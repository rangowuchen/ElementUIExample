<!--
 * @Author: wuchen
 * @Date: 2018-08-14 10:39:32
 * @LastEditors: wuchen
 * @LastEditTime: 2022-08-03 10:16:22
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

// 美化滚顶条
::-webkit-scrollbar-track {
  background: rgba(0,0,0,.1);
  border-radius: 0;
}
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 5px;
  background: rgba(0,0,0,.15);
  transition: color .2s ease;
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
