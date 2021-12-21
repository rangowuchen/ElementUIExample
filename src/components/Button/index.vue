<!--
 * @Author: wuchen
 * @Date: 2021-12-15 10:40:55
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-16 15:21:16
 * @Description: https://juejin.cn/post/6916474993635229704
 * @Email: rangowu@163.com
-->
<template>
    <div>
        <el-button v-bind="$attrs" v-on="$listeners" :loading="loadingStatus" @click="handleClick">
            <slot/>
        </el-button>
    </div>
</template>
<script>
    export default {
        name: 'cw-button',
        props: {
            autoLoading: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                loadingStatus: false
            }
        },
        methods: {
            handleClick() {
                if (this.autoLoading) {
                    this.loadingStatus = true
                }
                this.$emit('handleClick', () => {
                    this.loadingStatus = false;
                })
            }
        }
    }
</script>