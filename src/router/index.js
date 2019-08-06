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
      meta: { title: "树" },
      component: function (resolve) { require(['@/pages/tree/index.vue'], resolve) },
    },
    // 树加载
    {
      path: '/treeLoading',
      name: 'treeLoading',
      meta: { title: "树加载" },
      component: function (resolve) { require(['@/pages/tree/treeLoading.vue'], resolve) },
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
      meta: { title: "md5加密" },
      component: function (resolve) { require(['@/pages/md5/index.vue'], resolve) },
    },
    // 将html转化成图片(转化的那部分必须设置背景颜色,不然转化的颜色是黑色)
    {
      path: '/html2canvas',
      name: 'html2canvas',
      meta: { title: "导出成图片" },
      component: function (resolve) { require(['@/pages/html2canvas/index.vue'], resolve) },
    },
    // 穿梭框
    {
      path: '/transfer',
      name: 'transfer',
      meta: { title: "穿梭框" },
      component: function (resolve) { require(['@/pages/transfer/index.vue'], resolve) },
    },
    // 折线图
    {
      path: '/drawLine',
      name: 'drawLine',
      meta: { title: "echarts-折线图" },
      component: function (resolve) { require(['@/pages/echarts/drawLine/index.vue'], resolve) },
    },
    // 柱状图
    {
      path: '/barCharts',
      name: 'barCharts',
      meta: { title: "echarts-柱状图" },
      component: function (resolve) { require(['@/pages/echarts/barCharts/index.vue'], resolve) },
    },
    // 地图
    {
      path: '/map',
      name: 'map',
      meta: { title: "echarts-地图" },
      component: function (resolve) { require(['@/pages/echarts/map/index.vue'], resolve) },
    },
    // 拓扑关系图
    {
      path: '/relationalGraph',
      name: 'relationalGraph',
      meta: { title: "echarts-拓扑关系图" },
      component: function (resolve) { require(['@/pages/echarts/relationalGraph/index.vue'], resolve) },
    },
    // csshake
    {
      path: '/csshake',
      name: 'csshake',
      meta: { title: "css晃动" },
      component: function (resolve) { require(['@/pages/csshake/index.vue'], resolve) },
    },
    /*
    *css动画
    */
    //  饼图动画
    {
      path: '/pie',
      name: 'pie',
      meta: { title: "饼状图" },
      component: function (resolve) { require(['@/pages/CSSAnimation/CSSScrect/pie/index.vue'], resolve) },
    },

    //  父子组件通信
    {
      path: '/communication',
      name: 'communication',
      meta: { title: "组件通信" },
      component: function (resolve) { require(['@/pages/ComponentCommunication/index.vue'], resolve) },
    },
    //  es6
    {
      path: '/es6',
      name: 'es6',
      meta: { title: "es6" },
      component: function (resolve) { require(['@/pages/es6/index.vue'], resolve) },
    },
    {
      path: '/iconfont',
      name: 'iconfont',
      meta: { title: "阿里图标" },
      component: function (resolve) { require(['@/pages/iconfont/index.vue'], resolve) },
    },
    // 复选框
    {
      path: '/checkbox',
      name: 'checkbox',
      meta: { title: "checkbox" },
      component: function (resolve) { require(['@/pages/checkbox/index.vue'], resolve) },
    },
    // vuex实例
    {
      path: '/vuex',
      name: 'vuex',
      meta: { title: "vuex" },
      component: function (resolve) { require(['@/pages/vuex/index.vue'], resolve) },
    },
    {
      path: '/Parentchild',
      name: 'Parentchild',
      component: function (resolve) { require(['@/pages/vuex/communication/Parent.vue'], resolve) },
    },
    {
      path: '/mapStatemapMutations',
      name: 'mapStatemapMutations',
      component: function (resolve) { require(['@/pages/vuex/instantiation/index.vue'], resolve) },
    },
    // 递归
    {
      path: '/digui',
      name: 'digui',
      meta: { title: "递归" },
      component: function (resolve) { require(['@/pages/digui/index.vue'], resolve) },
    },
    // 九宫格
    {
      path: '/9pieces',
      name: '9pieces',
      meta: { title: "九宫格" },
      component: function (resolve) { require(['@/pages/9pieces/index.vue'], resolve) },
    },
    // 树下拉选择
    {
      path: '/vue-treeselect',
      name: 'vue-treeselect',
      meta: { title: "vue 树下拉选择" },
      component: function (resolve) { require(['@/pages/vue-treeselect/index.vue'], resolve) },
    },
    // vue复用代码--混入 (mixins)
    {
      path: '/mixins',
      name: 'mixins',
      meta: { title: "vue复用代码--混入 (mixins)" },
      component: function (resolve) { require(['@/pages/mixins/index.vue'], resolve) },
    },
    // 图标选择组件
    {
      path:'/iconSelect',
      name:'iconSelect',
      meta:{title:"图标选择组件"},
      component:function (resolve) { require(['@/pages/iconSelect/index.vue'], resolve)}
    },
    // 前端加密
    {
      path:'/cryptojs',
      name:'cryptojs',
      meta:{title:"前端加密"},
      component:function (resolve) { require(['@/pages/cryptojs/index.vue'], resolve)}
    },
    // 图片裁剪
    {
      path:'/vue-cropper',
      name:'vue-cropper',
      meta:{title:"图片裁剪"},
      component:function (resolve) { require(['@/pages/vue-cropper/index.vue'], resolve)}
    },
    // 生成二维码
    {
      path:'/qrcode',
      name:'qrcode',
      meta:{title:"生成二维码"},
      component:function (resolve) { require(['@/pages/qrcode/index.vue'], resolve)}
    },
    // jsencrypt前端加密
    {
      path:'/jsencrypt',
      name:'jsencrypt',
      meta:{title:"jsencrypt前端加密"},
      component:function (resolve) { require(['@/pages/jsencrypt/index.vue'], resolve)}
    },
    // 树下拉选择
    {
      path: '/selectTree',
      name: 'selectTree',
      meta: { title: "下拉树" },
      component: function (resolve) { require(['@/pages/selectTree/index.vue'], resolve) },
    },
    // 树表格
    {
      path: '/treeTab',
      name: 'treeTab',
      meta: { title: "树表格" },
      component: function (resolve) { require(['@/pages/treeTab'], resolve) },
    },
    // element树改造
    {
      path: '/elementTree',
      name: 'elementTree',
      meta: { title: "element树" },
      component: function (resolve) { require(['@/pages/elementTree'], resolve) },
    },
    // 搜索树形数据
    {
      path: '/searchTree',
      name: 'searchTree',
      meta: { title: "搜索树形数据" },
      component: function (resolve) { require(['@/pages/searchTree'], resolve) },
    },
    // 骨架屏
    {
      path: '/skeleton',
      name: 'skeleton',
      meta: { title: "骨架屏" },
      component: function (resolve) { require(['@/pages/skeleton'], resolve) },
    },
  ]
})
