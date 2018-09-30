/*
 * @Author: wuchen
 * @Date: 2018-09-30 14:13:21
 * @LastEditors: wuchen
 * @LastEditTime: 2018-09-30 14:37:04
 * @Description: 柱状图
 * @Email: rangowu@163.com
 */

<template>
    <div>
        <div id='myChart2' style="height:360px;"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      aaaa: [
        {
          name: "3.11",
          value: "101180"
        },
        {
          name: "3.18",
          value: 119187.8
        },
        {
          name: "3.25",
          value: 114171
        },
        {
          name: "4.1",
          value: 116180
        },
        {
          name: "4.8",
          value: 117166
        },
        {
          name: "4.15",
          value: 115180
        },
        {
          name: "4.22",
          value: 218180
        }
      ]
    };
  },
  methods: {
    barCharts() {
      var that = this;
      let myChart = that.$echarts.init(document.getElementById("myChart2"));
      var myBgColor = [
        "#1890FF",
        "#1890FF",
        "#1890FF",
        "#1890FF",
        "#1890FF",
        "#1890FF",
        "red"
      ];
      var xData = [];
      var yData = [];
      that.aaaa.map(function(a, b) {
        xData.push(a.name);
        yData.push(a.value);
      });
      myChart.setOption({
        backgroundColor: "#fff",
        title: {
          text: "近七周GMV",
          x: "center",
          y: "2%",
          textStyle: {
            color: "#333",
            fontSize: "15"
          },
          subtextStyle: {
            color: "#90979c",
            fontSize: "16"
          }
        },
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            lineStyle: {
              opacity: 0
            }
          },
          formatter: function(prams) {
            return prams[0].data;
          }
        },
        legend: {
          data: ["直接访问", "背景"],
          show: false
        },
        grid: {
          borderWidth: 0,
          top: 30,
          bottom: 10,
          left: 10,
          textStyle: {
            color: "#fff"
          },
          containLabel: true,
          z: 22
        },
        xAxis: [
          {
            type: "category",
            gridIndex: 0,
            data: xData,
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                type: "dotted",
                color: "rgba(0,0,0,0.65)"
              }
            },
            axisLabel: {
              show: true,
              color: "rgb(0,0,0)",
              fontSize: 12
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            gridIndex: 0,
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                type: "dotted",
                color: "rgba(0,0,0,0.65)"
              }
            },
            axisLabel: {
              // color: 'rgb(170,170,170)',
              color: "rgb(0,0,0)",
              formatter: "{value}"
            }
          },
          {
            type: "value",
            gridIndex: 0,
            splitNumber: 12,
            // 横线
            splitLine: {
              show: true,
              lineStyle: {
                type: "dotted",
                color: "#E8E8E8"
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            // 横线颜色以及透明度
            splitArea: {
              show: false
              // areaStyle: {
              //     color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.3)']
              // }
            }
          }
        ],
        series: [
          {
            name: "GMV",
            type: "bar",
            barWidth: "30%",
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                // color: {
                //     type: 'LinearGradient',
                //     x: 0,
                //     y: 0,
                //     x2: 0,
                //     y2: 1,
                //     colorStops: [{
                //             offset: 0,
                //             color: '#00feff'
                //         },
                //         {
                //             offset: 0.5,
                //             color: '#027eff'
                //         },
                //         {
                //             offset: 1,
                //             color: '#0286ff'
                //         }
                //     ],
                //     globalCoord: false // 缺省为 false
                // }
                // 各个柱状图的颜色设置
                color: function(params) {
                  var num = myBgColor.length;
                  return myBgColor[params.dataIndex % num];
                }
              }
            },
            data: yData,
            zlevel: 11
            // markPoint: {
            //     data: [{
            //         name: '最大值',
            //         type: 'max',
            //         valueIndex: 0,
            //     }],
            // },
          },
          {
            name: "背景",
            type: "bar",
            barWidth: "50%",
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: "-135%",
            data: yData,
            // 柱子的文字，柱子的外圈
            itemStyle: {
              normal: {
                color: "rgba(255,255,255,0.6)",
                barBorderRadius: 0,
                label: {
                  show: true,
                  color: "rgba(0,0,0,0.6)",
                  position: "top",
                  formatter: function(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }
              }
            },
            zlevel: 9
          }
        ]
      });
      return myChart;
    }
  },
  mounted: function() {
    var barCharts = this.barCharts();
    window.onresize = function temp() {
      barCharts.resize();
    };
  }
};
</script>

<style lang="scss" scoped>
#myChart2 {
  width: 50%;
}
</style>


