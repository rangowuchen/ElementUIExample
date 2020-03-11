/*
 * @Author: wuchen
 * @Date: 2018-11-23 11:45:11
 * @LastEditors: wuchen
 * @LastEditTime: 2020-03-10 15:43:49
 * @Description: 
 * @Email: rangowu@163.com
 */

import Vue from 'vue'
import App from './App'
import router from './router'
// 如果是在src下创建的文件夹是store/index.js,那么在main.js中引入store时就可以写成如下格式
//等同于import store from './store/index';即,如果命名的文件夹名称时store,里面的index.js可以省略不写
// import store from './store'暂时注释
// import store from './store/store.js'

import store from './store/vuexDesc'

Vue.config.productionTip = false

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入echarts
import echarts from 'echarts'
import china from 'echarts/map/js/china'
Vue.prototype.$echarts = echarts

//引入iconfont
import './assets/iconfont/iconfont.css'

// 引入font-awesome字体图标
import 'font-awesome/css/font-awesome.css'
// 权限控制
import '@/permission.js'

// 引入vueworker
import VueWorker from 'vue-worker';
Vue.use(VueWorker)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,//把store引入到vue实例中,在组件中就可以使用vue实例的$store方法来调用了
  router,
  components: { App },
  template: '<App/>'
})
