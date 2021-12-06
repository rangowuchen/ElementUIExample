<!--
 * @Author: wuchen
 * @Date: 2021-12-06 16:04:03
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-06 17:18:36
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
  <div>
    <el-button @click="handleAdd" type="text" size="small">新增</el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="province" label="省份">
      </el-table-column>
      <el-table-column prop="city" label="市区">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column prop="zip" label="邮编">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    methods: {
      handleAdd() {
        this.$emit('changeView', 'Add', {})
      },
      handleEdit(row) {
        this.$emit('changeView', 'Add', row)
      }
    },

    data() {
      return {
        tableData: [{
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: '200333'
        }, {
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: '200333'
        }, {
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: '200333'
        }, {
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: '200333'
        }]
      }
    },
    beforeDestroy() {
        alert('销毁子组件List');
    },
    mounted () {
        // this.$nextTick(() => {
            console.log('子组件List');
        // })
    }
  }

</script>
