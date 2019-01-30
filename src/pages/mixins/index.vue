<!--
 * @Author: wuchen
 * @Date: 2019-01-30 11:53:45
 * @LastEditors: wuchen
 * @LastEditTime: 2019-01-30 14:54:22
 * @Description: 代码复用,都可以引入minins,此处没有接口无法模拟现象(http://blog.dunizb.com/2019/01/02/Tips-Reuse-your-code-with-Vue-js-Mixins/)
 * @Email: rangowu@163.com
 -->

<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" align="center" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" align="center" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址" align="center">
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalSize">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import datas from '@/common/data';
import mixin from '@/common/mixins' // 引入
    export default {
        mixins: [mixin], // 使用mixins
        data() {
            return {  
            }
        },
        methods: {
            list(){
                this.tableData = datas.tabList;
            }
        },
        mounted(){
            this.list();
        }
    }
</script>

<style lang="scss">
.pagination{
    float: right;
    margin: 20px 30px 0 0;
}
</style>
