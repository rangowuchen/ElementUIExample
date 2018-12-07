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
        <!-- query要用path来引入，params要用name来引入，接收参数都是类似的，
        分别是this.$route.query.name和this.$route.params.name -->
        <a @click="routeParams">路由参数params</a>
        <a @click="routeQuery">路由参数query</a>
        <router-link to="/tree">tree</router-link>
        <router-link to="/treeLoading">树加载</router-link>
        <router-link to="/html2canvas">导出成图片</router-link>
        <router-link to="/transfer">穿梭框</router-link>
        <router-link to="/drawLine">echarts-折线图</router-link>
        <router-link to="/barCharts">echarts-柱状图</router-link>
        <router-link to="/map">echarts-地图</router-link>
        <router-link to="/relationalGraph">echarts-拓扑关系图</router-link>
        <router-link to="/csshake">csshake</router-link>
        <router-link to="/pie">饼图动画</router-link>
        <router-link to="/communication">组件通信</router-link>
        <router-link to="/es6">es6</router-link>
        <router-link to="/md5">md5</router-link>
        <router-link to="/iconfont">iconfont</router-link>
        <router-link to="/checkbox">checkbox</router-link>
        <router-link to="/vuex">vuex</router-link>

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