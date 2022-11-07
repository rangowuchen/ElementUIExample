/*
 * @Author: wuchen
 * @Date: 2018-08-14 10:39:32
 * @LastEditors: wuchen
 * @LastEditTime: 2022-11-07 17:06:57
 * @Description: 
 * @Email: rangowu@163.com
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import chartsRouter from './modules/charts'
import treeRouter from './modules/tree'
import animateRouter from './modules/animate'
import canvasRouter from './modules/canvas'
import vuesRouter from './modules/vues'
export const routes = [
  treeRouter,
  chartsRouter,
  animateRouter,
  canvasRouter,
  vuesRouter,
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
