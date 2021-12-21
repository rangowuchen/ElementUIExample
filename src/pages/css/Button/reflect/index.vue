<!--
 * @Author: wuchen
 * @Date: 2021-12-16 10:04:43
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-16 15:18:29
 * @Description: https://juejin.cn/post/6935248489878126628
 * @Email: rangowu@163.com
-->
<template>
    <div style="display:flex">
        <div class="btn">Neon</div>
        <div class="btn btn1">Neon</div>
        <div class="btn btn2">Neon</div>
        <div class="btn btn3">Neon</div>
    </div>
</template>
<style lang="scss" scoped>
    :root {
        --color: #0ebeff;
    }
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: #000;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    @keyframes rotate {
        100% {
            transform: translate(-50%, -50%) rotate(1turn);
        }
    }
    .btn {
        position: relative;
        z-index: 0;
        width: 160px;
        height: 80px;
        line-height: 80px;
        color: #0ebeff;
        font-size: 24px;
        border-radius: 10px;
        text-align: center;
        margin: auto;
        overflow: hidden;
        cursor: pointer;
        transition: .3s;
        -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, .4));
        &:hover {
            color: #fff;
            box-shadow: 0 0 5px #0ebeff, 0 0 25px #0ebeff;
            &::after,
            &::before {
                transition: .3s;
                background: #0ebeff;
            }
        }
        &::before {
            content: '';
            position: absolute;
            z-index: -2;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 150%;
            height: 300%;
            background-color: #000;
            background-repeat: no-repeat;
            background-size: 50% 50%;
            background-position: 0 0;
            background-image: conic-gradient(#0ebeff, #0ebeff);
            animation: rotate 2s linear infinite;
        }
        &::after {
            content: '';
            position: absolute;
            z-index: -1;
            left: 2px;
            top: 2px;
            width: calc(100% - 4px);
            height: calc(100% - 4px);
            background: #000;
            border-radius: 10px;
        }
    }
    .btn1 {
        filter: hue-rotate(180deg);
    }
    .btn2 {
        filter: hue-rotate(270deg);
    }
    .btn3 {
        filter: hue-rotate(90deg);
    }
</style>
