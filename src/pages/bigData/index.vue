<!--
 * @Date: 2022-05-13 13:55:59
 * @Author: surewinT 840325271@qq.com
 * @LastEditTime: 2022-08-06 10:19:28
 * @LastEditors: wuchen
 * @Description: 调用页面
-->

<template>
    <cw-select :selectData="selectData" v-model="defaultValue" placeholder="请选择下拉数据" clearable @change="selectChange"></cw-select>
</template>

<script>
    import CwSelect from '@/components/Select'
    export default {
        components: {
            CwSelect
        },
        data() {
            return {
                selectData: {
                    data:[],// 下拉框数据
                    label: 'name',// 下拉框需要显示的名称
                    value: 'code',// 下拉框绑定的值
                    isRight: true,//右侧是否显示
                },
                defaultValue: 'China99', //下拉框选择的默认值
            };
        },
        mounted() {
            this.selectData.data = []
            for (let i = 0; i < 10000; i++) {
                this.selectData.data.push({code:'China'+i,name:'中国'+i+''})
            }
        },
        methods: {
            selectChange(val) {
                console.log('下拉框选择的值', val)
            }
        }
    };
</script>