<!--
 * @Author: wuchen
 * @Date: 2021-12-14 15:14:00
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-17 17:21:47
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div>
        <div></div>
        <btn-water></btn-water>
        <btn-reflect></btn-reflect>
        <br><br><br><br><br><br>

        <words style="background:black;"></words>

        <clip-path style="background:black;"></clip-path>
    </div>
</template>
<script>
import BtnWater from './Button/water';
import BtnReflect from './Button/reflect';
import ClipPath from './ClipPath'
import Words from './words';
    export default {
        components: {BtnWater,BtnReflect,Words,ClipPath},
        data() {
            return {}
        },
        mounted() {
        },
    }
</script>
<style lang="scss" scoped>
    
</style>
