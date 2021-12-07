<!--
 * @Author: wuchen
 * @Date: 2021-12-07 15:18:01
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-07 16:16:50
 * @Description: 
 * 1,数据对象（data）在内部会进行递归合并，在和组件的数据发生冲突时以组件数据优先。
 * 2,同名钩子函数（created,mounted...）将混合为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
 * 3,值为对象的选项（methods, components 和 directives）将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。
 * @Email: rangowu@163.com
-->
<template>
    <div>{{user}}--{{age}}</div>
</template>
<script>
import mixinData from './mixin.js';
export default {
    mixins: [mixinData],
    data () {
        return {
            user: '呼呼呼',
        }
    },
    mounted () {
        console.log('这是页面中打印:' + this.user);
    }
}
</script>