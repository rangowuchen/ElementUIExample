<!--
 * @Author: wuchen
 * @Date: 2018-08-14 11:18:08
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-21 14:42:45
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
  <div class="contain">
    <cw-menu class="contain-left"></cw-menu>
    <div class="contain-right">
      <cw-settings></cw-settings>
      <cw-content class="cw-content"></cw-content>
    </div>
  </div>
</template>

<script>
  import CwSettings from './settings'
  import CwMenu from './menu'
  import CwContent from './content'
  export default {
    components: {
      CwMenu,
      CwContent,
      CwSettings
    },
    data() {
      return {};
    },
    methods: {}
  };

</script>
<style lang="scss" scoped>
  .contain {
    display: flex;
    height: 100%;

    .contain-left {
      width: 200px;
    }

    .contain-right {
      width: calc(100% - 200px);

      .cw-content {
        // padding-top: 54px;
        // background: #fff;
        // border-bottom: 1px solid #d8dce5;
        // box-shadow: 0 1px 3px 0 rgba(0,0,0,.12),0 0 3px 0 rgba(0,0,0,.04);
      }


    }
  }
</style>
