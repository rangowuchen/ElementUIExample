<template>
    <div id="Cold_all">
        <div class="Cold_Left">
            <el-row>
                <el-col :span="24">
                    <el-table size="mini" :data="master_user.data" border style="width: 100%;margin:auto" highlight-current-row>
                        <el-table-column type="index" label="序号"></el-table-column>
                        <el-table-column prop="id" label="id"></el-table-column>
                        <el-table-column v-for="(item,index) in master_user.columns" :label="item.label" :prop="item.prop" :width="item.width" :key="index">
                            <template slot-scope="scope">
                                <span v-if="scope.row.isSet">
                                <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel[item.prop]"></el-input>
                                </span>
                                <span v-else>{{scope.row[item.prop]}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <span class="Insert_Cold" style="cursor: pointer;" v-if="scope.row.isSet" @click.stop="saveRow(scope.row,scope.$index)">保存</span>
                                <span class="Edit_Cold" style="cursor: pointer;" v-else @click="editRow(scope.row,scope.$index)">编辑</span>
                                <span class="Delete_Cold" style="cursor: pointer;" @click="deleteRow(scope.$index,master_user.data)">删除</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
                <el-col :span="24">
                    <div class="el-table-add-row" style="width: 99.2%;" @click="add()">
                        <span>+ 添加</span>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        // https://www.cnblogs.com/provedl/p/11120411.html
        name: "",
        data() {
            return {
                master_user: {
                    sel: null, //选中行
                    columns: [{
                            prop: "OutdoorTDB",
                            label: "室外计算温度(℃)",
                        },
                        {
                            prop: "IndoorTDB",
                            label: "室内计算温度(℃)"
                        },
                        {
                            prop: "TdbStartTime",
                            label: "运行开始时间"
                        },
                        {
                            prop: "TdbEndTime",
                            label: "运行结束时间"
                        }
                    ],
                    data: [
                       {
                            OutdoorTDB: "test",
                            IndoorTDB: "test",
                            TdbStartTime: "te",
                            TdbEndTime: "ee",
                            isSet: false,
                            id:1
                       } 
                    ]
                },
            }
        },
        methods: {
            //基本输入列表
            add() {
                for (let i of this.master_user.data) {
                    if (i.isSet) return this.$message.error("请先保存当前编辑项");
                }
                let j = {
                    index: "",
                    OutdoorTDB: "",
                    IndoorTDB: "",
                    TdbStartTime: "",
                    TdbEndTime: "",
                    isSet: true
                };
                this.master_user.data.push(j);
                this.master_user.sel = JSON.parse(JSON.stringify(j));
                console.log('data',this.master_user.data);
            },
            saveRow(row, index) {
                //保存
                let data = JSON.parse(JSON.stringify(this.master_user.sel));
                for (let k in data) {
                    row[k] = data[k];
                }
                row.isSet = false;
            },
            editRow(row) {
                //编辑
                for (let i of this.master_user.data) {
                    if (i.isSet) return this.$message.error("请先保存当前编辑项");
                }
                this.master_user.sel = row;
                row.isSet = true;
            },
            deleteRow(index, rows) {
                console.log('删除',rows[index])
                if(rows[index].id){
                    // 调取接口编辑
                    alert('调取接口删除');
                }else{
                    //删除
                    rows.splice(index, 1);
                }
                
                
            },
        }
    }
</script>
