<template>
    <div>
        <!-- 
            http://greyli.com/css-shake/
            CSShake——元素摇晃特效
            https://elrumordelaluz.github.io/csshake/
         -->
        <div class="shake">shake</div>
        <div class="shake-hard">shake-hard</div>
        <div class="shake-slow">shake-slow</div>
        <div class="shake-little">shake-little</div>
        <div class="shake-horizontal">shake-horizontal</div>
        <div class="shake-vertical">shake-vertical</div>
        <div class="shake-rotate">shake-rotate</div>
        <div class="shake-opacity">shake-opacity</div>
        <div class="shake-crazy">shake-crazy</div>
        <div class="shake-chunk">shake-chunk</div>

        
        <div class="shake-slow shake-constant">shake-constant</div>
        <div class="shake-slow shake-constant shake-constant--hover"><img src="@/assets/lv.gif" alt=""></div>
        <div class="shake-crazy shake-freeze">shake-freeze</div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
div div{
    display: inline-block;
    margin: 20px 80px;
    font-weight: bold;
}
div div:nth-of-type(2n-1){
    color: red;
}
div div:nth-of-type(2n){
    color: blue;
}
</style>


