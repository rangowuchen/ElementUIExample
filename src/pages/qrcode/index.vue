<template>
  <div>
    <vue-qr text="r" bgSrc="https://avatars3.githubusercontent.com/u/12221718?s=460&v=4"></vue-qr>
    <vue-qr text="hello world" :correctLevel="0" backgroundColor="rgb(255,0,0)"></vue-qr>
    <vue-qr text="hello world" :correctLevel="1" colorLight="rgb(255,0,0)"></vue-qr>
    <vue-qr text="hello world" :correctLevel="1" colorLight="rgb(0,255,0)"></vue-qr>
    <vue-qr text="hello world" :correctLevel="2"></vue-qr>
    <vue-qr :bgSrc="src" :logoSrc="src2" text="Hello world!" :size="260" :margin="0" :dotScale="0.5"></vue-qr>
    <vue-qr :bgSrc="src" :logoSrc="src2" text="Hello world!" :size="260" :margin="50" :dotScale="0.5"></vue-qr>
    <vue-qr :bgSrc="src" :logoSrc="src2" text="Hello world!" :size="260" :margin="0" :dotScale="0.5" logoBackgroundColor="rgb(255,0,0)" :logoMargin="10"></vue-qr>
    <vue-qr text="testdsfhsidufhiusdhfi" :bgSrc="src"></vue-qr>
    <vue-qr :text="time+''"></vue-qr>
    <vue-qr :bgSrc="src3" text="Hello world!" :size="260" :margin="0" :dotScale="0.6"></vue-qr>
    <vue-qr :bgSrc="src4" text="Hello world!" :size="300" :dotScale="0.5"></vue-qr>
    <vue-qr text="Hello world!" :callback="test" qid="testid" :size="300"></vue-qr>
    <vue-qr text="test test test test test test " :gifBgSrc="require('@/assets/gif/dog.gif')" :size="300" :dotScale="0.4"></vue-qr>
    <vue-qr text="test test test test test test " :gifBgSrc="require('@/assets/gif/scare.gif')" :size="300"></vue-qr>
    <vue-qr text="test test test test test " :gifBgSrc="require('@/assets/gif/scare.gif')" :size="300" backgroundDimming="rgb(255,0,0)" colorDark="rgb(0,0,0)" :dotScale="0.5"></vue-qr>
    <vue-qr text="test"></vue-qr>
  </div>
</template>

<script>
  import VueQr from "vue-qr";
  export default {
    data() {
      return {
        src: require("@/assets/img/bg1.png"),
        src2: require("@/assets/img/avatar.png"),
        src3: require("@/assets/img/bg2.jpg"),
        src4: require("@/assets/img/bg3.jpg"),
      };
    },
    components: {
      VueQr
    },
    methods:{
      test(url, id) {
            console.log(url, id);
        }
    }
  };
</script>

