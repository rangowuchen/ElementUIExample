/*
 * @Author: wuchen
 * @Date: 2018-08-14 10:39:32
 * @LastEditors: wuchen
 * @LastEditTime: 2022-11-04 18:28:53
 * @Description: 
 * @Email: rangowu@163.com
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
export const routes = [{
    path: '/tree',
    component: Home,
    redirect: '/tree',
    name: 'aa',
    meta: {
      title: '树',
      icon: 'el-icon-edit'
    },
    children: [
      // 编辑树
      {
        path: '/tree',
        name: 'tree',
        meta: {
          title: "树",
          type: 'tree'
        },
        component: function (resolve) {
          require(['@/pages/tree/index.vue'], resolve)
        },
      },
      // 树加载
      {
        path: '/treeLoading',
        name: 'treeLoading',
        meta: {
          title: "树加载",
          type: 'tree'
        },
        component: function (resolve) {
          require(['@/pages/tree/treeLoading.vue'], resolve)
        },
      },
      // 权限树111
      {
        path: '/permTree',
        name: 'permTree',
        meta: {
          title: "权限树111",
          type: 'tree'
        },
        component: function (resolve) {
          require(['@/pages/tree/perm'], resolve)
        },
      },
      // 权限树222
      {
        path: '/permMenu',
        name: 'permMenu',
        meta: {
          title: "权限树222",
          type: 'tree'
        },
        component: function (resolve) {
          require(['@/pages/tree/treeMenu'], resolve)
        },
      },
      // 权限树333
      {
        path: '/treeData',
        name: 'treeData',
        meta: {
          title: "权限树333",
          type: 'tree'
        },
        component: function (resolve) {
          require(['@/pages/tree/vue-tree'], resolve)
        },
      },
      // element树单选
      {
        path: '/singleSelectTree',
        name: 'singleSelectTree',
        meta: {
          title: "element树单选",
          type: 'tree'
        },
        component: function (resolve) {
          require(['@/pages/tree/element-tree/singleSelect'], resolve)
        },
      },
      // 树下拉选择
      {
        path: '/vue-treeselect',
        name: 'vue-treeselect',
        meta: {
          title: "vue 树下拉选择",
          type: 'tree'
        },
        component: function (resolve) {
          require(['@/pages/vue-treeselect/index.vue'], resolve)
        },
      },
      // 树下拉选择
      {
        path: '/selectTree',
        name: 'selectTree',
        meta: {
          title: "下拉树",
          type: 'tree'
        },
        component: function (resolve) {
          require(['@/pages/selectTree/index.vue'], resolve)
        },
      },
      // 树表格
      {
        path: '/treeTab',
        name: 'treeTab',
        meta: {
          title: "树表格",
          type: 'tree'
        },
        component: function (resolve) {
          require(['@/pages/treeTab'], resolve)
        },
      },
      // element树改造
      {
        path: '/elementTree',
        name: 'elementTree',
        meta: {
          title: "element树",
          type: 'tree'
        },
        component: function (resolve) {
          require(['@/pages/elementTree'], resolve)
        },
      },
      // 搜索树形数据
      {
        path: '/searchTree',
        name: 'searchTree',
        meta: {
          title: "搜索树形数据",
          type: 'tree'
        },
        component: function (resolve) {
          require(['@/pages/searchTree'], resolve)
        },
      },
      // bTree.elTree
      {
        path: '/bTree',
        name: 'bTree',
        meta: {
          title: "bTree",
          type: 'tree'
        },
        component: function (resolve) {
          require(['@/pages/tree/vueBigTree/bTree'], resolve)
        },
      },
      {
        path: '/elTree',
        name: 'elTree',
        meta: {
          title: "elTree",
          type: 'tree'
        },
        component: function (resolve) {
          require(['@/pages/tree/vueBigTree/elTree'], resolve)
        },
      },
      // 某些节点横向排列
      {
        path: '/infeedTree',
        name: 'infeedTree',
        meta: {
          title: "某些树节点横向排列",
          type: 'tree'
        },
        component: function (resolve) {
          require(['@/pages/tree/infeedTree'], resolve)
        },
      }
    ]
  },
  {
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
  },
  {
    path: '/',
    component: Home,
    redirect: '/test',
    name: 'aa',
    meta: {
      title: '功能',
      icon: 'el-icon-edit'
    },
    children: [
      // 测试路由
      {
        path: '/test',
        name: 'test',
        component: function (resolve) {
          require(['@/pages/test/test.vue'], resolve)
        },
      },
      // md5加密
      {
        path: '/md5',
        name: 'md5',
        meta: {
          title: "md5加密"
        },
        component: function (resolve) {
          require(['@/pages/md5/index.vue'], resolve)
        },
      },
      // 将html转化成图片(转化的那部分必须设置背景颜色,不然转化的颜色是黑色)
      {
        path: '/html2canvas',
        name: 'html2canvas',
        meta: {
          title: "导出成图片"
        },
        component: function (resolve) {
          require(['@/pages/html2canvas/index.vue'], resolve)
        },
      },
      // 将html转化成图片--微信中长按保存
      {
        path: '/longpressToSaveImg',
        name: 'longpressToSaveImg',
        meta: {
          title: "长按保存图片"
        },
        component: function (resolve) {
          require(['@/pages/html2canvas/longpressToSaveImg.vue'], resolve)
        },
      },
      // 穿梭框
      {
        path: '/transfer',
        name: 'transfer',
        meta: {
          title: "穿梭框"
        },
        component: function (resolve) {
          require(['@/pages/transfer/transferTable'], resolve)
        },
      },

      // csshake
      {
        path: '/csshake',
        name: 'csshake',
        meta: {
          title: "css晃动"
        },
        component: function (resolve) {
          require(['@/pages/csshake/index.vue'], resolve)
        },
      },
      /*
       *css动画
       */


      //  父子组件通信
      {
        path: '/communication',
        name: 'communication',
        meta: {
          title: "组件通信"
        },
        component: function (resolve) {
          require(['@/pages/ComponentCommunication/index.vue'], resolve)
        },
      },
      //  es6
      {
        path: '/es6',
        name: 'es6',
        meta: {
          title: "es6"
        },
        component: function (resolve) {
          require(['@/pages/es6/index.vue'], resolve)
        },
      },
      {
        path: '/iconfont',
        name: 'iconfont',
        meta: {
          title: "阿里图标"
        },
        component: function (resolve) {
          require(['@/pages/iconfont/index.vue'], resolve)
        },
      },
      // 复选框
      {
        path: '/checkbox',
        name: 'checkbox',
        meta: {
          title: "checkbox"
        },
        component: function (resolve) {
          require(['@/pages/checkbox/index.vue'], resolve)
        },
      },
      // vuex实例
      {
        path: '/vuex',
        name: 'vuex',
        meta: {
          title: "vuex"
        },
        component: function (resolve) {
          require(['@/pages/vuex/index.vue'], resolve)
        },
      },
      // vuex理解
      {
        path: '/vuexDesc',
        name: 'vuexDesc',
        meta: {
          title: "vuex理解"
        },
        component: function (resolve) {
          require(['@/pages/vuex/vuexDesc/index.vue'], resolve)
        },
      },
      {
        path: '/Parentchild',
        name: 'Parentchild',
        component: function (resolve) {
          require(['@/pages/vuex/communication/Parent.vue'], resolve)
        },
      },
      // {
      //   path: '/mapStatemapMutations',
      //   name: 'mapStatemapMutations',
      //   component: function (resolve) {
      //     require(['@/pages/vuex/instantiation/index.vue'], resolve)
      //   },
      // },
      // {
      //   path: '/vuexAll',
      //   name: 'vuexAll',
      //   component: function (resolve) {
      //     require(['@/pages/vuex/vuexAll/index.vue'], resolve)
      //   },
      // },
      // 递归
      {
        path: '/digui',
        name: 'digui',
        meta: {
          title: "递归"
        },
        component: function (resolve) {
          require(['@/pages/digui/index.vue'], resolve)
        },
      },
      // 九宫格
      {
        path: '/9pieces',
        name: '9pieces',
        meta: {
          title: "九宫格"
        },
        component: function (resolve) {
          require(['@/pages/9pieces/index.vue'], resolve)
        },
      },
      // vue复用代码--混入 (mixins)
      {
        path: '/mixins',
        name: 'mixins',
        meta: {
          title: "vue复用代码--混入 (mixins)"
        },
        component: function (resolve) {
          require(['@/pages/mixins/index.vue'], resolve)
        },
      },
      // 图标选择组件
      {
        path: '/iconSelect',
        name: 'iconSelect',
        meta: {
          title: "图标选择组件"
        },
        component: function (resolve) {
          require(['@/pages/iconSelect/index.vue'], resolve)
        }
      },
      // 前端加密
      {
        path: '/cryptojs',
        name: 'cryptojs',
        meta: {
          title: "前端加密"
        },
        component: function (resolve) {
          require(['@/pages/cryptojs/index.vue'], resolve)
        }
      },
      // 图片裁剪
      {
        path: '/vue-cropper',
        name: 'vue-cropper',
        meta: {
          title: "图片裁剪"
        },
        component: function (resolve) {
          require(['@/pages/vue-cropper/index.vue'], resolve)
        }
      },
      // 生成二维码
      {
        path: '/qrcode',
        name: 'qrcode',
        meta: {
          title: "生成二维码"
        },
        component: function (resolve) {
          require(['@/pages/qrcode/index.vue'], resolve)
        }
      },
      // jsencrypt前端加密
      {
        path: '/jsencrypt',
        name: 'jsencrypt',
        meta: {
          title: "jsencrypt前端加密"
        },
        component: function (resolve) {
          require(['@/pages/jsencrypt/index.vue'], resolve)
        }
      },

      // 骨架屏
      {
        path: '/skeleton',
        name: 'skeleton',
        meta: {
          title: "骨架屏"
        },
        component: function (resolve) {
          require(['@/pages/skeleton'], resolve)
        },
      },

      // 下拉框一行显示几个字段,可搜索
      {
        path: '/selectSearchMore',
        name: 'selectSearchMore',
        meta: {
          title: "下拉搜索多个字段"
        },
        component: function (resolve) {
          require(['@/pages/selectSearchMore'], resolve)
        },
      },
      // 测试页面
      {
        path: '/aaaaaa',
        name: 'aaaaaa',
        meta: {
          title: "测试的"
        },
        component: function (resolve) {
          require(['@/pages/test/aaaaaa'], resolve)
        },
      },
      // 下拉搜索的 filter-method
      {
        path: '/filterMethod',
        name: 'filterMethod',
        meta: {
          title: "filter-method"
        },
        component: function (resolve) {
          require(['@/pages/filter-method/'], resolve)
        },
      },

      // 数组遍历
      {
        path: '/arrMap',
        name: 'arrMap',
        meta: {
          title: "数组遍历"
        },
        component: function (resolve) {
          require(['@/pages/arrMap'], resolve)
        },
      },
      // 折叠面板
      {
        path: '/collapseCard',
        name: 'collapseCard',
        meta: {
          title: "折叠面板"
        },
        component: function (resolve) {
          require(['@/pages/collapseCard/index3.vue'], resolve)
        },
      },
      // vueworker
      {
        path: '/vueworker',
        name: 'vueworker',
        meta: {
          title: "vueworker"
        },
        component: function (resolve) {
          require(['@/pages/vueworker'], resolve)
        },
      },
      // 仿掘金登陆效果
      {
        path: '/login',
        name: 'login',
        meta: {
          title: '登录'
        },
        component: function (resolve) {
          require(['@/pages/login'], resolve)
        }
      },
      // 登录1
      {
        path: '/login1',
        name: 'login1',
        meta: {
          title: '登录1'
        },
        component: function (resolve) {
          require(['@/pages/login/donghua'], resolve)
        }
      },
      // worker-loader
      {
        path: '/worker-loader',
        name: 'worker-loader',
        meta: {
          title: 'worker-loader'
        },
        component: function (resolve) {
          require(['@/pages/worker'], resolve)
        }
      },
      // 表格
      // 表格内编辑
      {
        path: '/editTable',
        name: 'editTable',
        meta: {
          title: 'editTable'
        },
        component: function (resolve) {
          require(['@/pages/table/editTable'], resolve)
        }
      },
      // 表单
      {
        path: '/from',
        name: 'form',
        meta: {
          title: '表单'
        },
        component: function (resolve) {
          require(['@/pages/form'], resolve)
        }
      },
      // 锚点
      {
        path: '/anchor',
        name: 'anchor',
        meta: {
          title: '锚点'
        },
        component: function (resolve) {
          require(['@/pages/anchor/index3'], resolve)
        }
      },
      // 特效
      {
        path: '/cover',
        name: 'cover',
        meta: {
          title: 'cover'
        },
        component: function (resolve) {
          require(['@/pages/specialEfficiency/login/index2.vue'], resolve)
        }
      },
      {
        path: '/line',
        name: 'line',
        meta: {
          title: '星空连线'
        },
        component: function (resolve) {
          require(['@/pages/specialEfficiency/connectLine/'], resolve)
        }
      },
      // 登录效果
      {
        path: '/login3',
        name: 'login3',
        meta: {
          title: '登录效果3'
        },
        component: function (resolve) {
          require(['@/pages/specialEfficiency/login/index3.vue'], resolve)
        }
      },
      // 过渡效果
      {
        path: '/fade',
        name: 'fade',
        meta: {
          title: '过渡效果'
        },
        component: function (resolve) {
          require(['@/pages/specialEfficiency/过渡/index.vue'], resolve)
        }
      },
      // 左右滚动效果
      {
        path: '/leftrightToScroll',
        name: 'leftrightToScroll',
        meta: {
          title: '左右滚动效果'
        },
        component: function (resolve) {
          require(['@/pages/leftrightToScroll/index1'], resolve)
        }
      },
      // swiper
      {
        path: '/swiper',
        name: 'swiper',
        meta: {
          title: 'swiper'
        },
        component: function (resolve) {
          require(['@/pages/swiper/index'], resolve)
        }
      },

      // 左右滑动
      {
        path: '/slider',
        name: 'slider',
        meta: {
          title: '左右滑动'
        },
        component: function (resolve) {
          require(['@/pages/slider/'], resolve)
        }
      },
      // 左右滑动

      // 代码高亮
      {
        path: '/highlight',
        name: 'highlight',
        meta: {
          title: 'highlight'
        },
        component: function (resolve) {
          require(['@/pages/highlight/'], resolve)
        }
      },
      // 内置组件 component
      {
        path: '/component',
        name: 'component',
        meta: {
          title: '内置组件component'
        },
        component: function (resolve) {
          require(['@/pages/component/'], resolve)
        }
      },
      // mixin 混入
      {
        path: '/mixin',
        name: 'mixin',
        meta: {
          title: 'mixin混入'
        },
        component: function (resolve) {
          require(['@/pages/mixin/'], resolve)
        }
      },
      // 公共组件
      {
        path: '/components',
        name: 'components',
        meta: {
          title: '公共组件'
        },
        component: function (resolve) {
          require(['@/components/'], resolve)
        }
      },
      // css动画
      {
        path: '/css',
        name: 'css',
        meta: {
          title: 'css动画'
        },
        component: function (resolve) {
          require(['@/pages/css/'], resolve)
        }
      },
      // 插槽
      {
        path: '/slot',
        name: 'slot',
        meta: {
          title: '插槽'
        },
        component: function (resolve) {
          require(['@/pages/slot/'], resolve)
        }
      },
      // 大量数据处理
      {
        path: '/bigDataCheck',
        name: 'bigDataCheck',
        meta: {
          title: '大量数据处理'
        },
        component: function (resolve) {
          require(['@/pages/bigData/'], resolve)
        }
      },
      // 拖拽
      {
        path: '/elementPosition',
        name: 'elementPosition',
        meta: {
          title: '元素位置'
        },
        component: function (resolve) {
          require(['@/pages/drag/elementPosition'], resolve)
        }
      },
      {
        path: '/drag',
        name: 'drag',
        meta: {
          title: '拖拽'
        },
        component: function (resolve) {
          require(['@/pages/drag/'], resolve)
        }
      },
      {
        path: '/canvas/compress',
        name: 'compress',
        meta: {
          title: 'canvas图片压缩'
        },
        component: function (resolve) {
          require(['@/pages/canvas/compress.vue'], resolve)
        }
      }
    ]
  },


]
Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: routes
})
