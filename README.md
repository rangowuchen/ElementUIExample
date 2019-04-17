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

# 引入md5
>1,安装依赖  
npm install --save js-md5  
>2,在main.js进行全局引入    
import md5 from 'js-md5    
Vue.prototype.$md5 = md5    
使用:this.$md5('123456') // e10adc3949ba59abbe56e057f20f883e  
>3,局部引入    
import md5 from 'js-md5';  
使用:this.$md5('123456') // e10adc3949ba59abbe56e057f20f883e  

# 离线使用阿里图标库
>1,在iconfont官网中选择自己需要的图标或者项目中ui上传的图标,点击下载到本地,会生成十个文件  
只需要使用.css,.svg,.eot,.ttf,.woff五个文件,在vue项目中创建文件夹,放入即可     
>2,在main.js进行全局引入.css文件       
>3,使用:i class="iconfont icon-gaojing"  i      

/**
 * @description: 
 * @param {type} 
 * @return: 
 */
# 引入vuex
>1,引入   
npm install vuex --save    
>2,在src目录下创建store目录,并创建index.js     
>3,在index.js引用vue,vuex,并use(Vuex)   
创建state,存储公共状态;创建mutations,用于修改state里属性的方法集合   
>4,导出state,mutations    
>5,在main.js引入index.js,并将其引入到vue实例中   

# 引入vue-treeselect
>1,引入     
npm install --save @riophae/vue-treeselect        
>2使用     
>1),引入组件  
import Treeselect from '@riophae/vue-treeselect'  
>2),引入样式  
import '@riophae/vue-treeselect/dist/vue-treeselect.css'   
>3,介绍:vue-treeselect是一个多选组件，具有对Vue.js的嵌套选项支持。  
1)具有嵌套选项支持的单个和多个选择  
2)模糊匹配  
3)异步搜索  
4)延迟加载（仅在需要时加载深层选项的数据）  
5)键盘支持（使用Arrow Up＆Arrow Down键导航，使用键选择选项Enter等）  
6)丰富的选项和高度可定制  
7)支持各种浏览器  

# 引入font-awesome
>1,引入     
npm install --save font-awesome        
>2,在main.js进行全局引入      
import 'font-awesome/css/font-awesome.css'    
>3,使用  
i class="fa fa-name"  i

# 设置ico
>在webpack.dev.conf.js,webpack.prod.conf.js文件的HtmlWebpackPlugin,添加  
favicon:'./simple.ico'    

# 引入crypto-js
>1,引入     
npm install crypto-js --save-dev        
>2,在使用的地方引入     
import CryptoJS from "crypto-js";      
>3,使用  
>4,说明  
登陆的时候需要记住密码,这个时候需要前端进行加密  

# 引入vue-qr(功能强大,设置中间logo,背景色,背景图片,码颜色等,值得拥有)  
>1,引入     
npm install vue-qr --save        
>2,在使用的地方引入       
import QRCode from 'vue-qr';    
components: {VueQr} 
>3,详情(https://www.npmjs.com/package/vue-qr)    
>4,说明  
text	欲编码的内容
correctLevel	容错级别 0-3
size	尺寸, 长宽一致, 包含外边距
margin	二维码图像的外边距, 默认 20px
colorDark	实点的颜色
colorLight	空白区的颜色
bgSrc	欲嵌入的背景图地址
gifBgSrc	欲嵌入的背景图 gif 地址,设置后普通的背景图将失效。设置此选项会影响性能
backgroundColor  背景色
backgroundDimming	 叠加在背景图上的颜色, 在解码有难度的时有一定帮助
logoSrc	 嵌入至二维码中心的 LOGO 地址
logoScale 用于计算 LOGO 大小的值, 过大将导致解码失败, LOGO 尺寸计算公式 logoScale*(size-2*margin), 默认 0.2
logoMargin	 LOGO 标识周围的空白边框, 默认为0
logoBackgroundColor	背景色,需要设置 logo margin
logoCornerRadius	标识及其边框的圆角半径, 默认为0
whiteMargin	若设为 true, 背景图外将绘制白色边框
dotScale	数据区域点缩小比例,默认为0.35
autoColor	 若为 true, 背景图的主要颜色将作为实点的颜色, 即 colorDark,默认 true
binarize	 图像将被二值化处理, 未指定阈值则使用默认值
binarizeThreshold	 (0 < threshold < 255) 二值化处理的阈值
callback	 生成的二维码 Data URI 可以在回调中取得,第一个参数为二维码 data URL, 第二个参数为 props 传过来的 qid(因为二维码生成是异步的,所以加个 id 用于排序)
bindElement	 指定是否需要自动将生成的二维码绑定到HTML上, 默认是TRUE





