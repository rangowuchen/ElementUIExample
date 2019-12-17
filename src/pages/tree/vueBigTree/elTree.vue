<!--
 * @Author: wuchen
 * @Date: 2019-12-16 13:50:09
 * @LastEditors: wuchen
 * @LastEditTime: 2019-12-16 13:50:31
 * @Description: 
 * @Email: rangowu@163.com
 -->
<template>
  <div>
    <div class="main">
      <el-tree :data="tree"></el-tree>
    </div>
    <p class="label">节点总数:{{ flattenTree.length }}</p>
  </div>
</template>

<script>
import treeTools from "./mixins/treeTools";
export default {
  mixins: [treeTools]
};
</script>