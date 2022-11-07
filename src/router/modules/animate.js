/*
 * @Author: wuchen
 * @Date: 2022-11-07 16:46:54
 * @LastEditors: wuchen
 * @LastEditTime: 2022-11-07 16:50:49
 * @Description: 
 * @Email: rangowu@163.com
 */
import Home from '@/pages/home/home'

const animateRouter = {
  path: '/css',
  component: Home,
  redirect: '/csshake',
  name: 'aa',
  meta: {
    title: 'css&动画',
    icon: 'el-icon-edit'
  },
  children: [
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
  ]
}

export default animateRouter
