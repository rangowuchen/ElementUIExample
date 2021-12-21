<!--
 * @Author: wuchen
 * @Date: 2018-08-14 11:18:08
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-21 11:00:24
 * @Description: 
 * @Email: rangowu@163.com
 -->
/*
* @Author: wuchen
* @Date: 2018-09-29 15:53:17
* @LastEditors: wuchen
* @LastEditTime: 2018-10-26 09:43:27
* @Description:首页
* @Email: rangowu@163.com
*/


<template>
  <div>
    <cw-menu></cw-menu>
    <cw-content></cw-content>
  </div>
</template>

<script>
  import CwMenu from './menu'
  import CwContent from './content'
  export default {
    components: {
      CwMenu,
      CwContent
    },
    data() {
      return {};
    },
    methods: {
    }
  };

</script>
<style lang="scss" scoped>
  a {
    margin: 10px;
  }

  .routerType {
    line-height: 50px;
  }

  .sec {
    width: 25%;
    float: left;
    text-align: left;
  }

</style>
