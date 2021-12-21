<!--
 * @Author: wuchen
 * @Date: 2021-12-16 11:10:20
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-17 17:24:02
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div>
        <p>
            <span id="n">n</span>
            <span id="e">e</span>
            <span id="o">o</span>
            <span id="n2">n</span>
        </p>
    </div>
</template>
<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Warnes&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
    :root {
        --color: #42fff6
    }
    body {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000000;
    }
    p {
        background: none;
        color: #999;
        font-family: 'Dancing Script', 'Warnes', cursive;
        font-size: 200px;
        letter-spacing: -26px;
        cursor: pointer;
        margin: 0;
    }
    p:hover span {
        animation: flicker 1s linear forwards;
    }
    p:hover #e {
        animation-delay: .2s;
    }
    p:hover #o {
        animation-delay: .5s;
    }
    p:hover #n2 {
        animation-delay: .6s;
    }
    @keyframes flicker {
        0% {
            color: #333;
        }
        5%,
        15%,
        25%,
        30%,
        100% {
            color: #fff;
            text-shadow: 0px 0px 5px #42fff6, 0px 0px 10px #42fff6, 0px 0px 20px #42fff6, 0px 0px 50px #42fff6;
        }
        10%,
        20% {
            color: #333;
            text-shadow: none;
        }
    }
</style>

