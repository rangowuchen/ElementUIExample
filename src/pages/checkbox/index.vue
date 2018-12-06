<template>
    <div class="deliverySetting">
        <div class="deliverySetting-table">
            <div class="table-head">
                <div class="selection">
                    <el-checkbox :indeterminate="indeterminate" v-model="ischeckAll" @change="handleCheckAllChange"></el-checkbox>
                </div>
                <div class="width185">一级菜单名称</div>
                <div class="width265">二级菜单名称</div>
                <div class="width265">二级菜单描述</div>
            </div>
            <div class="table-body" v-for="(partition,partitionIndex) in distributorsInfo" :key="partitionIndex">
                <div class="selection">
                    <p>
                        <el-checkbox :indeterminate="partition.indeterminate" v-model="partition.selected" @change="handleCheckedCountryAllChange(partitionIndex,partition.partitionId,$event)" :key="partitionIndex"></el-checkbox>
                    </p>
                </div>
                <div class="width185">
                    <p>{{ partition.partitionName }}</p>
                </div>
                <div class="width265">
                    <el-checkbox v-for="country in partition.country" v-model="country.selected" @change="handleCheckedCountryChange(partitionIndex,country.id,partition.partitionId,$event)" :label="country" :key="country.id">{{country.fieldName}}</el-checkbox>
                </div>
                <div class="width265">
                    <span style="display:block;height:29.6px;line-height:29.6px" v-for="(item,index) in partition.country" :key="index">
                {{ item.distributors }}
              </span>
                </div>
            </div>
        </div>
        <div class="deliverySetting-btn">
            <!-- <div class="tabs-btn ac">
                    <input type="button" value="分配派送商" @click="showSetDistributorDailog">
                </div>
                <div class="tabs-btn ac">
                    <input type="button" value="取消分配" @click="showCancelDistributorDailog">
                </div> -->
            <div class="tabs-btn ac">
                <input type="button" value="分配权限" @click="perm">
            </div>
        </div>
        <!-- 分配派送商dailog -->
        <el-dialog title="分配派送商" :visible.sync="setDistributorDailog" width="480px">
            <el-form :model="distributorForm" :rules="rules" class="setDistributorDailog">
                <el-form-item label="派送代理商" label-width="120px">
                    <el-input v-model="distributorForm.vendorName" auto-complete="off" placeholder="请输入供应商名称"></el-input>
                </el-form-item>
                <el-form-item label="末端派送商" prop="senderName" label-width="120px">
                    <el-select v-model="distributorForm.senderName" filterable allow-create default-first-option placeholder="请选派送商名称">
                        <el-option label="派送商1" value="shanghai"></el-option>
                        <el-option label="派送商2" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="派送商官网" prop="website" label-width="120px">
                    <el-input v-model="distributorForm.website" auto-complete="off" placeholder="请输入派送商官网"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="setDistributorDailog = false">取 消</el-button>
                <el-button type="primary" @click="setDistributorDailog = false">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 取消分配派送商 -->
        <el-dialog title="停止提示" :visible.sync="cancelDistributorDailog" :modal="false" width="480px" custom-class="stop-coupon-dialog">
            <p><br></p>
            <p class="ac f16">您确定要取消对的派送分配吗？</p>
            <p><br></p>
            <span slot="footer" class="dialog-footer">
            <el-button @click="cancelDistributorDailog = false">取 消</el-button>
            <el-button
              type="primary"
              @click="cancelDistributorDailog=false"
            >确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name: "deliverySetting",
        components: {},
        props: {},
        data() {
            return {
                distributorsInfo: [{
                        partitionName: "告警管理",
                        selected: false,
                        partitionId: 1,
                        isIndeterminate: false,
                        country: [{
                                id: "1",
                                fieldName: "告警联系人",
                                fieldTableName: "告警联系人",
                                distributors: "这是告警联系人",
                                selected: false
                            },
                            {
                                id: "2",
                                fieldName: "告警历史",
                                fieldTableName: "告警历史",
                                distributors: "这是告警历史",
                                selected: false
                            }
                        ]
                    },
                    {
                        partitionName: "服务总览",
                        selected: false,
                        partitionId: 2,
                        isIndeterminate: false,
                        country: [{
                            id: "3",
                            fieldName: "服务总览",
                            fieldTableName: "服务总览",
                            distributors: "这是服务总览",
                            selected: false
                        }]
                    },
                    {
                        partitionName: "应用拓扑图",
                        selected: false,
                        partitionId: 3,
                        isIndeterminate: false,
                        country: [{
                            id: "4",
                            fieldName: "应用拓扑图",
                            fieldTableName: "应用拓扑图",
                            distributors: "这是应用拓扑图",
                            selected: false
                        }]
                    },
                ],
                ischeckAll: false, //一级全选状态
                setDistributorDailog: false,
                cancelDistributorDailog: false,
                distributorForm: {
                    vendorName: "",
                    senderName: ""
                },
                indeterminate: false,
                rules: {
                    senderName: [{
                        required: true,
                        message: "字段不能为空",
                        trigger: "blur"
                    }],
                    website: [{
                        required: true,
                        message: "字段不能为空",
                        trigger: "blur"
                    }]
                }
            };
        },
        computed: {},
        methods: {
            handleCheckAllChange(e) {
                //一级change事件
                console.log("一级", e);
                this.ischeckAll = e;
                if (e == true) {
                    this.indeterminate = false;
                    for (var i = 0, len = this.distributorsInfo.length; i < len; i++) {
                        //二级全选反选不确定
                        this.distributorsInfo[i].selected = e;
                        for (
                            var j = 0, len1 = this.distributorsInfo[i].country.length; j < len1; j++
                        ) {
                            this.distributorsInfo[i].country[j].selected = e;
                        }
                    }
                } else {
                    this.indeterminate = false;
                    for (var i = 0, len = this.distributorsInfo.length; i < len; i++) {
                        //三级全选反选不确定
                        this.distributorsInfo[i].selected = e;
                        for (
                            var j = 0, len1 = this.distributorsInfo[i].country.length; j < len1; j++
                        ) {
                            this.distributorsInfo[i].country[j].selected = e;
                        }
                    }
                }
            },
            handleCheckedCountryAllChange(index, topId, e) {
                //二级change事件
                console.log("二级", index, topId, e);
                this.distributorsInfo[index].selected = e; //二级勾选后，子级全部勾选或者取消
                if (e == false) this.distributorsInfo[index].indeterminate = false; //去掉二级不确定状态
                var childrenArray = this.distributorsInfo[index].country;
                if (childrenArray)
                    for (var i = 0, len = childrenArray.length; i < len; i++)
                        childrenArray[i].selected = e;
                this.getIsCheckAll();
            },
            handleCheckedCountryChange(topIndex, sonId, topId, e) {
                //三级change事件
                console.log("三级", topIndex, sonId, topId, e);
                var childrenArray = this.distributorsInfo[topIndex].country;
                var tickCount = 0,
                    unTickCount = 0,
                    len = childrenArray.length;
                for (var i = 0; i < len; i++) {
                    if (sonId == childrenArray[i].id) childrenArray[i].selected = e;
                    if (childrenArray[i].selected == true) tickCount++;
                    if (childrenArray[i].selected == false) unTickCount++;
                }
                if (tickCount == len) {
                    //三级级全勾选
                    this.distributorsInfo[topIndex].selected = true;
                    this.distributorsInfo[topIndex].indeterminate = false;
                } else if (unTickCount == len) {
                    //三级级全不勾选
                    this.distributorsInfo[topIndex].selected = false;
                    this.distributorsInfo[topIndex].indeterminate = false;
                } else {
                    this.distributorsInfo[topIndex].selected = false;
                    this.distributorsInfo[topIndex].indeterminate = true; //添加二级不确定状态
                }
                this.getIsCheckAll();
            },
            getIsCheckAll() {
                var tickCount = 0,
                    unTickCount = 0,
                    ArrLength = this.distributorsInfo.length;
                for (var j = 0; j < ArrLength; j++) {
                    //全选checkbox状态
                    if (this.distributorsInfo[j].selected == true) tickCount++;
                    if (this.distributorsInfo[j].selected == false) unTickCount++;
                }
                if (tickCount == ArrLength) {
                    //二级全勾选
                    this.ischeckAll = true;
                    this.indeterminate = false;
                } else if (unTickCount == ArrLength) {
                    //二级全不勾选
                    this.ischeckAll = false;
                    this.indeterminate = false;
                } else {
                    this.ischeckAll = false;
                    this.indeterminate = true; //添加一级不确定状态
                }
            },
            perm() {
                console.log("distributorsInfo", this.distributorsInfo);
            },
            showSetDistributorDailog() {
                this.setDistributorDailog = true;
            },
            showCancelDistributorDailog() {
                this.cancelDistributorDailog = true;
            }
        },
        created: function() {},
        mounted: function() {
            // (async() => {
        },
        watch: {}
    };
</script>
<style lang="scss">
    .deliverySetting {
        padding: 20px 0;
        position: relative;
        .el-table {
            thead {
                tr {
                    th {
                        font-size: 14px;
                    }
                }
            }
            tbody {
                tr {
                    td {
                        vertical-align: baseline;
                        p {
                            line-height: 30px;
                        }
                        .el-checkbox-group {
                            display: flex;
                            flex-direction: column;
                            label {
                                line-height: 30px;
                                margin-left: 0;
                            }
                        }
                    }
                }
            }
        }
        .deliverySetting-table {
            font-size: 14px;
            color: #333;
            .table-head,
            .table-body {
                display: flex;
                padding: 10px 0;
                .selection {
                    width: 45px;
                    text-align: center;
                    line-height: 36px;
                }
                .width185 {
                    width: 30%;
                }
                .width265 {
                    width: 30%;
                }
            }
            .table-head {
                height: 36px;
                align-items: center;
                background-color: #e7f2ff;
            }
            .table-body {
                border-bottom: 1px solid #e4e4e4;
                color: #666;
                &:hover {
                    background-color: #f5f7fa;
                }
                .width265 {
                    display: flex;
                    flex-direction: column;
                    label {
                        line-height: 30px;
                        margin-left: 0;
                        color: #666;
                    }
                }
                p {
                    line-height: 30px;
                }
            }
        }
        .deliverySetting-btn {
            /*width: 100%;*/
            height: 59px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            position: absolute;
            top: -55px;
            right: -16px;
            z-index: 100;
            .tabs-btn {
                min-width: 90px;
                height: 34px;
                line-height: 32px;
                padding: 0 10px;
                color: #2387f7;
                border: solid 1px #4fa2ff;
                background-color: #e7f2ff;
                cursor: pointer;
                &:nth-of-type(2) {
                    margin: 0 15px;
                }
                input {
                    border: none;
                    background: transparent;
                    color: inherit;
                    cursor: inherit;
                    outline: none;
                    margin: 0;
                    padding: 0;
                }
                &:hover {
                    color: #fff;
                    background-color: #2387f7;
                }
            }
        }
        .setDistributorDailog {
            .el-input {
                width: 270px;
            }
        }
    }
</style>