<!--
 * @Author: wuchen
 * @Date: 2020-07-01 10:19:23
 * @LastEditors: wuchen
 * @LastEditTime: 2020-07-05 22:40:49
 * @Description: 
 * @Email: rangowu@163.com
--> 
<template>
<div style="width:100%;height:400px;overflow:hidden">
  <div class="sphere_container" ref="content" @scroll="haha">
      <div style="width:100%;height:300px;border:1px solid red"></div>
      <div class="floor floor1"></div>
      <div class="floor floor2"></div>
      <div class="floor floor3"></div>
      <div class="floor floor4"></div>
      <div class="floor floor5"></div>

      <!-- <div v-for="(item,index) in anchorData" :key="index" class="floor" :class="'floor'+(index+1)"></div> -->


    <div class="right_anchor">
      <ul>
        <!-- <li class="dot" @click="anchors(1)">11111</li>
        <li :class="steps == 1?'lines':'no_line'"></li>
        <li class="dot" @click="anchors(2)"></li>
        <li :class="steps == 2?'lines':'no_line'"></li>
        <li class="dot" @click="anchors(3)"></li>
        <li :class="steps == 3?'lines':'no_line'"></li>
        <li class="dot" @click="anchors(4)"></li>
        <li :class="steps == 4?'lines':'no_line'"></li>
        <li class="dot" @click="anchors(5)"></li> -->
        <div v-for="(item,index) in anchorData" :key="index">
            <el-tooltip  effect="light" :content="item.desc" placement="right-start">
                <li class="dot" @click="anchors(index+1)" :class="steps == index?'activeDot':'dot'">
                    <div class="dotDesc">{{item.desc}}</div>
                </li>
            </el-tooltip>
            <li :class="steps == index+1?'lines':'no_line'"></li>
        </div>
        
      </ul>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data () {
    return {
      steps:0,
      scrolltop : 0 ,//滑轮 距顶部的距离
      floor1:0,
      floor2:0,
      floor3:0,
      floor4:0,
      floor5:0,
      // 修改
      anchorData:[
          {
              desc:'服务指标1',
          },{
              desc:'服务指标2'
          },{
              desc:'服务指标3'
          },{
              desc:'服务指标4'
          },{
              desc:'服务指标5'
          }
      ]
    }
  },
  mounted(){
    this.getFloorDistance();
    //this.getPulleyTopDistance();
    this.haha();
  },
  methods:{
    anchors(val){
      switch (val){
        case 1 :
          this.pulleyRoll(this.floor1,this.scrolltop);
          break;
        case 2 :
          this.pulleyRoll(this.floor2,this.scrolltop);
          break;
        case 3 :
          this.pulleyRoll(this.floor3,this.scrolltop);
          break;
        case 4 :
          this.pulleyRoll(this.floor4,this.scrolltop);
          break;
        case 5 :
          this.pulleyRoll(this.floor5,this.scrolltop);
          break;
      }
    },

    /**
     * 滑轮 向上滚动和向下滚动的函数
     * top是楼层距窗体顶部的距离,distance当前滚动条与窗体顶部的距离
     * */
    pulleyRoll(top,distance){
      console.log(top,'ppp',distance)
      /*向下滚动*/
      if(distance < top){
        var small_interval = (top-distance)/50;
        var i = 0;
        var timer = setInterval(()=>{
          i++;
          console.log(distance+= small_interval);
          // document.documentElement.scrollTop = distance;
          document.getElementsByClassName('sphere_container')[0].scrollTop = distance;
          console.log('distance',distance)
          if(i == 50){
            clearInterval(timer);
          }
        },10)
      }
      /*向上滚动*/
      else if(distance > top){
        var small_interval = (distance - top)/50;
        var i = 0;
        var timer = setInterval(()=>{
          i ++;
          console.log(distance -= small_interval);
          // document.documentElement.scrollTop = distance;
          document.getElementsByClassName('sphere_container')[0].scrollTop = distance;
          if(i == 50){
            clearInterval(timer);
          }
        },10);
      }
    },

    /**
     * 拿到所有 楼层距窗体顶部的距离
     * */
    getFloorDistance(){
      //拿到每个 楼层距窗体顶部的距离
      this.floor1 = document.getElementsByClassName("floor1")[0].offsetTop;
      this.floor2 = document.getElementsByClassName('floor2')[0].offsetTop;
      this.floor3 = document.getElementsByClassName('floor3')[0].offsetTop;
      this.floor4 = document.getElementsByClassName('floor4')[0].offsetTop;
      this.floor5 = document.getElementsByClassName('floor5')[0].offsetTop;
    },

    /**
     * 滑轮滚动事件 返回滑轮距顶部的距离
     * */
    getPulleyTopDistance(){
      var that = this;
      window.onscroll = function(){
        that.scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
      }
    },
    haha(){
        this.scrolltop = this.$refs.content.scrollTop;
        console.log('uuuuuuuuuuuuuuuuuuuuu',this.scrolltop)
    }
  },
  watch:{
    //监听 滑轮滚动的值的变化 来实现自动锚点
    scrolltop(val){
      console.log('监听 滑轮滚动的值的变化',val)
      val += 0;
      if(val > this.floor1 && val <= this.floor2){
        this.steps = 0;
      } else if(val > this.floor2 && val <= this.floor3){
        this.steps = 1;
        console.log(1)
      }else if(val > this.floor3 && val <= this.floor4){
        this.steps = 2;
        console.log(2)
      }else if(val > this.floor4 && val <= this.floor5){
        this.steps = 3;
        console.log(3)
      }else if(val > this.floor5){
        this.steps = 4;
        console.log(4)
      }
    },
    steps(res){
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './base.scss';
  .sphere_container{
    height: 800px;
    overflow: scroll;
    .floor{
      height: 500px;
    }
    .floor1{
      background: #ff7488;
    }
    .floor2{
      background: #b5ff8a;
    }
    .floor3{
      background: #6db9ff;
    }
    .floor4{
      background: #c277ff;
    }
    .floor5{
      background: #4139ff;
    }

    .no_line{
      width: 2px;
      height: 40px;
      background: none;
      text-align: center;
      border-radius: 0;
      margin: 0 auto;
    }
    .lines{
      width: 2px;
      height: 40px;
      background: #fff;
      text-align: center;
      border-radius: 0;
      margin: 0 auto;
    }

    .right_anchor{
      position: fixed;
      right: 100px;
      top: 30%;
      width: 20px;
      height: 100px;
      z-index: 999;
      ul{
        .dot{
          width: 15px;
          height: 15px;
          border-radius: 100%;
          margin: 0 auto;
          background: #fff;
        }
        .dot{
          cursor: pointer;
        }
        .activeDot{
            background: #1890ff;
            color: #1890ff;
        }
        .dotDesc{
            margin-left:26px;
            white-space:nowrap;
            width:60px;
            text-overflow:ellipsis;
            overflow:hidden;
            font-size:14px;
        }
      }
    }
  }

</style>
