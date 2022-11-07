/*
 * @Author: wuchen
 * @Date: 2022-11-07 16:53:02
 * @LastEditors: wuchen
 * @LastEditTime: 2022-11-07 16:54:15
 * @Description: 
 * @Email: rangowu@163.com
 */
import Home from '@/pages/home/home'

const canvasRouter = {
  path: '/canvas',
  component: Home,
  redirect: '/compress',
  name: 'aa',
  meta: {
    title: 'canvas',
    icon: 'el-icon-edit'
  },
  children: [
    {
        path: '/compress',
        name: 'compress',
        meta: {
          title: 'canvas图片压缩'
        },
        component: function (resolve) {
          require(['@/pages/canvas/compress.vue'], resolve)
        }
      }
  ]
}

export default canvasRouter
