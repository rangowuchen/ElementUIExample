<!--
 * @Author: wuchen
 * @Date: 2022-06-06 14:14:43
 * @LastEditors: wuchen
 * @LastEditTime: 2022-06-06 19:15:11
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div>
        <el-form :model="dynamicData" ref="dynamicData" style="text-align:left">
            <el-form-item class="formItemHeader" label="类型"></el-form-item>
            <el-form-item class="formItemHeader" label="甜度"></el-form-item>
            <el-form-item class="formItemHeader" label="备注"></el-form-item>
            <div v-for="(domain, index) in dynamicData.domains" :key="index">
                <el-form-item class="formItem" :prop="'domains.' + index + '.type'" :rules="{
                                required: true, message: '类型不能为空', trigger: 'change'
                                }">
                    <el-select v-model="domain.type" placeholder="请选择">
                        <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="formItem" :prop="'domains.' + index + '.key'" :rules="{
                                required: true, message: '甜度不能为空', trigger: 'blur'
                                }">
                    <el-input v-model="domain.key"></el-input>
                </el-form-item>
                <el-form-item class="formItem" :prop="'domains.' + index + '.value'" :rules="{
                                required: true, message: '备注不能为空', trigger: 'blur'
                                }">
                    <el-input v-model="domain.value"></el-input>
                </el-form-item>
                <el-button type="danger" circle icon="el-icon-delete" @click.prevent="removeDomain(domain)"></el-button>
            </div>
            <el-form-item>
                <el-button class="formBtn" icon="el-icon-plus" type="success" @click="addDomain">新增</el-button>
                <!-- <el-button @click="resetForm('dynamicData')">重置</el-button> -->
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        props: {
            dynamicData: {
                type: Object,
                default: function() {
                    return {};
                }
            },
            timestamp: {
                type: String,
                default: function() {
                    return '';
                }
            }
        },
        data() {
            return {
                typeOptions: [{
                        value: '选项1',
                        label: '黄金糕'
                    },
                    {
                        value: '选项2',
                        label: '双皮奶'
                    }
                ]
            }
        },
        watch: {
            timestamp() {
                this.submitForm('dynamicData');
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit('dynamicFormChange',this.dynamicData.domains)
                    } else {
                        console.log('error submit!!');
                        this.$emit('dynamicFormChange',false)
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            removeDomain(item) {
                var index = this.dynamicData.domains.indexOf(item)
                if (index !== -1) {
                    this.dynamicData.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.dynamicData.domains.push({
                    type: '',
                    value: '',
                    key: ''
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
    .formItemHeader {
        display: inline-block;
        margin-right: 10px;
        width: 30%;
    }
    .formItemHeader:last-of-type {
        width: 400px;
    }
    .formItem {
        display: inline-block;
        margin-right: 10px;
        width: 30%;
        margin-bottom: 20px;
    }
    .formBtn {
        width: 96%;
    }
</style>
