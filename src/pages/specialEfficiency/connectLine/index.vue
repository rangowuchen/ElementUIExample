<!--
 * @Author: wuchen
 * @Date: 2020-07-24 15:12:01
 * @LastEditors: wuchen
 * @LastEditTime: 2020-07-24 20:33:05
 * @Description: 
 * @Email: rangowu@163.com
--> 
<template>
    <div class="contain">
        <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="polygon"
      :particleSize="4"
      linesColor="#FFFFFF"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
.contain{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url(./16.gif) no-repeat;
    // background: black;
    background-size: 100% 100%;
}
</style>