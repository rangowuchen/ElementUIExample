<!--
 * @Author: wuchen
 * @Date: 2019-11-29 16:21:02
 * @LastEditors: wuchen
 * @LastEditTime: 2019-11-29 16:50:59
 * @Description: 
 * @Email: rangowu@163.com
 -->
<template>
    <div>
       <div v-for="(item,index) in arr" :key="index">
           <span v-if="index % 2 ==0">
               <span>{{item.name}}</span>
               <span v-if="index < arr.length">7</span>
           </span>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[
                {
                    name:'haha1',
                    desc:"hshshs"
                },{
                    name:'hehe2',
                    desc:"hshshs"
                },{
                    name:'huhu3',
                    desc:"hshshs"
                },{
                    name:'hoho4',
                    desc:"hshshs"
                },{
                    name:'hrhr5',
                    desc:"hshshs"
                },{
                    name:'hqhq6',
                    desc:"hshshs"
                },{
                    name:'7777',
                    desc:"hshshs"
                }
            ]
        }
    },
    methods:{
        
    }
}
</script>