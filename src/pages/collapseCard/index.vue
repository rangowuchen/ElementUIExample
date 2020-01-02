<!--
 * @Author: wuchen
 * @Date: 2019-12-17 16:35:26
 * @LastEditors  : wuchen
 * @LastEditTime : 2019-12-18 11:50:04
 * @Description: 
 * @Email: rangowu@163.com
 -->
<template>
  <div>
    <el-card class="box-card" v-for="(item) in baseData" :key="item.id">
      <div slot="header" class="clearfix">
        <span>参数名称:这是卡片</span>
        <span>参数描述:这是树洞树洞</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="test(item)">
          <span v-if="!item.openFlag">展开</span>
          <span v-else>收缩</span>
        </el-button>
      </div>
      <div v-if="item.openFlag" ref="liCon" v-for="o in 4" :key="o" class="text item cardContent">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
    <!-- <div class="newslist">
      <ul>
        <li v-for="(item,index) in baseData" :key="index">
          <p class="p" ref="liCon">{{item.name}}</p>
          <div class="open" @click="open(item,index)">
            <div v-if="!item.openFlag">【展开】</div>
            <div v-else>【收缩】</div>
          </div>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import Vue from 'vue';
  export default {
    data() {
      return {
        liConHeight: 50, // 两行文字的高度
        baseData: [{
            name: 'haha',
            id: 1,
            openFlag:false
          },
          {
            name: 'huhu',
            id: 2,
            openFlag:false
          },
          {
            name: 'hoho',
            id: 3,
            openFlag:false
          },
          {
            name: 'hehe',
            id: 4,
            openFlag:false
          }
        ],
        lala: false,
      };
    },
    methods: {
      test(item) {
        console.log(item);
        if (!item.openFlag) {
          Vue.set(item, 'openFlag', true)
        } else {
          Vue.set(item, 'openFlag', false)
        }
      },
      open(item, i) {
        const liCon = this.$refs.liCon[i]
        var height = liCon.offsetHeight
        if (height === this.liConHeight) { // 展开
          liCon.style.height = 'auto'
          height = liCon.offsetHeight
          liCon.style.height = this.liConHeight + 'px'
          var f = document.body.offsetHeight // 必加
          liCon.style.height = height + 'px'
        } else { // 收缩
          liCon.style.height = this.liConHeight + 'px'
        }
        if (!item.openFlag) {
          Vue.set(item, 'openFlag', true)
        } else {
          Vue.set(item, 'openFlag', false)
        }
      }
    }
  };
</script>

<style>
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 480px;
  }
  .newslist ul li p {
    font-size: 14px;
    color: #555;
    line-height: 25px;
    height: 50px;
    overflow: hidden;
    transition: height .3s;
  }
  .cardContent{
    transition: .3s;
  }
</style>