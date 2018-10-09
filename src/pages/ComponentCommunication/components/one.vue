/*
 * @Author: wuchen
 * @Date: 2018-10-09 15:34:58
 * @LastEditors: wuchen
 * @LastEditTime: 2018-10-09 17:57:33
 * @Description: 这是组件1
 * @Email: rangowu@163.com
 */
 <template>
     <div>
         这是组件1,
         <br>
         父组件给子组件1传值aa,aa是个数组,通过props接收
         <div class="content" v-for="item in aa">{{item}}</div>
         <div class="contentObj" v-for="(val,key,index) in bb">{{index}}-{{val}}-{{key}}</div>
     </div>
 </template>
 
<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        aa:{
            type:Array,
            default:function(){
                return []
            }
        },
        bb:{
            type:Object,
            default:function(){
                return {}
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.content{
    color: red;
    margin-top: 30px;
}
.contentObj{
    color: blue;
    margin-top: 30px;
}
</style>

