<!--
 * @Author: wuchen
 * @Date: 2020-03-25 16:28:17
 * @LastEditors: wuchen
 * @LastEditTime: 2020-03-28 13:39:35
 * @Description: 将html转化成图片,长按保存是浏览器自带的功能
 * @Email: rangowu@163.com
 -->
<template>
    <div class="container">
        <div class="html-area" ref="bill" v-if="isDom">
            <div class="qr-area">
                <div id="qrcode" class="code">
                    <vue-qr text="http://www.baidu.com" :correctLevel="1" backgroundColor="rgba(255,255,255,1)" :margin='2'></vue-qr>
                </div>
            </div>
        </div>
        <div class="canvas-area" v-else>
            <img :src="canvasImageUrl" alt="">
        </div>
        <el-button class="save-to-img">长按屏幕保存图片</el-button>
    </div>
</template>

<script>
    import VueQr from "vue-qr";
    export default {
        components: {
            VueQr
        },
        data() {
            return {
                isDom: true
            };
        },
        methods: {
            htmlToCanvas() {
                html2canvas(this.$refs.bill, {}).then(canvas => {
                    let imageUrl = canvas.toDataURL("image/png"); // 将canvas转成base64图片格式
                    this.canvasImageUrl = imageUrl;
                    this.isDom = false;
                });
            }
        },
        mounted() {
            setTimeout(() => {
                this.htmlToCanvas();
            }, 200);
        }
    };
</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
        height: 100%;
        position: relative;
        .html-area {
            width: 100%;
            height: 100%;
            background: url('../../assets/img/bg3.jpg') no-repeat;
            background-size: 100% 100%;
            #qrcode {
                img {
                    height: 100px !important;
                    width: 100px !important;
                    margin-top: 40px;
                }
            }
        }
        .save-to-img {
            position: absolute;
            left: calc(50% - 62px);
            bottom: 40px;
        }
    }
</style>