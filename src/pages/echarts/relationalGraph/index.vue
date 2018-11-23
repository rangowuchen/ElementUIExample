/*
 * @Author: wuchen
 * @Date: 2018-10-26 09:39:44
 * @LastEditors: wuchen
 * @LastEditTime: 2018-10-26 10:10:53
 * @Description: echarts-关系拓扑图
 * @Email: wuchen
 */
 <template>
    <div id="main"></div>
</template>

 <script>
var echarts = require("echarts");
export default {
  data() {
    return {};
  },
  methods: {
    // 折线图
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      myChart.setOption({
        title: {
          text: ""
        },
        tooltip: {},
        // animationDurationUpdate: 10,
        // animationEasingUpdate: 'quinticInOut',
        animationEasing: "elasticOut",
        animationDelayUpdate: function(idx) {
          return idx * 1;
        },
        grid: {
          y: "0",
          y2: "0",
          x: "0",
          x2: "0"
        },
        xAxis: {
          type: "value",
          position: "top"
        },
        yAxis: {
          inverse: true,
          type: "value"
        },
        silent: true,
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            roam: true,
            focusNodeAdjacency: true,
            label: {
              normal: {
                show: true,
                position: "top",
                fontSize: 20
              }
            },
            legend: {
              left: "left",
              data: ["h1", "h2", "h3"]
            },
            edgeSymbol: ["circle", "circle"],
            edgeSymbolSize: [1, 1],
            edgeLabel: {
              normal: {
                show: false
              },
              emphasis: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            animationDelay: function(idx) {
              return idx * 300;
            },
            force: {
              edgeLength: 5,
              repulsion: 20,
              gravity: 0.2
            },
            //节点信息
            data: [
              {
                name: "111",
                value: 0,
                label: {
                  normal: {
                    show: true,
                    position: "bottom",
                    fontSize: "12"
                  }
                },
                symbol: "image://http://oow60tecr.bkt.clouddn.com/firewall.png",
                symbolSize: [40, 40],
                x: 300,
                y: 120
              },
              {
                name: "222",
                value: 1,
                label: {
                  normal: {
                    show: true,
                    position: "top",
                    fontSize: "12"
                  }
                },
                symbol: "image://http://oow60tecr.bkt.clouddn.com/firewall.png",
                symbolSize: [40, 40],
                x: 300,
                y: 120
              }
            ],
            links: [],
            lineStyle: {
              normal: {
                show: true,
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "red"
                    },
                    {
                      offset: 1,
                      color: "blue"
                    }
                  ],
                  globalCoord: false
                }
              },
              emphasis: {
                color: "red",
                width: 3,
                type: "dashed"
              }
            },
            tooltip: {
              position: "bottom",
              backgroundColor: "green",
              textStyle: {
                fontSize: 18
              }
            }
          }
        ]
      });
    }
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
#main {
  width: 100%;
  height: 360px;
}
</style>