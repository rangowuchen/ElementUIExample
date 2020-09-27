<!--
 * @Author: wuchen
 * @Date: 2020-07-25 13:22:33
 * @LastEditors: wuchen
 * @LastEditTime: 2020-07-25 13:52:37
 * @Description: 
 * @Email: rangowu@163.com
--> 
<template>
    <div>
        <div class="img imgAnimation"> <img class="" src="@/assets/logo.png" /></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                show: false
            }
        },
        mounted() {
            this.show = true;
        }
    }
</script>
<style lang="scss" scoped>
    .imgAnimation {
        animation-name: imgAnimation;
        animation: imgAnimation 2s alternate;
        -webkit-animation: imgAnimation 2s alternate;
        -moz-animation: imgAnimation 2s alternate infinite;
        animation-fill-mode: forwards;
    }
    @keyframes imgAnimation {
        0% {
            // left: -198px;
            // top: 500px;
            transform: translate(200px,0)
        }
        100% {
            // top: 50px;
            // left: 50%;
            // margin-left: -95px;
             transform: translate(260px,0)
        }
    }
</style>
