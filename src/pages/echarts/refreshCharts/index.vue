<!--
 * @Author: wuchen
 * @Date: 2021-04-07 10:44:05
 * @LastEditors: wuchen
 * @LastEditTime: 2021-04-07 10:59:57
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
  <div id="main" style="height:300px;"></div>
</template>
<script>
 var echarts = require('echarts');
  export default {
    mounted() {
      var myChart = echarts.init(document.getElementById('main'));
      var date = [];
      var randomData = [];
      for (var i = 0; i < 30; i++) {
        date.push('第' + (i + 1) + '天');
        randomData.push(Math.floor(Math.random() * 100));
      }
      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          type: 'category',
          data: date
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: randomData,
          type: 'line'
        }]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      var len = date.length;
      setInterval(function () {
        randomData.push(Math.floor(Math.random() * 100));
        randomData.shift();
        date.push(len++);
        date.shift();
        myChart.setOption({
          xAxis: {
            data: date
          },
          series: [{
            data: randomData
          }]
        });
      }, 2000)
    }
  }
</script>
