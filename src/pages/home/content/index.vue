<!--
 * @Author: wuchen
 * @Date: 2021-12-21 10:57:36
 * @LastEditors: wuchen
 * @LastEditTime: 2022-11-07 17:17:34
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
  <div class="content">
    <!-- query要用path来引入，params要用name来引入，接收参数都是类似的，
        分别是this.$route.query.name和this.$route.params.name -->
    <div class="routerType">
      <a @click="routeParams">路由参数params</a>
      <a @click="routeQuery">路由参数query</a>
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
.content {
  padding: 10px;
}
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
