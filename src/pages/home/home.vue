<!--
 * @Author: wuchen
 * @Date: 2018-08-14 11:18:08
 * @LastEditors: wuchen
 * @LastEditTime: 2019-10-28 17:10:03
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
        <!-- query要用path来引入，params要用name来引入，接收参数都是类似的，
        分别是this.$route.query.name和this.$route.params.name -->
        <div class="routerType">
          <a @click="routeParams">路由参数params</a>
          <a @click="routeQuery">路由参数query</a>
        </div>
        <div class="sec" v-for="(item,index) in $router.options.routes" v-if="item.meta"> 
          <router-link :to="item.path">{{item.meta.title}}</router-link>
        </div>

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
.routerType{
  line-height: 50px;
}
.sec{
  width:25%;
  float: left;
}
</style>