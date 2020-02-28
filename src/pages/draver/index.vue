<!--
 * @Author: wuchen
 * @Date: 2020-01-22 11:14:43
 * @LastEditors  : wuchen
 * @LastEditTime : 2020-01-22 11:18:12
 * @Description: 
 * @Email: rangowu@163.com
 -->
<template>
    <div>
        <drawer title="测试" :visible.sync='dialogVisible' width="500px" close-on-click-modal>
        </drawer>
    </div>
</template>
<script>
import drawer from './components'
export default {
    components:{drawer},
    data(){
        return {
            dialogVisible:false
        }
    }
}
</script>