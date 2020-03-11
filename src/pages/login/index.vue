<!--
 * @Author: wuchen
 * @Date: 2020-03-10 15:26:41
 * @LastEditors: wuchen
 * @LastEditTime: 2020-03-11 14:44:31
 * @Description: https://www.jianshu.com/p/378ce1189f49
 *:focus设置之后,是当前元素触发焦点状态后的样式
 *:focus-within,是当前元素或者后的元素获取焦点后的样式
 * @Email: rangowu@163.com
 -->
<template>
    <div>
        <div class="g-container">
            <h2>登录</h2>
            <!-- <div class="g-username">
                <input name="loginPhoneOrEmail" maxlength="64" placeholder="请输入手机号或邮箱" class="input">
                <img src="@/assets/img/greeting.png" class="g-username">
            </div>
            <div class="g-password">
                <input name="loginPassword" type="password" maxlength="64" placeholder="请输入密码" class="input">
                <img src="@/assets/img/blindfold.png" class="g-password">
            </div>
            <img src="@/assets/img/normal.png" class="g-normal"> -->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="userName" class="g-username">
                    <el-input type="text" v-model="ruleForm.userName" autocomplete="off" style="margin-top:10px;" placeholder="请输入用户名"></el-input>
                    <img src="@/assets/img/greeting.png" class="g-username">
                </el-form-item>
                <el-form-item prop="psw" class="g-password">
                    <el-input type="password" v-model="ruleForm.psw" autocomplete="off" style="margin-top:10px;" placeholder="请输入密码"></el-input>
                    <img src="@/assets/img/blindfold.png" class="g-password">
                </el-form-item>
                <el-form-item prop="code">
                    <el-input v-model.number="ruleForm.code" style="margin-top:10px;" placeholder="请输入验证码"></el-input>
                </el-form-item>
                <img src="@/assets/img/normal.png" class="g-normal">
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            var validateUserName = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    callback();
                }
            };
            var validatePsw = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            var validateCode = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入验证码'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    userName: '',
                    psw: '',
                    code: ''
                },
                rules: {
                    userName: [{
                        validator: validateUserName,
                        trigger: 'blur'
                    }],
                    psw: [{
                        validator: validatePsw,
                        trigger: 'blur'
                    }],
                    code: [{
                        validator: validateCode,
                        trigger: 'blur'
                    }]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        window.localStorage.setItem('token','admin');
                        this.$router.push({
                            path:'/home'
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .g-container {
        position: relative;
        width: 318px;
        margin: 100px auto;
        height: 370px;
        padding: 20px;
        box-sizing: border-box;
        background: #fff;
        z-index: 10;
        h2 {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 30px;
        }
        input {
            outline: none;
            padding: 10px;
            width: 100%;
            border: 1px solid #e9e9e9;
            border-radius: 2px;
            outline: none;
            box-sizing: border-box;
            font-size: 16px;
        }
    } // 所有图片都在这个位置
    img {
        position: absolute;
        top: -20%;
        left: 50%;
        width: 120px;
        height: 95px;
        transform: translate(-50%, 0);
    }
    .g-username {
        margin-bottom: 10px;
        img {
            display: none;
            width: 120px;
            height: 113px;
            top: -180px;
        }
    }
    .g-username:focus-within~img {
        display: none;
    }
    .g-username:focus-within {
        input {
            border-color: #007fff;
        }
        img {
            display: block;
        }
    }
    .g-password {
        margin-bottom: 10px;
        img {
            display: none;
            width: 103px;
            height: 84px;
            top: -200px;
        }
    }
    .g-password:focus-within~img {
        display: none;
    }
    .g-password:focus-within {
        input {
            border-color: #007fff;
        }
        img {
            display: block;
        }
    }
</style>