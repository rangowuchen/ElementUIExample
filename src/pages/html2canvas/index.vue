<template>
    <div>
        <div id="home-table">
            <el-button size="large">这是一个按钮</el-button>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
            </el-table>
        </div>
        <el-button size="large" @click="exportBase">&#32;导出</el-button>
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
        }
      ]
    };
  },
  methods: {
    //   导出的是以id为home-table的容器内的所有内容,包括样式等
    exportBase() {
      let vm = this;
      let table = document.getElementById("home-table");
      html2canvas(table).then(imges => {
        // console.log(imges.toDataURL());
        //预览
        let url = imges.toDataURL();
        // document.getElementById('exportImg').src=url;
        //下载
        let a = document.createElement("a");
        a.href = url;
        a.download = vm.imageName ? vm.imageName : "寄几个";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#home-table{
    background: #fff;
}
</style>

