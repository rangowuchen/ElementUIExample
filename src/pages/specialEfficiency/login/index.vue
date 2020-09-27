<!--
 * @Author: wuchen
 * @Date: 2020-07-06 19:52:20
 * @LastEditors: wuchen
 * @LastEditTime: 2020-07-07 10:31:48
 * @Description: https://www.jianshu.com/p/8097bb3d9d49
 * @Email: rangowu@163.com
--> 
<template>
  <div class="homepage-hero-module">
    <div class="video-container">
      <div :style="fixStyle" class="filter"></div>
      <video :style="fixStyle" autoplay loop class="fillWidth" v-on:canplay="canplay">
        <source src="1.mp4" type="video/mp4"/>
        浏览器不支持 video 标签，建议升级浏览器。
        <source src="PATH_TO_WEBM" type="video/webm"/>
        浏览器不支持 video 标签，建议升级浏览器。
      </video>
      <div class="poster hidden" v-if="!vedioCanPlay">
        <img :style="fixStyle" src="PATH_TO_JPEG" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import mp4Path from "./1.mp4"
  import webmPath from "./1.mp4"
  import jpegPath from "./1.jpg"
  export default {
    name: 'login',
    data() {
      return {
        vedioCanPlay: false,
        fixStyle: '',
        PATH_TO_MP4: '',
        PATH_TO_WEBM: '',
        PATH_TO_JPEG: '',
      }
    },
    created() {
        this.PATH_TO_JPEG = jpegPath
        this.PATH_TO_MP4 = mp4Path
        this.PATH_TO_WEBM = webmPath
    },
    methods: {
      canplay() {
        this.vedioCanPlay = true
      }
    },
    mounted: function() {
      window.onresize = () => {
        const windowWidth = document.body.clientWidth
        const windowHeight = document.body.clientHeight
        const windowAspectRatio = windowHeight / windowWidth
        let videoWidth
        let videoHeight
        if (windowAspectRatio < 0.5625) {
          videoWidth = windowWidth
          videoHeight = videoWidth * 0.5625
          this.fixStyle = {
            height: windowWidth * 0.5625 + 'px',
            width: windowWidth + 'px',
            'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
            'margin-left': 'initial'
          }
        } else {
          videoHeight = windowHeight
          videoWidth = videoHeight / 0.5625
          this.fixStyle = {
            height: windowHeight + 'px',
            width: windowHeight / 0.5625 + 'px',
            'margin-left': (windowWidth - videoWidth) / 2 + 'px',
            'margin-bottom': 'initial'
          }
        }
      }
      window.onresize()
    }
  }
</script>
<style scoped>
  .homepage-hero-module,
  .video-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .video-container .poster img,
  .video-container video {
    z-index: 0;
    position: absolute;
  }

  .video-container .filter {
    z-index: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
  }
</style>