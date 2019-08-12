<!--
 * @Author: wuchen
 * @Date: 2018-12-10 15:03:55
 * @LastEditors: wuchen
 * @LastEditTime: 2019-08-12 16:48:18
 * @Description: 
 * @Email: rangowu@163.com
 -->

<template>
    <div>
        <!-- 
            参数介绍
            1,state
            存储初始化数据
            2,getters
            对state里面的数据二次处理(对数据进行过滤类似filter的作用)比如state返回的
            为一个对象,我们想取对象中的一个键的值用这个方法
            3,mutations
            对数据进行计算的方法全部写在里面(类似computed)在页面中触发时使用
            this.$store.commit('mutationName')触发mutations方法改变state的值
            4,actions 处理mutations中已经写好的方法,其直接触发方式是
            this.$store.dispatch(actionName)
         -->
        <router-link to="/Parentchild">父子组件</router-link>
        <router-link to="/mapStatemapMutations">mapState,mapMutations</router-link>
        <router-link to="/vuexAll">vuex状态管理</router-link>

    </div>
</template>

<script>
export default {
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
</style>