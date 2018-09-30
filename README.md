# ElementUI&Function

> A Vue.js project

## Build Setup

> 安装依赖
> npm install

启动项目
>npm run dev

打包
>npm run build

各个组件实现都在page里面,每个文件对应不同的组件以及实现的功能

# ElementUI 组件库
>1,引入  
npm i element-ui -S  
>2,在main.js中引入并使用  
import ElementUI from 'element-ui'  
import 'element-ui/lib/theme-default/index.css'  
Vue.use(ElementUI)  
>3,看官网使用组件即可  

# 引入sass语法
>1,安装依赖  
npm install node-sass --save-dev //安装node-sass   
npm install sass-loader --save-dev //安装sass-loader   
npm install style-loader --save-dev //安装style-loader 有些人安装的是 vue-style-loader 其实是一样的！  
上面几个相当于 npm install sass-loader node-sass vue-style-loader --D  一句话搞定  
>2,在build文件夹下的webpack.base.conf.js的rules里面添加配置  
{  
    test: /\.scss$/,  
    loaders: ["style", "css", "sass"]  
}  
>3,然后就可以正常使用了  
<style lang="scss"></style>  
>4,原理  
sass和scss是两个不同的东西！只是相似！sass借鉴了ruby语言的规范很严格！代码里面也没有大括号！  
这对于习惯用css{}的前端人员很难适应！于是就出现了scss!完美兼容css!还能有sass的功能！  

# 引入echarts
>1,安装依赖  
npm install echarts -S  
>2,在main.js进行全局引入  
import echarts from 'echarts'  
Vue.prototype.$echarts = echarts  
>3,上面全局引入会将所有的echarts图表打包，导致体积过大,也可按需引入(在使用的地方进行引入)  
引入基本模板  
let echarts = require('echarts/lib/echarts')  
引入柱状图组件  
require('echarts/lib/chart/bar')  
引入提示框和title组件  
require('echarts/lib/component/tooltip')  
require('echarts/lib/component/title')  


