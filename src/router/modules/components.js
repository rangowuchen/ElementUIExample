/*
 * @Author: wuchen
 * @Date: 2022-11-07 16:53:02
 * @LastEditors: wuchen
 * @LastEditTime: 2023-02-13 14:43:47
 * @Description: 
 * @Email: rangowu@163.com
 */
import Home from '@/pages/home/home'

const components = {
  path: '/components',
  component: Home,
  redirect: '/components',
  name: 'components',
  meta: {
    title: '组件/插件',
    icon: 'el-icon-edit'
  },
  children: [
    // yaml
    {
      path: '/yaml',
      name: 'yaml',
      meta: {
        title: "yaml在线编辑"
      },
      component: function (resolve) {
        require(['@/pages/yaml/index.vue'], resolve)
      },
    }  ]
}

export default components
