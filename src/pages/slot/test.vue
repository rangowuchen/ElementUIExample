<!--
 * @Author: wuchen
 * @Date: 2022-07-26 15:22:07
 * @LastEditors: wuchen
 * @LastEditTime: 2022-07-27 11:51:42
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div>
        <!-- 具名插槽 -->
        <div class="haha">
            <slot name="header"></slot>
        </div>
        <!-- 默认插槽 -->
        <div class="haha">
            <slot></slot>
        </div>
        <div class="haha">
            <slot name="footer"></slot>
        </div>
        <!-- 数据传值 -->
        <div class="haha">
            <!-- 设置默认值：{{user.lastName}}获取 Jun -->
            <!-- 如果index.vue中给这个插槽值的话，则不显示 Jun -->
            <!-- 设置一个 usertext 然后把user绑到设置的 usertext 上 -->
            <slot name="communicate" v-bind:usertext="user">{{user.lastName}}</slot>
        </div>
        <!-- 解构插槽 Prop -->
        <div class="haha">
            <slot name="communicate1" :user="user">{{user.lastName}}</slot>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user:{
                firstName:"Fan",
                lastName:"Jun"
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.haha {
    width: 100%;
    margin: 20px;
    border: 1px solid #666;
}
</style>