<!--
 * @Author: wuchen
 * @Date: 2021-12-21 10:49:56
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-21 15:01:49
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
  <div>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-scrollbar class="scrollbar-contain">
      <el-menu default-active="1-1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-submenu index="1-1">
            <span slot="title">选项1</span>
            <el-menu-item index="1-1-1">选项1</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2">
            <span slot="title">选项2</span>
            <el-menu-item index="1-2-1">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="1-3">
            <span slot="title">选项3</span>
            <el-menu-item index="1-3-1">选项3</el-menu-item>
          </el-submenu>

          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项4</el-menu-item>
          </el-submenu>
          <el-submenu index="1-5">
            <span slot="title">选项5</span>
            <el-menu-item index="1-5-1">选项5</el-menu-item>
          </el-submenu>
          <el-submenu index="1-6">
            <span slot="title">选项6</span>
            <el-menu-item index="1-6-1">选项6</el-menu-item>
          </el-submenu>
          <el-submenu index="1-7">
            <span slot="title">选项7</span>
            <el-menu-item index="1-7-1">选项7</el-menu-item>
          </el-submenu>
          <el-submenu index="1-8">
            <span slot="title">选项8</span>
            <el-menu-item index="1-8-1">选项8</el-menu-item>
          </el-submenu>
          <el-submenu index="1-9">
            <span slot="title">选项9</span>
            <el-menu-item index="1-9-1">选项9</el-menu-item>
          </el-submenu>

        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>
<style lang="scss" scoped>
  .scrollbar-contain{
    width: 100%;
    height: 100%;
    /deep/ .el-scrollbar__wrap{
      overflow-x: hidden;
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }

</style>
