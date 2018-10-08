<template>
  <div>
    <div class="pie"></div>
    <div class="pie1"></div>
  </div>
</template>

<style lang="scss" scoped>
div div{
  display: inline-block;
  margin: 20px 80px;
}
// IE9以下不支持linear-gradient,可以使用伪元素来实现
.pie {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #e85b92;
  background-image: linear-gradient(to right, transparent 50%, currentColor 0);
  color: #f2f3f4;
}

.pie::before {
  content: "";
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: inherit;
  transform-origin: left;
  animation: spin 3s linear infinite, bg 6s step-end infinite;
}

// 公用部分
@keyframes spin {
  to {
    transform: rotate(0.5turn);
  }
}
@keyframes bg {
  50% {
    background: currentColor;
  }
}

// 伪元素
.pie1 {
  width: 100px; height: 100px;
  border-radius: 50%;
  background: #e85b92;
  color: #f2f3f4;
  position: relative;
}
.pie1::after {
  z-index: 1;
  content: '';
  display: block;
  background: currentColor;
  position: absolute;
  left: 50%;
  top: 0;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  width: 50%;
  transform-origin: left;
}
.pie1::before {
  content: '';
  display: block;
  z-index: 10;
  position: absolute;
  top: 0;
  width: 50%;
  left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: inherit;;
  transform-origin: left;
  animation: spin 3s linear infinite, bg 6s step-end infinite;
}
</style>

