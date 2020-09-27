<!--
 * @Author: wuchen
 * @Date: 2020-06-30 20:09:07
 * @LastEditors: wuchen
 * @LastEditTime: 2020-06-30 20:26:56
 * @Description: 
 * @Email: rangowu@163.com
--> 
<template>
    <div>
        <div style="height:600px;" class="step">
            <el-button class="stepBtn"  @click="jump('1')" icon="el-icon-edit-outline" circle></el-button> 指标1<br>
            <el-button class="stepBtn"  @click="jump('2')" icon="el-icon-edit-outline" circle></el-button> 指标1 <br>
            <el-button class="stepBtn"  @click="jump('3')" icon="el-icon-edit-outline" circle></el-button> 指标1 <br>
            <el-button class="stepBtn"  @click="jump('4')" icon="el-icon-edit-outline" circle></el-button> 指标1 <br>
            <el-button class="stepBtn"  @click="jump('5')" icon="el-icon-edit-outline" circle></el-button> 指标1 <br>
        </div>
        <div class="right">
            <div id="1"></div>
            <div id="2"></div>
            <div id="3"></div>
            <div id="4"></div>
            <div id="5"></div>
        </div>
    </div>
</template>


<script>
export default {
    methods:{
        jump(domId){
            // 当前窗口正中心位置到指定dom位置的距离

            //页面滚动了的距离
            let height = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; 
            
            //指定dom到页面顶端的距离
            let dom = document.getElementById(domId);
            let domHeight = dom.offsetTop+60;
            
            //滚动距离计算
            var S = Number(height) - Number(domHeight);

            //判断上滚还是下滚
            if(S<0){
                //下滚
                S = Math.abs(S);
                window.scrollBy({ top: S, behavior: "smooth" });
            }else if(S==0){
                //不滚
                window.scrollBy({ top: 0, behavior: "smooth" });
            }else{
                //上滚
                S = -S
                window.scrollBy({ top: S, behavior: "smooth" });
            }
        }
    }
}
</script>

<style scoped lang='scss'>
.step{
    font-family: "Helvetica Neue";
    width: 200px;
    float: left;
    position: fixed;
    top: 0;
}
.right{
    width: 400px;
    float: right;
    div{
        height: 600px;
        width: 100%;
        border: 1px solid blue;
    }
}
.stepBtn{
    margin-bottom: 15px;
}
</style>