<template>
  <!-- <div>  法1,2
    <div class="box">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
      </ul>
    </div>
  </div> -->

  <div class="sec02">
    <div class="box">
      <ul>
        <li><div>1</div></li>
        <li><div>2</div></li>
        <li><div>3</div></li>
        <li><div>4</div></li>
        <li><div>5</div></li>
        <li><div>6</div></li>
        <li><div>7</div></li>
        <li><div>8</div></li>
        <li><div>9</div></li>
      </ul>
    </div>
  </div>
</template>

<script>
// https://www.imooc.com/article/266123
export default {};
</script>

<style lang="scss" scoped>
/* 基础 1,2 */
// .box {
//   background: #e4f7fd61;
//   border: 2px solid #0786ada1;
//   border-radius: 8px;
// }
// ul {
//   padding: 0;
// }
// .box li {
//   list-style: none;
//   text-align: center;
//   line-height: 200px;
//   background: rgba(146, 203, 230, 0.65);
//   border-radius: 8px;
// }
// 法1
// .box{
//      width: 940px;
// }
//  ul{
//      overflow: hidden;
//      margin-right: -20px;
//      margin-bottom: -20px;
//      margin-top: 0;
// }
//  .box li{
//      float: left;
//      width: 300px;
//      height: 200px;
//      margin-right: 20px;
//      margin-bottom: 20px;
// }

// 法2
// .box{
//      width: 640px;
//      overflow: hidden;
// }
//  ul{
//      width: 660px;
//      overflow: hidden;
//      margin-bottom: -20px;
//      margin-top: 0;
// }
//  .box li{
//      float: left;
//      width: 200px;
//      height: 200px;
//      margin-right: 20px;
//      margin-bottom: 20px;
// }

// 法3
box{
     padding: 20px 10px;
     display: inline-block;
     background: #ff000026;
}
 ul{
     overflow: hidden;
     width: 600px;
     margin-bottom: -10px;
     margin-top: 0;
     background: none;
}
 li{
     list-style: none;
     float: left;
     width: 198px;
    /*可以用百分比*/
     height: 198px;
    /*可以用百分比*/
     margin-bottom: 10px;
     border: 1px solid red;
}
 li > div{
     background: rgba(255, 0, 0, 0.24);
     margin: 0 10px;
     border-radius: 8px;
     text-align: center;
     line-height: 198px;
}
</style>


