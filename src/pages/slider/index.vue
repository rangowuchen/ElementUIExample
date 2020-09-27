<!--
 * @Author: wuchen
 * @Date: 2020-09-14 15:02:37
 * @LastEditors: wuchen
 * @LastEditTime: 2020-09-14 15:08:49
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div id="app">
        <nav>
            <p v-for="(item,index) in arr" @click="toggle(index)" :class="{active:index==active}" :key="index">{{item}}</p>
        </nav>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                active: 0,
                arr: ["新闻", "视频", "社会", "军事", "热点", "娱乐", "推荐", "地方"]
            };
        },
        methods: {
            toggle(index) {
                this.active = index;
            }
        }
    }
</script>
<style lang="scss" scoped>
    #app {
        width: 100%;
        overflow: hidden;
    }
    #app nav {
        padding: 0 10px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: middle;
        -ms-flex-align: middle;
        align-items: middle;
        overflow: auto;
    }
    #app p {
        text-align: center;
        font-size: 16px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        padding: 10px;
        margin: 5px;
    }
    #app p.active {
        color: #ffff00;
        background-color: #000000;
    }
</style>