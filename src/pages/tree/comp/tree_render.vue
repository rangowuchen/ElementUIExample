/* * @Author: wangc * @Date: 2018-08-02 12:04:33 * @LastEditors: wangc * @LastEditTime: 2018-08-02 16:19:41 * @Description:
* @Email: wangchao@ikuijia.com */

<template>
  <div>
    <div class="tree-expand">
      <span class="tree-label" v-show="DATA.isEdit">
        <el-input class="edit" size="mini" autofocus v-model="DATA.name" :ref="'treeInput'+DATA.id" @click.stop.native="nodeEditFocus"
          @blur.stop="nodeEditPass(STORE,DATA,NODE)" @keyup.enter.stop.native="nodeEditPass(STORE,DATA,NODE)"></el-input>
          <el-button size="mini" @click.stop="saveName(STORE,DATA,NODE)" v-show="DATA.isEdit">确认</el-button>
      </span>

 
      <span v-show="!DATA.isEdit" :class="[DATA.id > maxexpandId ? 'tree-new tree-label' : 'tree-label']">
        <span>{{DATA.name}}( {{DATA.num}} 人 ) </span>
      </span>

      <span class="tree-btn" v-show="!DATA.isEdit">
        <i class="el-icon-plus" @click.stop="nodeAdd(STORE,DATA,NODE)"></i>
        <i class="el-icon-edit" @click.stop="nodeEdit(STORE,DATA,NODE)"></i>
        <i class="el-icon-delete" @click.stop="nodeDel(STORE,DATA,NODE)"></i>
      </span>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'treeExpand',
    props: ['NODE', 'DATA', 'STORE', 'maxexpandId'],
    methods: {
      saveName(s, d, n) {
        this.$emit('saveName', s, d, n)
      },
      nodeAdd(s, d, n) { //新增
        this.$emit('nodeAdd', s, d, n)
      },
      nodeEdit(s, d, n) { //编辑  
   
         this.$set(d,'isEdit',true) 
        this.$nextTick(() => {

          this.$refs['treeInput' + d.id].$refs.input.focus()
  
        })
        this.$emit('nodeEdit', s, d, n)
      },
      nodeDel(s, d, n) { //删除
        this.$emit('nodeDel', s, d, n)
      },
      nodeEditPass(s, d, n) { //编辑完成
       
      },
      nodeEditFocus() {
        //阻止点击节点的事件冒泡
      },
    }
  }
</script>

<style>

  .tree-expand .tree-label.tree-new {
    font-weight: 600;
  }

  .tree-expand .tree-label {
    font-size: 0.9em;
  }

  .tree-expand .tree-label .edit {
    width: 80%;
  }

  .tree-expand .tree-btn {
    display: none;
    position: relative;
    left: 25%;
  }

  .tree-expand .tree-btn i {
    color: #14b414;
    font-size: 0.9em;
    margin-right: 16px;
  }

  .expand-tree .is-current>.el-tree-node__content .tree-btn,
  .expand-tree .el-tree-node__content:hover .tree-btn {
    display: inline-block;
  }
</style>