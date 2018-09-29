<template>
    <div>这是测试路由传参的页面</div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    mounted(){
        console.log('params',this.$route.params)
        console.log('query',this.$route.query)
    }
}
</script>

