<!--
 * @Author: wuchen
 * @Date: 2021-12-14 15:14:00
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-15 15:41:21
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div>
        <div class="waterButton">
            <div class="good">
                <div class="good_btn" id="waterButton">
                    <img src="../../assets/img/normal.png" alt="">
                </div>
                <span :class="{'good_water-1':btnClick}"></span>
                <span :class="{'good_water-2':btnClick}"></span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                btnClick: false
            }
        },
        mounted() {
            let btn = document.getElementById('waterButton')
            let timer = ''
            btn.addEventListener('click', () => {
                window.clearTimeout(timer)
                this.btnClick = true;
                setTimeout(() => {
                    this.btnClick = false;
                }, 3000)
            })
        },
    }
</script>
<style lang="scss" scoped>
    /** button.css **/
    .waterButton {
        // height: 27rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .good {
        width: 6rem;
        height: 6rem;
        position: relative;
    }
    .good_btn {
        width: 6rem;
        height: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        z-index: 3;
        cursor: pointer;
        box-shadow: .4rem .4rem .8rem #c8d0e7, -.4rem -.4rem .8rem #fff;
    }
    img {
        width: 50%;
        height: 50%;
        z-index: 4;
    }
    .good_water-1,
    .good_water-2 {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        filter: blur(1px);
    }
    .good_water-1 {
        box-shadow: .4rem .4rem .8rem #c8d0e7, -.4rem -.4rem .8rem #fff;
        animation: waves 2s linear infinite;
    }
    .good_water-2 {
        box-shadow: .4rem .4rem .8rem #c8d0e7, -.4rem -.4rem .8rem #fff;
        animation: waves 2s linear 1s infinite;
    }
    @keyframes waves {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
</style>
