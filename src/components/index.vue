<!--
 * @Author: wuchen
 * @Date: 2021-12-15 15:36:47
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-15 15:37:51
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div>
        <cw-button type="success" icon="el-icon-search" :auto-loading="true" @handleClick="submit">搜索</cw-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            submit(done) {
                // 这里供业务组件处理一些事情,比如ajax请求,此处用setTimeout模拟,    执行done()方法消失loading
                setTimeout(() => {
                    done()
                }, 1000)
            }
        }
    }
</script>
