<!--
 * @Author: wuchen
 * @Date: 2020-06-24 17:55:48
 * @LastEditors: wuchen
 * @LastEditTime: 2022-06-06 18:50:04
 * @Description: 
 * @Email: rangowu@163.com
--> 
<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>

            <!-- 字段 -->
            <el-form-item label="test1" :required="isRequired1" prop="test1">
                <el-input v-model="ruleForm.test1"></el-input>
            </el-form-item>
            <el-form-item label="test2" :required="isRequired1" prop="test2">
                <el-input v-model="ruleForm.test2"></el-input>
            </el-form-item>
            <el-form-item label="test3" :required="isRequired1" prop="test3">
                <el-input v-model="ruleForm.test3"></el-input>
            </el-form-item>

            <el-form-item label="test4" :required="isRequired2" prop="test4">
                <el-input v-model="ruleForm.test4"></el-input>
            </el-form-item>
            <el-form-item label="test5" :required="isRequired2" prop="test5">
                <el-input v-model="ruleForm.test5"></el-input>
            </el-form-item>
            <el-form-item label="test6" :required="isRequired2" prop="test6">
                <el-input v-model="ruleForm.test6"></el-input>
            </el-form-item>



            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <el-form :model="formObj" :rules="formRules" ref="formObj" label-width="100px" label-position="right">
            <el-form-item style="width:96%" label="手机号" prop="phone">
                <el-input v-model="formObj.phone" palceholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="甜品">
                <dynamic :dynamicData='dynamicData' :timestamp='timestamp' @dynamicFormChange="dynamicFormChange"></dynamic>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm1('formObj')">提交</el-button>
            </el-form-item>
        </el-form>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        
    </div>
</template>
<script>
import Dynamic from './components/dynamic.vue'
    export default {
        data() {
            const aa  = (rule,value,callback) => {
                if(value == ''&&this.isRequired1){
                    callback(new Error('必填'))
                }else{
                    callback();
                }
            }
            const bb  = (rule,value,callback) => {
                if(value == ''&&this.isRequired1){
                    callback(new Error('必填'))
                }else{
                    callback();
                }
            }
            const cc  = (rule,value,callback) => {
                if(value == ''&&this.isRequired1){
                    callback(new Error('必填'))
                }else{
                    callback();
                }
            }

            const dd  = (rule,value,callback) => {
                if(value == ''&&this.isRequired2){
                    callback(new Error('必填'))
                }else{
                    callback();
                }
            }
            const ee  = (rule,value,callback) => {
                if(value == ''&&this.isRequired2){
                    callback(new Error('必填'))
                }else{
                    callback();
                }
            }
            const ff  = (rule,value,callback) => {
                if(value == ''&&this.isRequired2){
                    callback(new Error('必填'))
                }else{
                    callback();
                }
            }
            return {
                ruleForm: {
                    name: "",
                    region: "",
                    date1: "",
                    date2: "",
                    delivery: false,
                    type: [],
                    resource: "",
                    desc: "",
                    test1:'',
                    test2:'',
                    test3:''
                },
                rules: {},
                rules1: {
                    test1:[{validator:aa,trigger: ["blur", "change"]}],
                    test2:[{validator:bb,trigger: ["blur", "change"]}],
                    test3:[{validator:cc,trigger: ["blur", "change"]}],
                },
                rules2: {
                    test1:[{validator:dd,trigger: ["blur", "change"]}],
                    test2:[{validator:ee,trigger: ["blur", "change"]}],
                    test3:[{validator:ff,trigger: ["blur", "change"]}],
                },

                dynamicData: {
                    domains: [{
                        type: '',
                        key: '',
                        value: ''
                    }]
                },
                timestamp: '',
                formResult: [],
                formObj: {
                    phone: ''
                },
                formRules: {
                    phone:[{required: true, message: '请输入手机号', trigger: 'blur'},
                        { pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码' }]
                },
            };
        },
        components: {
            Dynamic
        },
        computed: {
            isRequired1(){
                if(this.ruleForm.test1==''&&this.ruleForm.test2==''&&this.ruleForm.test3==''){
                    return false
                }else if(this.ruleForm.test1!=''&&this.ruleForm.test2!=''&&this.ruleForm.test3!=''){
                    return false
                }else{
                    return true;
                }
            },
            isRequired2(){
                if(this.ruleForm.test4==''&&this.ruleForm.test5==''&&this.ruleForm.test6==''){
                    return false
                }else if(this.ruleForm.test4!=''&&this.ruleForm.test5!=''&&this.ruleForm.test6!=''){
                    return false
                }else{
                    return true;
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        alert("submit!");
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            // 动态表单
            submitForm1(formName) {
                this.timestamp = Date.now().toString();
                this.$nextTick(() => {
                    this.$refs[formName].validate(valid => {
                        if (valid) {
                            if(!this.formResult) {
                                return
                            }
                            // 传给后端的值
                            let params = {
                                ...this.formObj,
                                'formdata': this.formResult
                            }
                            console.log('传给后端的值---',params)
                        } else {
                            console.log("error submit!!");
                            return false;
                        }
                    });
                })
            },
            dynamicFormChange(data) {
                this.formResult = data;
                console.log('子组件传来的值',data)
            }
        }
    };
</script>
