<!--
 * @Author: wuchen
 * @Date: 2021-12-21 11:32:13
 * @LastEditors: wuchen
 * @LastEditTime: 2022-11-07 16:52:28
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
  <div class="header">
    <el-select v-model="currentTheme" placeholder="主题" @change="changeTheme">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentTheme: 'blackTheme',
        options: [{
          value: 'blueTheme',
          label: '蓝色主题'
        }, {
          value: 'blackTheme',
          label: '黑色主题'
        }, ]
      };
    },
    mounted () {
      document.getElementsByTagName('body')[0].className = this.currentTheme;
    },
    methods: {
      changeTheme() {
          document.getElementsByTagName('body')[0].className = this.currentTheme;
      }
    }
  }

</script>
<style lang="scss" scoped>
.header {
    // position: fixed;
    // top: 0;
    // right: 0;
    // z-index: 9;
    // width: calc(100% - 200px);
    // height: 54px;
    // -webkit-transition: width .28s;
    // transition: width .28s;
}
</style>
