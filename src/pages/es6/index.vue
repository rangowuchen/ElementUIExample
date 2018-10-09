/*
 * @Author: wuchen
 * @Date: 2018-10-09 18:59:57
 * @LastEditors: wuchen
 * @LastEditTime: 2018-10-09 19:01:46
 * @Description: es6
 * @Email: rangowu@163.com
 */
<template>
    <div>

    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.haha();
    },
    methods:{
        haha(){
            const set = new Set([1,2,3,4,5,6,6,6]);
            [...set];
            console.log('set',set)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>



 
