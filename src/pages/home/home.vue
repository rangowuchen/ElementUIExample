/*
 * @Author: wuchen
 * @Date: 2018-09-29 15:53:17
 * @LastEditors: wuchen
 * @LastEditTime: 2018-09-29 15:53:50
 * @Description:首页 
 * @Email: rangowu@163.com
 */


<template>
    <div>
        <!-- query要用path来引入，params要用name来引入，接收参数都是类似的，
        分别是this.$route.query.name和this.$route.params.name -->
        <a @click="routeParams">路由参数params</a>
        <a @click="routeQuery">路由参数query</a>
        <router-link to="/tree">tree</router-link>
        <router-link to="/treeLoading">树加载</router-link>
        <router-link to="/html2canvas">导出成图片</router-link>
        <router-link to="/transfer">穿梭框</router-link>

    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    routeParams() {
      this.$router.push({
        name: "test",
        params: {
          name: "routeParams",
          code: 101
        }
      });
    },
    routeQuery() {
      this.$router.push({
        path: "test",
        query: {
          name: "routeQuery",
          code: 110
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
a {
  margin: 10px;
}
</style>