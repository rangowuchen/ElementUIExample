<!--
 * @Author: wuchen
 * @Date: 2019-09-09 14:25:59
 * @LastEditors: wuchen
 * @LastEditTime: 2019-09-10 20:35:14
 * @Description: https://blog.csdn.net/qq_33769914/article/details/81562278
 * @Email: rangowu@163.com
 -->
<template>
  <div>
    <el-tree
      :data="roledata"
      show-checkbox
      default-expand-all
      node-key="id"
      ref="tree"
       highlight-current
      :props="defaultProps"
      :default-checked-keys="choosedRole"
      :render-content="renderContent"
      @check-change="getCheckedKeys"
    ></el-tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      roledata: [
        {
          level: "1",
          id: "100000",
          label: "权限管理",
          children: [
            {
              level: "2",
              id: "100100",
              label: "账户管理",
              children: [
                {
                  level: "3",
                  id: "100101",
                  label: "修改"
                },
                {
                  level: "3",
                  id: "100102",
                  label: "删除"
                },
                {
                  level: "3",
                  id: "100103",
                  label: "增加"
                }
              ]
            },
            {
              level: "2",
              id: "100200",
              label: "角色管理",
              children: [
                {
                  level: "3",
                  id: "100201",
                  label: "修改"
                },
                {
                  level: "3",
                  id: "100202",
                  label: "删除"
                },
                {
                  level: "3",
                  id: "100203",
                  label: "增加"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      choosedRole: []
    };
  },
  mounted() {
    this.api();
    var _levelname = document.getElementsByClassName("levelname"); //levelname是上面的最底层节点的名字，查询，新增。。
    console.log(_levelname);
    // setTimeout(function() {
    //等到树都加载完了再去执行的这里
    for (var i = 0; i < _levelname.length; i++) {
      _levelname[i].parentNode.style.cssFloat = "left"; //最底层的节点，包括多选框和名字都让他左浮动
      _levelname[i].parentNode.style.styleFloat = "left";
    }
    // }, 2000);
  },
  methods: {
    renderContent(h, { node, data, store }) {
      let classname = "";
      if (node.level == 3) {
        classname = "levelname";
      }
      return (
        <span class={classname}>
          <span> {node.label} </span>
        </span>
      );
    },
    getRolePowerLists() {
      //被选中的
      this.listLoadingRole = true;
      getSchooRolePowerList({
        roleid: this.roleid
      }).then(res => {
        if (res.code == 1) {
          this.listLoadingRole = false;
          let data = res.data;
          let arr = [];
          for (let item of data) {
            arr.push(item);
          }
          this.$nextTick(() => {
            this.$refs.tree.setCheckedKeys(arr); //获取已经设置的资源后渲染
          });
          this.flag = false; //为了避免一进来就调节点选中状态变化的函数  。先让他为false这样就不走下面的函数访问接口啦
          var that = this;
          setTimeout(function() {
            that.flag = true;
          }, 500);
        }
      });
    },
    getCheckedKeys(data, checked, indeterminate) {
      //节点选中状态变化的函数
      if (this.flag == true) {
        var that = this;
        that.flag = false;
        setTimeout(
          //延时加载，当第一次进去flag的true变成了false。所以第二次就不走这里了。过了500ms他去执行了访问接口的函数，这个时候
          function() {
            that.api(); //访问接口给后台传数据是这个
          },
          500
        );
      }
    },
    api() {
      this.flag = true;
      //权限选择接口
      //   let para = {
      //     roleid: this.roleid,
      //     actionid: this.$refs.tree.getCheckedKeys(true).toString()
      //   };
      //   addSchoolRolePower(para).then(res => {
      //     //添加或者取消权限
      //     if (res.code == 1) {
      //       this.$message({
      //         message: res.msg,
      //         type: "success"
      //       });
      //       this.flag = true; //这里很重要。当他进来为true，你才可以再去访问那个延时的函数
      //     } else {
      //       this.$message({
      //         message: res.msg,
      //         type: "error"
      //       });
      //     }
      //   });
    }
  }
};
</script>

<style lang="scss">
.el-tree-node__content {
  margin-bottom: 10px;
}
.el-tree-node__content span.levelname {
  float: left;
  width: 126px;
}
</style>