/*
 * @Author: wuchen
 * @Date: 2018-09-29 15:54:12
 * @LastEditors: wuchen
 * @LastEditTime: 2018-09-29 18:22:47
 * @Description: 使用htmltocanvas 将html转化成图片,实现导出图片的效果
 * @Email: rangowu@163.com
 */

<template>
  <div>
    <div id="home-table">
      <img src="@/assets/img/avatar.png" alt="">
      <el-button size="large" @click="exportBase">&#32;导出</el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "1111111111",
          address: "111111111111"
        }
      ]
    };
  },
  methods: {
    //   导出的是以id为home-table的容器内的所有内容,包括样式等
    exportBase() {
      let vm = this;
      let table = document.getElementById("home-table");
      // html2canvas(table).then(imges => {
      //   // console.log(imges.toDataURL());
      //   //预览
      //   let url = imges.toDataURL();
      //   // document.getElementById('exportImg').src=url;
      //   //下载
      //   let a = document.createElement("a");
      //   a.href = url;
      //   a.download = vm.imageName ? vm.imageName : "寄几个";
      //   document.body.appendChild(a);
      //   a.click();
      //   document.body.removeChild(a);
      // });

      // 可以导出滚动区域的内容，需要设置高度属性
      html2canvas(table, {
        height: table.clientHeight,
        onrendered: function(imges) {
          console.log("导出元素高度",table.clientHeight)
          let url = imges.toDataURL();
          let a = document.createElement("a");
          a.href = url;
          a.download = vm.imageName ? vm.imageName : "寄几个";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#home-table {
  background: #fff;
}
</style>

