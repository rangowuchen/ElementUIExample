<template>
    <div class="parent">
        <h3>这里是父组件</h3>
        <button type="button" @click="clickHandler">修改自己文本</button>
        <button type="button" @click="clickHandler2">修改子组件文本</button>
        <div>Test: {{msg}}</div>
        <child></child>



        <hr>
        <el-button type="primary" @click="clickMe">点我</el-button>
        <p>{{msgMe}}</p>

        <hr>
        <p>在组件中使用vue实例的$store方法</p>
        <router-link to="/$store">$store方法</router-link>
    </div>
</template>

<script>
    import store from '@/store'
    import Child from './Child.vue'

    export default {

        computed: {
            msg(){
                return store.state.testMsg;
            },
            msgMe(){
                return store.state.count;
            }
        },
        methods:{
            clickHandler(){
                store.commit('changeTestMsg', '父组件修改自己后的文本')
            },
            clickHandler2(){
                store.commit('changeChildText', '父组件修改子组件后的文本')
            },
            clickMe(){
                store.commit('changeMe', '我变了')
            }
        },
        components:{
            'child': Child
        },
        store,
    }
</script>

<style scoped>
    .parent{
        background-color: #00BBFF;
        height: 400px;
    }
</style>