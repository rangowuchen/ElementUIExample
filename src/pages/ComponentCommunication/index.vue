/*
 * @Author: wuchen
 * @Date: 2018-10-09 15:29:17
 * @LastEditors: wuchen
 * @LastEditTime: 2018-10-09 18:20:17
 * @Description: 组件通信
 * @Email: rangowu@163.com
 */
 <template>
     <div>
         <One :aa="aa" :bb="bb"></One>
         <hr>
         <Two @searchData="dataAccept"></Two>
     </div>
 </template>

 <script>
 import One from "@/pages/ComponentCommunication/components/one.vue";
 import Two from "@/pages/ComponentCommunication/components/two.vue";
 export default {
     data(){
         return{
             aa:[1,2,3,4],
             bb:{
                 id:1,
                 name:"haha",
                 desc:"这是一个对象"
             }
         }
     },
     components:{
         One,Two
     },
     methods:{
         dataAccept(data){
             console.log('这是子组件传来的值',data)
         }
     }
 }
 </script>

 <style lang="scss" scoped>
 
 </style>
 
 
 
