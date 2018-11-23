/*
 * @Author: wuchen
 * @Date: 2018-09-30 10:36:31
 * @LastEditors: wuchen
 * @LastEditTime: 2018-10-26 09:56:12
 * @Description: 折线图
 * @Email: rangowu@163.com
 */
 <template>
    <div id="main"></div>
</template>

 <script>
 var echarts = require('echarts');
export default {
  data() {
    return {
        line1:[0,0,0,0,0,110,0,0,0,0,0,0],
        line2:[0,0,0,0,80,0,0,0,0,0,0,0]
    };
  },
  methods: {
      // 折线图
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById("main"));
        myChart.setOption({
          title: {
            text: "已有数/新增数量",
            top: "10",
            left: 30,
            textStyle: {
              color: "#14b414",
              fontSize: "16",
              fontWeight: "400"
            }
          },
          color: ["#ffd200", "#14b414"],
          tooltip: {
            trigger: "axis"
          },
          legend: {
            data: ["已有数", "新增数"],
            top: "30",
            left: 30
          },
          grid: {
            left: "3%",
            right: "6%",
            bottom: "3%",
            top: "80px",
            containLabel: true
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            name: "月份",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          },
          yAxis: {
            type: "value",
            name: "数量"
          },
          series: [{
              name: "已有数",
              type: "line",
              // stack: '总量',//stack相同就是数值叠加,去除这个属性或者给不同的值即可消除
              data: this.line1,
              smooth: true,
              itemStyle: {
                normal: {
                  areaStyle: {
                    type: "default"
                  }
                }
              }
            },
            {
              name: "新增数",
              type: "line",
              // stack: '总量',
              data: this.line2,
              smooth: true,
              itemStyle: {
                normal: {
                  areaStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: "#333"
                        },
                        {
                          offset: 0.5,
                          color: "pink"
                        },
                        {
                          offset: 1,
                          color: "#fff"
                        }
                      ])
                    }
                  }
                }
              }
            }
          ]
        });
        // return myChart;
      },
  },
  mounted() {
    var drawLine = this.drawLine();
    window.onresize = function temp() {
      drawLine.resize();
    };
  }
};
</script>

<style lang="scss" scoped>
#main{
  width: 100%;
  height: 360px;
}
</style>

 
 
