/*
 * @Author: wuchen
 * @Date: 2020-03-06 14:40:58
 * @LastEditors: wuchen
 * @LastEditTime: 2020-03-26 10:07:43
 * @Description: 
 * @Email: rangowu@163.com
 */
import router from './router'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/auth-redirect']

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  // 判断是否登陆过
  const hasToken = window.localStorage.getItem('token')

  if (hasToken) {
    if (to.path === '/login' || to.path === '/') {
      next({ path: '/home' })
      NProgress.done()
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
