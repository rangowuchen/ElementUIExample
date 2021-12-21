<!--
 * @Author: wuchen
 * @Date: 2021-12-16 10:47:42
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-16 10:49:49
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div>
        <p>Neon</p>
        <p class="hover">Neon</p>
    </div>
</template>
<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Reggae+One&display=swap');
    html,
    body {
        font-family: 'Reggae One', CenturyGothic, "AppleGothic", sans-serif;
        display: flex;
        width: 100%;
        height: 100%;
        background: #000;
    }
    p {
        font-size: 14vmin;
        margin: auto;
        color: #fff;
        text-shadow: 0 0 10px #0ebeff, 0 0 20px #0ebeff, 0 0 50px #0ebeff, 0 0 100px #0ebeff, 0 0 200px #0ebeff;
    }
    .hover {
        text-shadow: unset;
        transition: .2s;
        cursor: pointer;
        &:hover {
            text-shadow: 0 0 10px #0ebeff, 0 0 20px #0ebeff, 0 0 50px #0ebeff, 0 0 100px #0ebeff, 0 0 200px #0ebeff;
        }
    }
</style>
