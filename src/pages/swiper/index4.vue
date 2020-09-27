<!--
 * @Author: wuchen
 * @Date: 2020-07-14 11:45:12
 * @LastEditors: wuchen
 * @LastEditTime: 2020-07-14 12:56:02
 * @Description: 
 * @Email: rangowu@163.com
--> 
<template>
    <div class="outer">
        <div class="box">
            <ul class="inner" id="inner" :style="{'margin-left': xxx * 100 + 'px'}">
                <li >
                    <!-- <img src="@/assets/logo.png"> -->
                     <el-radio-group v-model="radio">
                         <div v-for="(item, index) in itemlist" :key="index" style="display:inline-block">
                             <el-radio :label="item">{{item}}</el-radio>
                             <img src="@/assets/logo.png">
                         </div>
                        
                    </el-radio-group>
                </li>
                <!-- <li><img src="@/assets/logo.png"></li>
                <li><img src="@/assets/logo.png"></li>
                <li><img src="@/assets/logo.png"></li>
                <li><img src="@/assets/logo.png"></li>
                <li><img src="@/assets/logo.png"></li>
                <li><img src="@/assets/logo.png"></li>
                <li><img src="@/assets/logo.png"></li>
                <li><img src="@/assets/logo.png"></li>
                <li><img src="@/assets/logo.png"></li>
                <li><img src="@/assets/logo.png"></li>
                <li><img src="@/assets/logo.png"></li>
                <li><img src="@/assets/logo.png"></li>
                <li><img src="@/assets/logo.png"></li>
                <li><img src="@/assets/logo.png"></li> -->
            </ul>
        </div>
        <a class="btnLeft" @click="leftmove">左</a>
        <a class="btnRight" @click="rightmove">右</a>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                xxx: 0,
                itemlist:[11,22,33,44,55,66,77,88,99,12,13,14,15],
                radio:11
            }
        },
        methods: {
            leftmove() {
                if (this.xxx < 0) {
                    this.xxx += 1;
                }
            },
            rightmove() {
                if (this.xxx > -(this.itemlist.length + this.xxx)) {
                    this.xxx -= 1;
                }
            },
        }
    }
</script>
<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    img {
        display: block;
        border: none;
    }
    ul,
    li {
        list-style: none;
    }
    a,
    a:hover,
    a:active,
    a:target {
        text-decoration: none;
        color: #000;
    }
    .outer {
        position: relative;
        margin: 0 auto;
        width: 1000px;
        height: 145px;
        overflow: hidden;
        box-shadow: 3px 3px 10px 0 #ccc;
    }
    .inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 5000px;
    }
    .inner li {
        float: left;
        padding: 5px;
    }
    .inner li img {
        width: 209px;
        height: 125px;
    }
    .outer a {
        position: absolute;
        top: 50%;
        margin-top: -22.5px;
        width: 30px;
        height: 45px; // background: url("img/pre.png") no-repeat;
        opacity: 0.3;
        filter: alpha(opacity=30);
    }
    .outer a:hover {
        opacity: 1;
        filter: alpha(opacity=100);
    }
    .outer a.btnLeft {
        left: 20px;
    }
    .outer a.btnRight {
        right: 20px;
        background-position: -50px 0;
    }
    .box {
        width: 880px;
        overflow: hidden;
        height: 240px;
        position: absolute;
        left: 60px;
    }
</style>