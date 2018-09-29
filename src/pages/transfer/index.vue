/*
 * @Author: rangowu
 * @Date: 2018-09-28 15:12:18
 * @LastEditors: rangowu
 * @LastEditTime: 2018-09-28 15:12:18
 * @Description: 穿梭框
 * @Email: rangowu@163.com
 */
 <template>
     <div class="container">
         <Transfer :data-list="listUserInfo" :right-value="roleUserlist" v-model="rightData"></Transfer>
         <el-button @click="save" type="success">确定</el-button>
     </div>
 </template>
 <script>
 import Transfer from './transfer.vue'
 export default {
     data () {
         return {
             listUserInfo:[{name:"haha",id:1},{name:"huhu",id:2},{name:"hehe",id:3}],//左侧数据
             roleUserlist:[],//右侧数据
             rightData:[],//提交的数据
         }
     },
     components:{
         Transfer
     },
     methods:{
         save(){
             console.log(this.rightData)
         }
     },
     mounted () {
         this.roleUserlist = [{name:"lala",id:4},{name:"lele",id:5}]
     }
 }
 </script>

 <style lang="scss" scoped>
 .container{
     width: 600px;
     margin: 0 auto;
 }
 </style>
 
 
 
