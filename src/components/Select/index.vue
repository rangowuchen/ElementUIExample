<!--
 * @Author: wuchen
 * @Date: 2022-08-01 11:34:47
 * @LastEditors: wuchen
 * @LastEditTime: 2022-08-06 10:22:14
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div>
        <el-select :value="defaultValue" popper-class="virtualselect" filterable :filter-method="filterMethod" @visible-change="visibleChange" v-bind="$attrs" v-on="$listeners">
            <virtual-list ref="virtualList" class="virtualselect-list"
                :data-key="selectData.value"
                :data-sources="selectArr"
                :data-component="itemComponent"
                :keeps="20"
                :extra-props="{
                    label: selectData.label,
                    value: selectData.value,
                    isRight: selectData.isRight
                }"></virtual-list>
        </el-select>
    </div>
</template>
<script>
import virtualList from 'vue-virtual-scroll-list'
import ElOptionNode from './el-option-node'
export default {
    components:{
        'virtual-list': virtualList
    },
    model: {
        prop: 'defaultValue',
        event: 'change',
    },
    props: {
        selectData: {
            type: Object,
            default () {
                return {}
            }
        },//父组件传的值
        defaultValue: {
            type: String,
            default: ''
        }// 绑定的默认值
    },
    mounted() {
        this.init();
    },
    watch: {
        'selectData.data'() {
            this.init();
        }
    },
    data() {
        return {
            itemComponent: ElOptionNode,
            selectArr:[]
        }
    },
    methods: {
        init() {
            if(!this.defaultValue) {
                this.selectArr = this.selectData.data;
            }else {
                // 回显问题
                // 由于只渲染20条数据,当默认数据处于20条之外,在回显的时候会显示异常
                // 解决方法:遍历所有数据,将对应回显的那一条数据放在第一条即可
                this.selectArr = JSON.parse(JSON.stringify(this.selectData.data));
                let obj = {};
                for (let i = 0; i < this.selectArr.length; i++) {
                    const element = this.selectArr[i];
                    if(element[this.selectData.value].toLowerCase() === this.defaultValue.toLowerCase()) {
                        obj = element;
                        this.selectArr.splice(i,1);
                        break;
                    }
                }
                this.selectArr.unshift(obj);
            }
        },
        // 搜索
        filterMethod(query) {
            if (query !== '') {
                this.$refs.virtualList.scrollToIndex(0);//滚动到顶部
                setTimeout(() => {
                    this.selectArr = this.selectData.data.filter(item => {
                        return this.selectData.isRight?
                            (item[this.selectData.label].toLowerCase().indexOf(query.toLowerCase()) > -1 || item[this.selectData.value].toLowerCase().indexOf(query.toLowerCase()) > -1)
                            :item[this.selectData.label].toLowerCase().indexOf(query.toLowerCase()) > -1;
                    });
                },100)
        } else {
            this.init();
        }
        },
        visibleChange(bool) {
            if(!bool) {
                this.$refs.virtualList.reset();
                this.init();
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .virtualselect {
        // 设置最大高度
        &-list {
            max-height:245px;
            overflow-y:auto;
        }
        .el-scrollbar .el-scrollbar__bar.is-vertical {
            width: 0;
        }
    }
    
</style>