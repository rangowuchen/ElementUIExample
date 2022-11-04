<!--
 * @Author: wuchen
 * @Date: 2022-11-03 14:37:48
 * @LastEditors: wuchen
 * @LastEditTime: 2022-11-04 18:18:07
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
  <div class="canvas">
    <div class="canvas-img" v-for="(item,index) in imageList" :key="item">
      <div>
        <img :src="item" alt="">
        <span class="canvas-img-hover">
          <i class="el-icon-zoom-in" @click="handleView(item)"></i>
          <i class="el-icon-delete" @click="handleDel(index)"></i>
        </span>
      </div>
    </div>
    <label class="canvas-label">
      <input class="canvas-label-input" type="file" @change="inputChange($event)">
      <div class="upload"></div>
    </label>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ACCEPT: ['image/jpg', 'image/png', 'image/jpeg'],
        MAXSIZE: 3 * 1024 * 1024,
        MAXSIZE_STR: '3MB',
        imageList: [],
        dialogVisible: false,
        dialogImageUrl: ''
      }
    },
    methods: {
      inputChange(e) {
        const [file] = e.target.files;
        if (!file) {
          return;
        }
        const {
          type: fileType,
          size: fileSize
        } = file;
        if (!this.ACCEPT.includes(fileType)) {
          alert(`不支持[${fileType}]文件类型！`);
          e.target.value = '';
          return;
        } // 图片类型检查
        if (fileSize > this.MAXSIZE) {
          alert(`文件超出${this.MAXSIZE_STR}！`);
          e.target.value = '';
          return;
        } // 图片容量检查
        // 压缩图片
        this.convertImageToBase64(file, (base64Image) => this.compress(base64Image, this.uploadToServer));
      },
      convertImageToBase64(file, callback) {
        let reader = new FileReader();
        reader.addEventListener('load', function (e) {
          const base64Image = e.target.result;
          callback && callback(base64Image);
          reader = null;
        });
        reader.readAsDataURL(file);
      },

      compress(base64Image, callback) {
        let maxW = 1024;
        let maxH = 1024;
        const image = new Image();
        image.addEventListener('load', function (e) {
          let ratio; // 图片的压缩比
          let needCompress = false; // 是否需要压缩
          if (maxW < image.naturalWidth) {
            needCompress = true;
            ratio = image.naturalWidth / maxW;
            maxH = image.naturalHeight / ratio;
          } // 经过处理后，实际图片的尺寸为 1024 * 640
          if (maxH < image.naturalHeight) {
            needCompress = true;
            ratio = image.naturalHeight / maxH;
            maxW = image.naturalWidth / ratio;
          }
          if (!needCompress) {
            maxW = image.naturalWidth;
            maxH = image.naturalHeight;
          } // 如果不需要压缩，需要获取图片的实际尺寸
          const canvas = document.createElement('canvas');
          canvas.setAttribute('id', '__compress__');
          canvas.width = maxW;
          canvas.height = maxH;
          canvas.style.visibility = 'hidden';
          document.body.appendChild(canvas);

          const ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, maxW, maxH);
          ctx.drawImage(image, 0, 0, maxW, maxH);
          const compressImage = canvas.toDataURL('image/jpeg', 0.9);
          callback && callback(compressImage);
          canvas.remove();
        });
        image.src = base64Image;
      },
      //  处理后的数据传给后端
      uploadToServer(compressImage) {
        this.imageList.push(compressImage)
        console.log('upload to server...', this.imageList);
        
      },
      handleView(file){
        console.log(file)
        this.dialogImageUrl = file;
        this.dialogVisible = true;
      },
      handleDel(index){
        this.imageList.splice(index,1)
      }
    }
  }

</script>
<style lang="scss" scoped>
  .canvas {
    padding: 10px;
    text-align: left;

    &-img {
      width: 100px;
      height: 100px;
      border-radius: 6px;
      overflow: hidden;
      box-sizing: border-box;
      margin: 0 8px 8px 0;
      border: 1px solid #c0ccda;
      position: relative;
      display: inline-block;
      img{
        width: 100%;
        height: 100%;
      }
      &-hover {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        text-align: center;
        color: #fff;
        opacity: 0;
        font-size: 20px;
        background: rgba(0,0,0,.5);
        transition: opacity .3s;
        i {
          display: inline-block;
          text-align: center;
          cursor: pointer;
        }
      }
      &-hover:hover {
        opacity: 1;
      }
      &-hover:after {
        display: inline-block;
        content: "";
        height: 100%;
        vertical-align: middle;
      }
    }

    &-label {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      display: inline-block;
      vertical-align: top;
      &-input {
        display: none;
      }
    }
  }
  .upload {
    width: 100px;
    height: 100px;
  }
  .upload::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 40px;
    margin-left: -20px;
    margin-top: -.5px;
    border-top: 1px solid;
  }
  .upload::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    height: 40px;
    margin-left: -.5px;
    margin-top: -20px;
    border-left: 1px solid;
  }

</style>
