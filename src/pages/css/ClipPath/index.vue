<!--
 * @Author: wuchen
 * @Date: 2021-12-17 17:18:34
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-17 17:21:44
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div>
        <div class="g-container">
            <ul>
                <li>11111</li>
                <li>22222</li>
                <li>33333</li>
                <li>44444</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    body,
    html {
        width: 100%;
        height: 100%;
        display: flex;
        background: #303f9f;
    }
    .g-container {
        position: relative;
        width: 400px;
        height: 300px;
        margin: auto;
        overflow: hidden;
        cursor: pointer;
        transition: clip-path .3s linear;
        clip-path: circle(20px at 44px 44px);
        background: #fff;
        &:hover {
            clip-path: circle(460px at 44px 44px);
        }
    }
    ul {
        position: absolute;
        top: 100px;
        line-height: 32px;
        padding-left: 50px;
        font-size: 18px;
        li:hover {
            color: deeppink;
        }
    }
</style>
