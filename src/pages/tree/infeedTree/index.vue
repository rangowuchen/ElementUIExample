<!--
 * @Author: wuchen
 * @Date: 2020-01-02 18:53:31
 * @LastEditors  : wuchen
 * @LastEditTime : 2020-01-02 19:25:17
 * @Description: 
 * @Email: rangowu@163.com
 -->
<template>
  <div class="block">
    <el-tree
      :data="baseData"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent"
    >
    </el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseData: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                  perm: 1
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                  perm: 1
                },
                {
                  id: 111,
                  label: "三级 的覆盖广泛",
                  perm: 1
                },
                {
                  id: 112,
                  label: "三级 山豆根发射点",
                  perm: 1
                },
                {
                  id: 113,
                  label: "三级 士大夫大师傅",
                  perm: 1
                },
                {
                  id: 114,
                  label: "三级 大师傅士大夫",
                  perm: 1
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ]
    };
  },
  methods: {
    renderContent(h, { node, data }) {
      let className = "";
      if (data.perm == 1) {
        className = "btnType";
      }
      return (<div class={className}>{data.label}</div>);
    },
    changeTreeClass() {
        // 特殊标识的样式修改
      var classDomList = document.getElementsByClassName("btnType"); // 改变这几个样式
      for (var i = 0; i < classDomList.length; i++) {
        //   当前节点的父级
        classDomList[i].parentNode.style.cssText = "float: left";
        // 树的一行
        classDomList[i].parentNode.parentNode.parentNode.style.marginLeft =
          "70px";
      }
    }
  },
  mounted(){
      this.changeTreeClass();
  }
};
</script>