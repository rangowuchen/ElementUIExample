<!--
 * @Author: wuchen
 * @Date: 2019-09-10 19:32:14
 * @LastEditors: wuchen
 * @LastEditTime: 2019-09-10 19:59:44
 * @Description: element树单选
 * @Email: rangowu@163.com
 -->
<template>
    <div>
        <el-tree :data="treeData" show-checkbox node-key="id" :props="defaultProps" check-strictly @check-change="handleClick" ref="treeRef">
        </el-tree>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                temp: 0,
                treeData: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods: {
            handleClick(data, checked, node) {
                console.log(data,checked,node)
                this.temp++;
                if (this.temp % 2 === 0) {
                    if (checked) {
                        this.$refs.treeRef.setCheckedNodes([]);
                        this.$refs.treeRef.setCheckedNodes([data]);
                    } else {
                        this.$refs.treeRef.setCheckedNodes([]);
                    }
                }
            },
        }
    }
</script>