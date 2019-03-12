<!--
 * @Author: wuchen
 * @LastEditors: wuchen
 * @Description: crypto-js加解密,key和iv都可以更换，但是需要保证的是加解密的key和iv保持一致
 * @Email: rangowu@163.com
 * @Date: 2019-03-12 10:40:31
 * @LastEditTime: 2019-03-12 11:00:08
 -->
<template>
  <div>
    前端加密,后端解密
  </div>
</template>

<script>
import CryptoJS from "crypto-js"; //引入cryptojs
export default {
  data() {
    return {};
  },
  methods: {
    Encrypt() {
      let key = CryptoJS.enc.Utf8.parse("密钥");
      let encrypted = CryptoJS.TripleDES.encrypt("密码", key, {
        iv: CryptoJS.enc.Utf8.parse("密钥偏移量"),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
      //   加密后的字段
      var password = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
      console.log('加密后的字段',password)
    }
  },
  mounted() {
      this.Encrypt();
  }
};
</script>

