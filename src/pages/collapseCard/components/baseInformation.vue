<!--
 * @Author: wuchen
 * @Date: 2020-01-14 14:28:19
 * @LastEditors  : wuchen
 * @LastEditTime : 2020-01-14 17:50:31
 * @Description: 
 * @Email: rangowu@163.com
 -->
<template>
    <div>
        <div class="collapseContent" v-for="item in childrenItem" :key="item.itemId">
            <div class="collapseContentItem">
                <span>二级名称:</span>
                <span>{{item.itemName}}</span> 
            </div>
            <div class="collapseContentItem">二级名称:<span style="">{{item.itemName}}</span> </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    props:['childrenItem']
}
</script>

<style lang="scss" scoped>
.collapseContent{
    width:100;height:30px;line-height:30px;display:flex;
}
.collapseContentItem{
    width:50%;padding:0 0px 0 20px;
    display: flex;justify-content: space-around;
}
</style>