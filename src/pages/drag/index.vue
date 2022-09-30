<!--
 * @Author: wuchen
 * @Date: 2022-08-02 11:18:33
 * @LastEditors: wuchen
 * @LastEditTime: 2022-08-02 13:50:39
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        mounted() {
            let div = document.querySelector('div')
            let x, y
            let fn = function(e) {
                console.log('eeeeeeeeeeeeeeee',e.clientX - x,document.documentElement.clientWidth - div.offsetWidth - 30,document.documentElement.clientWidth - div.offsetWidth + 'px')
                div.style.left = e.clientX - x + 'px'
                div.style.top = e.clientY - y + 'px'
                if (e.clientX - x < 30) {
                    div.style.left = 0
                }
                if (e.clientY - y < 30) {
                    div.style.top = 0
                }
                if (e.clientX - x > document.documentElement.clientWidth - div.offsetWidth - 30) {
                    div.style.left = document.documentElement.clientWidth - div.offsetWidth + 'px'
                }
                if (e.clientY - y > document.documentElement.clientHeight - div.offsetHeight - 30) {
                    div.style.top = document.documentElement.clientHeight - div.offsetHeight + 'px'
                }
            }
            div.addEventListener('mousedown', function(e) {
                x = e.offsetX
                y = e.offsetY
                document.addEventListener('mousemove', fn)
            })
            div.addEventListener('mouseup', function() {
                document.removeEventListener('mousemove', fn)
            })
        }
    }
</script>
<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    div {
        width: 60px;
        height: 60px;
        background-color: coral;
        border-radius: 20%;
        position: absolute;
        border: 6px solid skyblue;
        left: 0;
        top: 0;
    }
</style>