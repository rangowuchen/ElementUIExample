<!--
 * @Author: wuchen
 * @Date: 2020-03-25 10:51:07
 * @LastEditors: wuchen
 * @LastEditTime: 2020-03-25 11:17:54
 * @Description: 使用filter-method不重新赋值导致搜索的值不能输入
 * @Email: rangowu@163.com
 -->
<template>
    <section class="p-10">
        <el-select v-model="value" placeholder="请选择" filterable :filter-method="dataFilter">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                optionsCopy: [{
                    value: '1',
                    label: 'meat'
                }, {
                    value: '2',
                    label: 'drink'
                }, {
                    value: '3',
                    label: 'food'
                }, {
                    value: '4',
                    label: '龙须面'
                }, {
                    value: '5',
                    label: '北京烤鸭'
                }],
                options: [{
                    value: '1',
                    label: 'meat'
                }, {
                    value: '2',
                    label: 'drink'
                }, {
                    value: '3',
                    label: 'food'
                }, {
                    value: '4',
                    label: '龙须面'
                }, {
                    value: '5',
                    label: '北京烤鸭'
                }],
                value: ''
            };
        },
        methods: {
            dataFilter(val) {
                // 一定要加
                this.value = val;
                if (val) { //val存在
                    this.options = this.optionsCopy.filter((item) => {
                        if (!!~item.label.indexOf(val) || !!~item.label.toUpperCase().indexOf(val.toUpperCase())) {
                            return true
                        }
                    })
                } else { //val为空时，还原数组
                    this.options = this.optionsCopy;
                }
            }
        }
    };
</script>