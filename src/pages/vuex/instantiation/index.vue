
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
        <p>{{$store.state.amount}}</p>
        <el-button type="success" @click="$store.commit('add')">+</el-button>
        <el-button type="warn" @click="$store.commit('reduce')">-</el-button>
    </div>
</template>

<script>
import store from '@/store'
export default {

}
</script>

