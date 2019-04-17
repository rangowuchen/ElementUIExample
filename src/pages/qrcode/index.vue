<template>
  <div>
    <vue-qr
      :logoSrc="src2"
      text="hello world"
      :size="200"
      :logoMargin='5'
      logoBackgroundColor='#fff'
    ></vue-qr>
    <vue-qr
      text="Hello world!"
      colorDark="red"
      colorLight="blue"
      backgroundColor="green"
      :logoCornerRadius='60'
    ></vue-qr>
  </div>
</template>

<script>
import VueQr from "vue-qr";
export default {
  data() {
    return {
        src2:require("@/assets/logo.png")
    };
  },
  components: {VueQr}
};
</script>

