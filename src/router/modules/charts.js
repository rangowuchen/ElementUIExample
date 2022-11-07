import Home from '@/pages/home/home'

const chartsRouter = {
    path: '/chart',
    component: Home,
    redirect: '/tree',
    name: 'bb',
    meta: {
      title: '图表',
      icon: 'el-icon-edit'
    },
    children: [
      // 折线图
      {
        path: '/drawLine',
        name: 'drawLine',
        meta: {
          title: "echarts-折线图"
        },
        component: function (resolve) {
          require(['@/pages/echarts/drawLine/index.vue'], resolve)
        },
      },
      // 柱状图
      {
        path: '/barCharts',
        name: 'barCharts',
        meta: {
          title: "echarts-柱状图"
        },
        component: function (resolve) {
          require(['@/pages/echarts/barCharts/index.vue'], resolve)
        },
      },
      // 地图
      {
        path: '/map',
        name: 'map',
        meta: {
          title: "echarts-地图"
        },
        component: function (resolve) {
          require(['@/pages/echarts/map/index.vue'], resolve)
        },
      },
      // 动态折线图
      {
        path: '/refreshCharts',
        name: 'refreshCharts',
        meta: {
          title: "echarts-数据刷新效果"
        },
        component: function (resolve) {
          require(['@/pages/echarts/refreshCharts/index.vue'], resolve)
        },
      },
      //  饼图动画
      {
        path: '/pie',
        name: 'pie',
        meta: {
          title: "饼状图"
        },
        component: function (resolve) {
          require(['@/pages/CSSAnimation/CSSScrect/pie/index.vue'], resolve)
        },
      },
      // 地图
      {
        path: '/vue-baidu-map',
        name: 'vue-baidu-map',
        meta: {
          title: "地图"
        },
        component: function (resolve) {
          require(['@/pages/vue-baidu-map'], resolve)
        },
      },
      // 拓扑关系图
      {
        path: '/relationalGraph',
        name: 'relationalGraph',
        meta: {
          title: "echarts-拓扑关系图"
        },
        component: function (resolve) {
          require(['@/pages/echarts/relationalGraph/index.vue'], resolve)
        },
      },
      // 拓扑图
      {
        path: '/topology',
        name: 'topology',
        meta: {
          title: "拓扑图"
        },
        component: function (resolve) {
          require(['@/pages/topology'], resolve)
        },
      },
      // datav
      {
        path: '/flyline',
        name: 'flyline',
        meta: {
          title: '飞线'
        },
        component: function (resolve) {
          require(['@/pages/datav/'], resolve)
        }
      },
      {
        path: '/antv-g6',
        name: 'antv-g6',
        meta: {
          title: 'antv-g6'
        },
        component: function (resolve) {
          require(['@/pages/antv-g6/'], resolve)
        }
      },
    ]
  }

export default chartsRouter