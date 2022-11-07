/*
 * @Author: wuchen
 * @Date: 2022-11-07 16:53:02
 * @LastEditors: wuchen
 * @LastEditTime: 2022-11-07 17:06:50
 * @Description: 
 * @Email: rangowu@163.com
 */
import Home from '@/pages/home/home'

const vuesRouter = {
  path: '/vues',
  component: Home,
  redirect: '/vuex',
  name: 'aa',
  meta: {
    title: 'vue相关',
    icon: 'el-icon-edit'
  },
  children: [
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
    // {
    //   path: '/Parentchild',
    //   name: 'Parentchild',
    //   component: function (resolve) {
    //     require(['@/pages/vuex/communication/Parent.vue'], resolve)
    //   },
    // },
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
    // vue复用代码--混入 (mixins)
    {
      path: '/mixins',
      name: 'mixins',
      meta: {
        title: "复用代码--混入"
      },
      component: function (resolve) {
        require(['@/pages/mixins/index.vue'], resolve)
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
  ]
}

export default vuesRouter
