<!--
 * @Author: wuchen
 * @Date: 2021-12-06 16:03:13
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-06 17:13:21
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div>
        <component :is="currentComponent" @changeView="changeView" :componentData="componentData"></component>
    </div>
</template>
<script>
import List from './list';
import Add from './add';
export default {
    components: {
        List, Add
    },
    data() {
        return {
          currentComponent: 'List',//当前组件
          componentData: {},//点击当前行数据
        }
    },
    methods: {
       changeView(view,item){
           this.currentComponent = view;
           this.componentData = item;
       } 
    },
    mounted () {
        console.log('父组件');
    }
}
</script>