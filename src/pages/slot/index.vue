<!--
 * @Author: wuchen
 * @Date: 2022-07-26 15:10:31
 * @LastEditors: wuchen
 * @LastEditTime: 2022-07-27 11:44:43
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div>
        <test>
            <template v-slot:header>
                11
            </template>
            <!-- 此处为默认插槽,插槽名可省略 -->
            22
            <template v-slot:footer>
                33
            </template>
            <!-- v-slot: 可简写成# -->
            <!-- <template #footer>
                33
            </template> -->
            <!-- 将test组件的值传给父组件 -->
            <template v-slot:communicate="slotProps">
                <!-- 此处不写值,就显示test组件默认值,写值的话会替换默认值 -->
                {{slotProps.usertext.firstName}}
            </template>
            <!-- 解构插槽 Prop -->
            <template v-slot:communicate1="{ user }">
                {{user.firstName}}
            </template>
        </test>
    </div>
</template>
<script>
import Test from './test.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        Test
    }
}
</script>