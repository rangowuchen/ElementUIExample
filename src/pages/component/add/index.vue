<!--
 * @Author: wuchen
 * @Date: 2021-12-06 16:03:49
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-06 17:05:00
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="省份">
        <el-input v-model="form.province"></el-input>
      </el-form-item>
      <el-form-item label="市区">
        <el-input v-model="form.city"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="邮编">
        <el-input v-model="form.zip"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    props: {
      componentData: {}
    },
    data() {
      return {
        form: {
          name: '',
          province: '',
          city: '',
          address: '',
          zip: ''
        }
      }
    },
    mounted() {
      // 编辑
      if (Object.keys(this.componentData).length != 0) {
        this.form = JSON.parse(JSON.stringify(this.componentData));
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      cancel() {
          this.$emit('changeView', 'List')
      }
    },
    
    beforeDestroy() {
        alert('销毁子组件Add');
    }
  }

</script>
