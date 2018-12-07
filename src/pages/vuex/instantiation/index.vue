
<template>
    <div>
        <!-- 
            总结:
            1,在插值表达式{{}}中使用state的状态amount时,写法时:{{$store.state.amount}};
            2,如果需要修改这个amount属性的状态值,就需要使用$store的commit方法:$store.commit('add'),$store.commit('reduce')
            说明:commit()方法接收两个参数:第一个参数时mutations里的方法名,如add和reduce;并且需要注意的是:
            mutations中的方法名可以随便起,但在组件中用commit()方法调用时,必须与mutations的方法名一一对应
            比如:我想点击按钮,达到amount++的效果,因为mutations中的方法是add,所以在调用时,commit()方法
            的第一个参数就是add;
            3,如果不想加1,想加2,加10,加100,或者自定义
            这就要用到commit()的第二个参数payload,payload可以翻译成负载,简单来说就是传参,类型可以是
            String,Object,Number,Function,Array,Boolean,具体的看实际应用,例如我想加5,那么在组件可以改成:
            <button @click="$store.commit('add',5)">+</button>,即在mutations写:add(state,n){state.amount +=n}

         -->
         <!-- 方法1 直接在标签内使用 -->
        <!-- <p>方法1, {{$store.state.amount}}</p> -->

        <!-- 方法2 使用计算属性 -->
        <!-- <p>方法2, {{amount}}</p> -->

        <!-- 方法3 使用vuex的mapState方法来获取vuex的state对象中属性 两个写法-->
        <!-- 写法1 -->
        <!-- <p>方法3-写法1, {{amount}}</p>
        <el-button type="success" @click="$store.commit('add')">+</el-button>
        <el-button type="warn" @click="reduceNumber">-</el-button> -->


        <!-- mapMutations的使用方法  使用和mapState类似,主要使用数组形式 -->
        <!-- 如果需要传参数的话,直接在函数加上即可 -->
        <p>4,mapMutations {{amount}}</p>
        <el-button type="warning" @click="add(5)">加</el-button>
        <el-button type="success" @click="reduce">减</el-button>
        
    </div>
</template>

<script>
// import store from '@/store'//方法1,2
import {mapState,mapMutations} from 'vuex';//方法3
export default {
    methods:{
        // 1,2,3
        // reduceNumber(){
        //     return this.$store.commit('reduce')
        // },
        // 4
        ...mapMutations(['add','reduce'])
    },
    computed:{
        // 方法2
        // amount(){
        //     // 因为store在main.js全局引入了,所以就可以使用this.$store来调用,其中this代表Vue
        //     //的实例.不可省略
        //     return this.$store.state.amount;
        // },

        // 方法3-写法1
        // 用对象的形式获取
        ...mapState({
            amount:state => state.amount//使用es6的箭头函数给amount赋值
        }),
        // 方法3-写法2
        // 用数组的形式获取
        ...mapState(['amount'])
    }

}
</script>

