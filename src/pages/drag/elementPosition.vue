<!--
 * @Author: wuchen
 * @Date: 2022-09-28 14:22:49
 * @LastEditors: wuchen
 * @LastEditTime: 2022-10-10 14:48:47
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div class="contain" ref="contain">
        <div :style="{width: currentX1+'px',height:'100%',background:'darkgray',position:'absolute',left:0,top:0}"></div>
        <div @mousedown="mousedownL" :style="{width: '4px',height:'24px',background:getColor(currentX1),position:'absolute',left:currentX1+'px',top:'-2px',cursor:'col-resize',zIndex:'99',borderRadius:'2px'}"><span class="number">{{currentX1}}</span></div>
        <div @mousedown="mousedownR" :style="{width: '4px',height:'24px',background:getColor(currentX2),position:'absolute',left:currentX2+'px',top:'-2px',cursor:'col-resize',zIndex:'99',borderRadius:'2px'}"><span class="number">{{currentX2}}</span></div>
        <div :style="{width: (containWidth - currentX2)+'px',height:'100%',background:'darkgray',position:'absolute',right:0,top:0}"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentX1: 0,// 左侧滑块起始位置
            currentX2: 100,// 右侧滑块起始位置
            containWidth: 100,// 容器的宽度
        }
    },
    methods: {
        getColor(current) {
            let currentColorPencent = current/this.containWidth * 100;
            if(currentColorPencent == 0) {
                return '#3DA57B'
            }else if(currentColorPencent < 5) {
                return '#8FC9B4'
            }else if(currentColorPencent < 10) {
                return '#E8EC85'
            }else if(currentColorPencent < 15) {
                return '#FFDE94'
            }else if(currentColorPencent < 25) {
                return '#FFA785'
            }else if(currentColorPencent < 50) {
                return '#EC9797'
            }else if(currentColorPencent < 75) {
                return '#CF7070'
            }else{
                return '#9E4B4B'
            }
        },
        // 鼠标按下
        mousedownL(e) {
            let _that = this;
            // 获取元素最左边与浏览器之间的距离
            let aa = e.clientX - _that.currentX1;
            // 获取元素移动后的相关参数
            document.onmousemove = function(e2) {
                e2.preventDefault();
                // 获取元素移动后与浏览器的距离 - 元素最左边与浏览器之间的距离
                let left = e2.clientX - aa;
                if(left < 0) {
                    _that.currentX1 = 0;
                }else if(left > _that.containWidth) {
                    _that.currentX1 = _that.containWidth;
                }else {
                    _that.currentX1 = left;
                }
            }
            // 鼠标松开移除事件
            document.onmouseup = function() {
                document.onmousedown = null;
                document.onmousemove = null;
                document.onmouseup = null;
            }
        },
        mousedownR(e) {
            let _that = this;
            // 获取元素最左边与浏览器之间的距离
            let aa = e.clientX - _that.currentX2;
            // 获取元素移动后的相关参数
            document.onmousemove = function(e2) {
                e2.preventDefault();
                // 获取元素移动后与浏览器的距离 - 元素最左边与浏览器之间的距离
                let left = e2.clientX - aa;
                // 右边的滑块不能小于左边的滑块
                if(left < _that.currentX1) {
                    _that.currentX2 = _that.currentX1;
                }else if(left > _that.containWidth) {
                    _that.currentX2 = _that.containWidth;
                }else {
                    _that.currentX2 = left;
                }
            }
            // 鼠标松开移除事件
            document.onmouseup = function() {
                document.onmousedown = null;
                document.onmousemove = null;
                document.onmouseup = null;
            }
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .contain {
        width: 100px;
        height: 20px;
        background: linear-gradient(to right,#3DA57B 0%,#8FC9B4 5%,#E8EC85 10%,#FFDE94 15%,#FFA785 25%,#EC9797 50%,#CF7070 75%,#9E4B4B);
        position: relative;
        margin: 20px 100px;
        .number {
            position: absolute;
            top: -15px;
            left: 0;
            color: #666;
            font-size: 13px;
            font-weight: 600;
        }
    }
</style>