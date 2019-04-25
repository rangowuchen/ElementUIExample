<!--
 * @Author: wuchen
 * @LastEditors: wuchen
 * @Description: jsencrypt前端加密
 * @Email: rangowu@163.com
 * @Date: 2019-04-25 09:37:43
 * @LastEditTime: 2019-04-25 10:13:22
 -->
<template>
    <div>
    </div>
</template>

<script>
    import {
        JSEncrypt
    } from "jsencrypt";
    export default {
        data() {
            return{
                
            }
        },
        methods: {
            test() {
                let jse = new JSEncrypt();
                jse.setPublicKey(`
        MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8ygMKjJLSUpnfXqt8lRSAdDxA
        HWKi9GbTFkCbAjkRCR6VUakxxXLXHQUtPCizKcvNpuYqZ5bO8LEgpY7SL3JEdEI9
        OuMnZ6ToeHPfcHeS+EgN0oYmdQ49RB5wZkcBEFk80OBEAM6VhnE0IuHGkU5ko9oP
        Hq3boEQ3Ej6r3T+UhQIDAQAB`);
                // 设置需要加密的字符串
                let encrypted = jse.encrypt('123456')
                // 输出加密结果
                console.log(encrypted)
            }
        },
        mounted() {
            this.test();
        }
    };
</script>

