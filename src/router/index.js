import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // 编辑树
    {
      path: '/tree',
      name: 'tree',
      component: function (resolve) { require(['@/pages/tree/index.vue'], resolve) },
    },
    // 测试路由
    {
      path: '/test',
      name: 'test',
      component: function (resolve) { require(['@/pages/test/test.vue'], resolve) },
    },
    // 树加载
    {
      path: '/treeLoading',
      name: 'treeLoading',
      component: function (resolve) { require(['@/pages/tree/treeLoading.vue'], resolve) },
    },
    // 将html转化成图片(转化的那部分必须设置背景颜色,不然转化的颜色是黑色)
    {
      path: '/html2canvas',
      name: 'html2canvas',
      component: function (resolve) { require(['@/pages/html2canvas/index.vue'], resolve) },
    },
    // 穿梭框
    {
      path: '/transfer',
      name: 'transfer',
      component: function (resolve) { require(['@/pages/transfer/index.vue'], resolve) },
    }
  ]
})
