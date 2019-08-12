<!--
 * @Author: wuchen
 * @Date: 2019-08-12 16:47:56
 * @LastEditors: wuchen
 * @LastEditTime: 2019-08-12 18:03:16
 * @Description: https://baijiahao.baidu.com/s?id=1618794879569468435&wfr=spider&for=pc
 * 点击按钮使用dispatch来提交actions,actions提交mutation函数,mutation改变state
 * @Email: rangowu@163.com
 -->
<template>
    <div>
        <!-- state -->
        <h2>使用原始方法获取count的值:{{this.$store.state.count}}</h2>
        <!-- 上面的写法很长可以通过mapState -->
        <h2>使用mapState来获取count的值:{{count1}}</h2>
        <!-- getters -->
        <h2>从getters获取记算后的值:{{this.$store.getters.getStateCount}}</h2>

        <h2>count的值:{{this.$store.state.count}}</h2>
        <el-button @click="addFun">+</el-button>
        <el-button @click="reductionFun">-</el-button>
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'; 
export default {
    data(){
        return{}
    },
    computed:{
        // ... 对象的扩展符
        ...mapState({
            count1:state=>state.count
        })
    },
    methods:{
        addFun(){
            //this.$store.commit('add');
            this.$store.dispatch('addFun');
        },
        reductionFun(){
            //this.$store.commit('reduction')
            var n = 10
            this.$store.dispatch('reductionFun',n);
        }
    }
}
</script>