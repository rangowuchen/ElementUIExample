<!--
 * @Author: wuchen
 * @Date: 2019-12-17 16:35:26
 * @LastEditors  : wuchen
 * @LastEditTime : 2020-01-13 17:06:18
 * @Description: 
 * @Email: rangowu@163.com
 -->
<template>
  <div>
    <el-card class="box-card" v-for="(item,index) in baseData" :key="item.id">
      <div slot="header" class="clearfix">
        <span>参数名称:{{item.name}}</span>
        <span>参数描述:这是树洞树洞</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="test(item,index)">
          <span v-if="!item.openFlag"><i class="el-icon-arrow-down"></i></span>
          <span v-else><i style="transform:rotate(90deg);-ms-transform:rotate(90deg);-moz-transform:rotate(90deg);-webkit-transform:rotate(90deg);-o-transform:rotate(90deg);" class="el-icon-arrow-up"></i></span>
        </el-button>
      </div>
      <div v-if="item.openFlag"  class="text item cardContent">
        <span v-for="itemChild in item.children" :key="itemChild.itemId">{{'列表内容 ' + itemChild.itemName }}</span>
      </div>
    </el-card>
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
            openFlag:false,
            children:[
              {
                itemName:'qqq',
                itemId:11
              },
              {
                itemName:'www',
                itemId:12
              },
              {
                itemName:'eee',
                itemId:13
              },
            ]
          },
          {
            name: 'huhu',
            id: 2,
            openFlag:false,
            children:[
              {
                itemName:'aaa',
                itemId:21
              },
              {
                itemName:'sss',
                itemId:22
              },
              {
                itemName:'ddd',
                itemId:23
              },
            ]
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
      test(item,index) {
        console.log(item);
        var aa = document.getElementsByClassName('box-card')[index].style
        if (!item.openFlag) {
          Vue.set(item, 'openFlag', true)
          aa.height = 200 + 'px';
        } else {
          Vue.set(item, 'openFlag', false)
          aa.height = 80 + 'px'
        }
      },
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
    height: 80px;
    transition: height .5s;
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
    max-height: 20px;
    transition: .3s;
  }
</style>