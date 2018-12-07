<template>
    <div class="child">
        <h3>这里是子组件</h3>
        <div>childText: {{msg}}</div>
        <button type="button" @click="clickHandler">修改父组件文本</button>
        <button type="button" @click="clickHandler2">修改自己文本</button>
    </div>
</template>

<script>
    import store from '@/store'
    export default {
        name: "Child",
        computed:{
            msg(){
                return store.state.childText;
            }
        },
        methods: {
            clickHandler(){
                store.commit("changeTestMsg", "子组件修改父组件后的文本");
            },
            clickHandler2(){
                store.commit("changeChildText", "子组件修改自己后的文本");
            }
        },
        store
    }
</script>

<style scoped>
    .child{
        background-color: palegreen;
        border:1px solid black;
        height:200px;
        margin:10px;
    }
</style>