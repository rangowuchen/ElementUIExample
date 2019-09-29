<!--
 * @Author: wuchen
 * @Date: 2019-01-04 16:16:07
 * @LastEditors: wuchen
 * @LastEditTime: 2019-09-10 19:22:49
 * @Description: https://vue-treeselect.js.org
 * @Email: rangowu@163.com
 -->
<template>
  <div>
    <base-function></base-function>
    <more-function></more-function>
    <delayed-loading1></delayed-loading1>
    <delayed-loading2></delayed-loading2>
    <async-search></async-search>
    <fatherson-unconnect></fatherson-unconnect>
    <fatherson-connect></fatherson-connect>
    <disable-branch-nodes></disable-branch-nodes>
  </div>
</template>

<script>
  import BaseFunction from './components/baseFunction'
  import MoreFunction from './components/moreFunction'
  import DelayedLoading1 from './components/delayedLoading1'
  import DelayedLoading2 from './components/delayedLoading2'
  import AsyncSearch from './components/asyncSearch'
  import FathersonUnconnect from './components/fathersonUnconnect'
  import FathersonConnect from './components/fathersonConnect';
  import DisableBranchNodes from './components/disable-branch-nodes'
  

  export default {
    components: { BaseFunction,MoreFunction,DelayedLoading1,DelayedLoading2,AsyncSearch,FathersonUnconnect,FathersonConnect,DisableBranchNodes },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
@import './components/common.scss'
</style>
