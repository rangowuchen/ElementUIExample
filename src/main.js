/*
 * @Author: wuchen
 * @Date: 2018-11-23 11:45:11
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-21 17:19:56
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
import './assets/css/theme.scss';
Vue.use(ElementUI);

// 自定义组件
import CwButton from '@/components/Button';
Vue.component('cw-button',CwButton);

// 引入echarts
import echarts from 'echarts'
import china from 'echarts/map/js/china'
Vue.prototype.$echarts = echarts

// 权限控制
import '@/permission.js'

// 引入vueworker
import VueWorker from 'vue-worker';
Vue.use(VueWorker)

import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

// 星空连线
import VueParticles from 'vue-particles'  
Vue.use(VueParticles)

// 代码高亮
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'	//样式
// 自定义指令
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)    
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,//把store引入到vue实例中,在组件中就可以使用vue实例的$store方法来调用了
  router,
  components: { App },
  template: '<App/>'
})
