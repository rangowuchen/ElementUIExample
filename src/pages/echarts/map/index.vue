<template>
    <div>
        <div id="main" style="height:360px;width:50%;"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      geoCoordMap: {
        '宿州市': [116.97,33.63],
        '淮北市': [116.77,33.97],
        '六安市': [116.49,31.73],
        '合肥市': [117.27,31.86]
      }, //城市经纬度
      drugstoreCity: [
          {
          name:"宿州市",
          value:3
          },
          {
          name:"淮北市",
          value:9
          },
          {
          name:"六安市",
          value:10
          },
          {
          name:"合肥市",
          value:32
          },
      ], //药店城市个数
      categoryData: [],
    };
  },
  methods: {
    convertData(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat("1")
            // value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    },
    map() {
      var data;
      data = this.drugstoreCity;
      let myChart = this.$echarts.init(document.getElementById("main"));
      var count = data.length;
      for (var i = 0; i < data.length; i++) {
        this.categoryData.push(data[i].name);
      }
      // 指定图表的配置项和数据
      myChart.setOption({
        // backgroundColor: '#98d2d4',
        backgroundColor: "#fff",
        animation: true,
        animationDuration: 1000,
        animationEasing: "cubicInOut",
        animationDurationUpdate: 1000,
        animationEasingUpdate: "cubicInOut",
        title: [
              {
              text: '全国药店分布',
              subtext: '',
              x: "center",
              y: 5,
              textStyle: {
                  color: '#333'
              }
          },
          {
            id: "statistic",
            //text: count ? '平均: ' + parseInt((sum / count).toFixed(4)) : '',
            right: 0,
            top: 0,
            width: 100,
            textStyle: {
              color: "#fff",
              fontSize: 16
            }
          }
        ],
        toolbox: {
          iconStyle: {
            normal: {
              borderColor: "#fff"
            },
            emphasis: {
              borderColor: "#b1e4ff"
            }
          },
          feature: {
            /*dataZoom: {},
                            brush: {
                                type: ['rect', 'polygon', 'clear']
                            },*/
            // 点击按钮可保存图片
            // saveAsImage: {
            //     show: false
            // },
            // dataView: {
            //     readOnly: false
            // },
            // restore: {},
          }
        },
        /*brush: {
                        outOfBrush: {
                            color: '#abc'
                        },
                        brushStyle: {
                            borderWidth: 2,
                            color: 'rgba(0,0,0,0.2)',
                            borderColor: 'rgba(0,0,0,0.5)',
                        },
                        seriesIndex: [0, 1],
                        throttleType: 'debounce',
                        throttleDelay: 300,
                        geoIndex: 0
                    },*/
        // 地图颜色分布
        visualMap: {
          show: false,
          min: 0,
          max: 500,
          left: "left",
          top: "bottom",
          text: ["高", "低"], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            color: ["#0f0c29", "#302b63", "#24243e"] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
          }
        },
        geo: {
          map: "china",
          left: "90",
          right: "40%",
          top: "25%",
          bottom: "10%",
          center: [91.98561551896913, 34.205000490896193],
          zoom: 1.4,
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            // 区域颜色
            normal: {
              areaColor: "#EFF0F0",
              borderColor: "#98d2d4"
            },
            // 鼠标浮动的颜色
            emphasis: {
              areaColor: "yellow"
            }
          }
        },
        tooltip: {
          trigger: "item",
          show: false,
          formatter: function(params) {
            if (typeof params.value[2] == "undefined") {
              return params.name + " : " + params.value;
            } else {
              return params.name + " : " + params.value[2];
            }
          }
        },
        grid: {
          right: 0,
          top: 0,
          bottom: 0,
          width: "100%"
        },
        xAxis: {
          type: "value",
          scale: false,
          position: "top",
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            margin: 2,
            textStyle: {
              color: "#aaa"
            }
          }
        },
        yAxis: {
          type: "category",
          //  name: 'TOP 20',
          nameGap: 16,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#ddd"
            }
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: "#ddd"
            }
          },
          axisLabel: {
            show: false,
            interval: 0,
            textStyle: {
              color: "#ddd"
            }
          },
          data: this.categoryData
        },
        series: [
          {
            //  name: 'Top 5',
            // 可以设置成各个类型
            type: "effectScatter",
            coordinateSystem: "geo",
            data: this.convertData(data),
            symbol: "pin", //circle
            // geoIndex: 0,
            symbolSize: function(val) {
              //return Math.max(val[2] / 10,9);
              if (val[2] < 10) {
                return 10;
              }
              if (val[2] >= 10 && val[2] < 100) {
                return 14;
              }
              if (val[2] >= 100) {
                return val[2] / 10;
              }
            },
            showEffectOn: "emphasis",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                // 显示名称
                show: false //true
              }
            },
            itemStyle: {
              normal: {
                color: "#28A1D1", //图标颜色#f4e925
                shadowBlur: 1,
                shadowColor: "#333"
              }
            },
            zlevel: 1
          },
          {
            id: "bar",
            zlevel: 2,
            type: "bar",
            symbol: "none",
            itemStyle: {
              normal: {
                color: "#ddb926"
              }
            }
            //data: data
          }
        ]
      });
      // return myChart;
    }
  },
  mounted: function() {
    var map = this.map();
    window.onresize = function temp() {
      map.resize();
    };
  }
  // 备注：如果出现多页面的时候需要将定时器清除，否则在跳转别的页面时还会调取接口
  // beforeDestroy() {
  //     clearInterval(this.intervalid1)
  //     clearInterval(this.intervalid2)
  // }
};
</script>

