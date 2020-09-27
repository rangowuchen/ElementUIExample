<!--
 * @Author: wuchen
 * @Date: 2019-09-05 14:30:08
 * @LastEditors: wuchen
 * @LastEditTime: 2020-04-10 20:00:09
 * @Description: 
 * @Email: rangowu@163.com
 -->
<template>
    <div>
        <el-select class="selectTab" v-model="searchValue" filterable :filter-method="userFilter" clearable>
            <el-option v-for="item in userDataTemp" :key="item.userId" :label="item.username" :value="item.userId">
                <span style="float: left">{{ item.username }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.userId }}</span>
            </el-option>
        </el-select>
        <el-popover placement="bottom-start" :width="360" v-model="visible" trigger="manual">
            <el-table :data="userTemp" size="mini" :show-header="false" :max-height="230" @row-click="clickItem">
                <el-table-column prop="username"></el-table-column>
                <el-table-column prop="userId">
                    <template slot-scope="scope">
                <span style="color:#8492a6">{{scope.row.userId}}</span>
</template>
        </el-table-column>
      </el-table>
      <div
        slot="reference"
        class="selectTab"
      >
        <el-input
          placeholder="请输入内容"
          clearable
          v-model="value"
          @focus="handleFocus"
          @blur="handleBlur"
        ></el-input>
      </div>
    </el-popover>
    <el-select
      filterable
      class="search-input"
      :filter-method="selectFilter"
      v-model="selectNav"
      placeholder="请输入功能名称"
    >
      <el-option
        v-for="item in dataList"
        :key="item.userId"
        :label="item.username"
        :value="item.userId"
      >
      <span style="float:left">{{item.username}}</span>
      <span style="float:right">{{item.userId}}</span>
      </el-option>
    </el-select>
  </div>
</template>

<script>
    import {
        fail
    } from "assert";
    export default {
        data() {
            return {
                dataList: [{
                        username: "士大夫但是",
                        userId: "mdd"
                    },
                    {
                        username: "张三",
                        userId: "zff"
                    },
                    {
                        username: "撒旦法",
                        userId: "sdf"
                    },
                    {
                        username: "撒旦法发",
                        userId: "ffgy"
                    },
                    {
                        username: "受到广泛的给",
                        userId: "sdkl"
                    },
                    {
                        username: "双方都是",
                        userId: "TRYU"
                    },
                    {
                        username: "额外热舞",
                        userId: "tryo"
                    },
                    {
                        username: "尔瓦图为",
                        userId: "yrdx"
                    },
                    {
                        username: "二万人",
                        userId: "ggrui"
                    },
                    {
                        username: "而更广泛的",
                        userId: "10"
                    },
                    {
                        username: "大锅饭大概",
                        userId: "11"
                    },
                    {
                        username: "二饿温热",
                        userId: "12"
                    },
                    {
                        username: "而太热",
                        userId: "13"
                    }
                ],
                userDataTemp: [],
                searchValue: "",
                userTemp: [],
                visible: false,
                value: "",
                isSelect: true,
                selectNav: ""
            };
        },
        mounted() {
            this.userFilter();
            this.userTemp = this.dataList;
        },
        watch: {
            value(val) {
                if (this.isSelect) {
                    this.userTemp = this.dataList;
                    this.isSelect = false;
                } else {
                    let arr = this.dataList.filter(item => {
                        return (
                            item.username.indexOf(val) != -1 || item.userId.indexOf(val) != -1
                        );
                    });
                    this.userTemp = arr;
                }
            }
        },
        methods: {
            // filter-method
            userFilter(query = "") {
                let arr = this.dataList.filter(item => {
                    return (
                        item.username.indexOf(query) != -1 || item.userId.indexOf(query) != -1
                    );
                });
                if (arr.length > 50) {
                    this.userDataTemp = arr.slice(0, 50);
                } else {
                    this.userDataTemp = arr;
                }
            },
            // 表格
            handleFocus() {
                this.visible = true;
            },
            handleBlur() {
                this.visible = false;
            },
            clickItem(row) {
                this.value = row.username;
                this.visible = false;
                this.isSelect = true;
            },
            selectFilter(val) {
                let data = [{
                        username: "士大夫但是",
                        userId: "mdd"
                    },
                    {
                        username: "张三",
                        userId: "zff"
                    },
                    {
                        username: "撒旦法",
                        userId: "sdf"
                    },
                    {
                        username: "撒旦法发",
                        userId: "ffgy"
                    },
                    {
                        username: "受到广泛的给",
                        userId: "sdkl"
                    },
                    {
                        username: "双方都是",
                        userId: "TRYU"
                    },
                    {
                        username: "额外热舞",
                        userId: "tryo"
                    },
                    {
                        username: "尔瓦图为",
                        userId: "yrdx"
                    },
                    {
                        username: "二万人",
                        userId: "ggrui"
                    },
                    {
                        username: "而更广泛的",
                        userId: "10"
                    },
                    {
                        username: "大锅饭大概",
                        userId: "11"
                    },
                    {
                        username: "二饿温热",
                        userId: "12"
                    },
                    {
                        username: "而太热",
                        userId: "13"
                    }
                ];
                //判断是否为空
                if (val) {
                    //同时筛选Lable与value的值
                    this.dataList = data.filter(item => {
                        if (!!~item.username.indexOf(val) ||
                            !!~item.username.toUpperCase().indexOf(val.toUpperCase()) ||
                            !!~item.userId.indexOf(val) ||
                            !!~item.userId.toUpperCase().indexOf(val.toUpperCase())
                        ) {
                            return true;
                        }
                    });
                } else {
                    //赋值还原
                    this.dataList = data;
                }
            }
        }
    };
</script>
<style lang="scss" scoped>
    .selectTab {
        width: 386px;
        float: left;
    }
</style>
<style lang="scss">
    .el-table__body-wrapper::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    .el-table__body-wrapper::-webkit-scrollbar-thumb {
        background: #ebeef5;
        border-radius: 3px;
    }
</style>