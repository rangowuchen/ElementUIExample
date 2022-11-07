import Home from '@/pages/home/home'

const treeRouter = {
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
}

export default treeRouter
