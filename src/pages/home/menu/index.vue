<!--
 * @Author: wuchen
 * @Date: 2021-12-21 10:49:56
 * @LastEditors: wuchen
 * @LastEditTime: 2022-11-04 17:21:10
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
      <el-menu :router="true" :default-active="defaultActive" text-color="#fff" active-text-color="#666"
        :collapse="isCollapse">
        <el-submenu v-for="item in $router.options.routes" :key="item.path" :index="item.path">
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
          </template>
          <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">
            {{child.meta?child.meta.title:'1111'}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: false,
        defaultActive: "",
      };
    },
     mounted() {
      console.log('luyou-----------', this.$router)
      this.defaultActive = this.$route.path;
    },
    watch: {
      $route(v1,v2) {
        this.defaultActive = v1.path;
      }
    },
    methods: {
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
