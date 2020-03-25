<!--
 * @Author: wuchen
 * @Date: 2020-03-17 16:36:34
 * @LastEditors: wuchen
 * @LastEditTime: 2020-03-25 11:35:14
 * @Description: https://www.jianshu.com/p/bc103eb4983c
 * @Email: rangowu@163.com
 -->
<template>
    <div>
        <el-button @click="test">测试1</el-button>
        <el-button @click="test">测试2</el-button>
    </div>
</template>

<script>
import Worker from './aa.worker.js'
export default {
    data(){
        return{

        }
    },
    methods:{
        test(){
            var worker = new Worker();
            // 1,页面发送信息
            let data = {
                name:'rango',
                desc:'这是一个描述'
            }
            worker.postMessage(data);
            // 4,接收数据
            worker.onmessage = function(event){
                console.log('4,页面接收worker的数据,并进行具体的操作',event)
            }
        }
    }
}
</script>