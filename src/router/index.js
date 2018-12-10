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
    // md5加密
    {
      path: '/md5',
      name: 'md5',
      component: function (resolve) { require(['@/pages/md5/index.vue'], resolve) },
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
    },
    // 折线图
    {
      path: '/drawLine',
      name: 'drawLine',
      component: function (resolve) { require(['@/pages/echarts/drawLine/index.vue'], resolve) },
    },
    // 柱状图
    {
      path: '/barCharts',
      name: 'barCharts',
      component: function (resolve) { require(['@/pages/echarts/barCharts/index.vue'], resolve) },
    },
    // 地图
    {
      path: '/map',
      name: 'map',
      component: function (resolve) { require(['@/pages/echarts/map/index.vue'], resolve) },
    },
    // 拓扑关系图
    {
      path: '/relationalGraph',
      name: 'relationalGraph',
      component: function (resolve) { require(['@/pages/echarts/relationalGraph/index.vue'], resolve) },
    },
    // csshake
    {
      path: '/csshake',
      name: 'csshake',
      component: function (resolve) { require(['@/pages/csshake/index.vue'], resolve) },
    },
    /*
    *css动画
    */
    //  饼图动画
    {
      path: '/pie',
      name: 'pie',
      component: function (resolve) { require(['@/pages/CSSAnimation/CSSScrect/pie/index.vue'], resolve) },
    },

    //  父子组件通信
    {
      path: '/communication',
      name: 'communication',
      component: function (resolve) { require(['@/pages/ComponentCommunication/index.vue'], resolve) },
    },
    //  es6
    {
      path: '/es6',
      name: 'es6',
      component: function (resolve) { require(['@/pages/es6/index.vue'], resolve) },
    },
    //  es6
    {
      path: '/iconfont',
      name: 'iconfont',
      component: function (resolve) { require(['@/pages/iconfont/index.vue'], resolve) },
    },
    // 复选框
    {
      path: '/checkbox',
      name: 'checkbox',
      component: function (resolve) { require(['@/pages/checkbox/index.vue'], resolve) },
    },
    // vuex实例
    {
      path: '/vuex',
      name: 'vuex',
      component: function (resolve) { require(['@/pages/vuex/communication/Parent.vue'], resolve) },
    },
    {
      path: '/$store',
      name: '$store',
      component: function (resolve) { require(['@/pages/vuex/instantiation/index.vue'], resolve) },
    },
    // 递归
    {
      path: '/digui',
      name: 'digui',
      component: function (resolve) { require(['@/pages/digui/index.vue'], resolve) },
    },
  ]
})
