/* * @Author: wangc * @Date: 2018-08-02 12:04:17 * @LastEditors: wangc * @LastEditTime: 2018-08-02 12:06:53 * @Description:
* @Email: wangchao@ikuijia.com */

<template>
    <div class="organization">
        <section>
            <div class="left-head">
                <span>公司</span>
                <span>xxxx</span>
                <span @click="showSetDialog(1)" class="el-icon-setting"></span>
            </div>
            <div class="left-tree">
                <el-tree :default-expand-all="true" show-checkbox @check-change="handleCheckChange" ref="expandMenuList" class="expand-tree" :data="setTree" node-key="id" highlight-current :props="defaultProps" :filter-node-method="filterNode" :expand-on-click-node="false" :render-content="renderContent" :default-expanded-keys="defaultExpandKeys" @node-click="handleNodeClick">
                </el-tree>
            </div>
        </section>

        <!-- 设置主管 -->
        <el-dialog :title="setTitle" :visible.sync="setDialog" width="20%">
            <div v-if="setTitle == '设置'" class="settingDialog" style="margin-bottom: 20px;">
                <span>
                    <i>*</i>企业名称:</span>
                <el-input disabled v-model="TreeData.name" placeholder="请输入内容"></el-input>
            </div>
            <div v-if="setTitle == '设置'" class="settingDialog">
                <span>设置主管:</span>
                <el-select filterable placeholder="请选择" v-model="masterId">
                    <el-option v-for="item in allUsers" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </div>

            <div v-if="setTitle == '添加部门'" class="settingDialog" style="margin-bottom: 20px;">
                <span>
                    <i>*</i>部门名称:</span>
                <el-input v-model="addOrganizeName" placeholder="请输入内容"></el-input>
            </div>
            <div v-if="setTitle == '添加部门'" class="settingDialog">
                <span>
                    <i>*</i>上级部门:</span>
                <el-select filterable placeholder="请选择部门" v-model="addParentId">
                    <el-option v-for="item in allOffice" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="setDialog = false">取 消</el-button>
                <el-button type="primary" @click="saveSetDialog">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import TreeRender from "./comp/tree_render";
export default {
  name: "tree",
  data() {
    return {
      resetPsdData: [],
      roleIds: [],
      //批量调整部门id
      selectOfficeId: "",
      //table已选id
      selectDataArr: [],
      //table已选数据
      selectDataArrAll: [],
      isFromAdd: false,
      //主管id
      masterId: "",
      // 公司所有人员
      allUsers: [],
      //公司所有部门
      allOffice: [],
      //新增部门上级id
      addParentId: "",
      //新增部门名称
      addOrganizeName: "",
      //已选节点
      selectTreeData: "",
      //面包屑数组
      breadArray: [],
      //调整部门/角色
      transTitle: "",
      transferDialog: false,
      transData: [],
      transToData: [],
      //设置主管
      name: "",
      options: [],
      setDialog: false,
      setTitle: "",
      // 重置密码提示
      resetPsdTip: false,
      // 新增信息
      userData: {
        name: null,
        phone: null,
        workNo: null,
        createTime: null,
        officeId: null,
        mobile: null,
        userType: null,
        email: null,
        remarks: null,
        loginName: null,
        password: null,
        roleIds: []
      },
      isAdd: false,
      addTitle: "",
      addDialog: false,
      tableData: [],
      treeSearch: "",
      //  maxexpandId: api.maxexpandId, //新增节点开始id
      //  non_maxexpandId: api.maxexpandId, //新增节点开始id(不更改)
      isLoadingTree: false, //是否加载节点树
      setTree: [
        {
          id: "1",
          label: "功能菜单",
          href: "111111",
          name: "功能菜单",
          meta: {
            role: ["admin"]
          },
          children: [
            {
              id: "2",
              label: "系统设置",
              href: "22222",
              name: "系统设置",
              meta: {
                role: ["admin"]
              },
              children: [
                {
                  id: "13",
                  label: "机构用户",
                  href: "111111",
                  name: "机构用户",
                  meta: {
                    role: ["admin"]
                  },
                  children: [
                    {
                      id: "14",
                      label: "区域管理",
                      href: "/sys/area/form",
                      name: "区域管理",
                      meta: {
                        role: ["admin"]
                      },
                      children: [
                        {
                          id: "15",
                          label: "查看",
                          href: "111111",
                          name: "查看",
                          meta: {
                            role: ["admin"]
                          },
                          children: []
                        },
                        {
                          id: "16",
                          label: "修改",
                          href: "111111",
                          name: "修改",
                          meta: {
                            role: ["admin"]
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      id: "17",
                      label: "机构管理",
                      href: "/sys/office/form",
                      name: "机构管理",
                      meta: {
                        role: ["admin"]
                      },
                      children: [
                        {
                          id: "18",
                          label: "查看",
                          href: "22222",
                          name: "查看",
                          meta: {
                            role: ["admin"]
                          },
                          children: []
                        },
                        {
                          id: "19",
                          label: "修改",
                          href: "22222",
                          name: "修改",
                          meta: {
                            role: ["admin"]
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      id: "20",
                      label: "用户管理",
                      href: "/sys/user/form",
                      name: "用户管理",
                      meta: {
                        role: ["admin"]
                      },
                      children: [
                        {
                          id: "21",
                          label: "查看",
                          href: "",
                          name: "查看",
                          meta: {
                            role: ["admin"]
                          },
                          children: []
                        },
                        {
                          id: "22",
                          label: "修改",
                          href: "",
                          name: "修改",
                          meta: {
                            role: ["admin"]
                          },
                          children: []
                        }
                      ]
                    }
                  ]
                },
                {
                  id: "3",
                  label: "系统设置",
                  href: "",
                  name: "系统设置",
                  meta: {
                    role: ["admin"]
                  },
                  children: [
                    {
                      id: "10",
                      label: "字典管理",
                      href: "/sys/dict/form",
                      name: "字典管理",
                      meta: {
                        role: ["admin"]
                      },
                      children: [
                        {
                          id: "11",
                          label: "查看",
                          href: "111111",
                          name: "查看",
                          meta: {
                            role: ["admin"]
                          },
                          children: []
                        },
                        {
                          id: "12",
                          label: "修改",
                          href: "111111",
                          name: "修改",
                          meta: {
                            role: ["admin"]
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      id: "4",
                      label: "菜单管理",
                      href: "/sys/menu/form",
                      name: "菜单管理",
                      meta: {
                        role: ["admin"]
                      },
                      children: [
                        {
                          id: "5",
                          label: "查看",
                          href: "",
                          name: "查看",
                          meta: {
                            role: ["admin"]
                          },
                          children: []
                        },
                        {
                          id: "6",
                          label: "修改",
                          href: "",
                          name: "修改",
                          meta: {
                            role: ["admin"]
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      id: "7",
                      label: "角色管理",
                      href: "/sys/role/form",
                      name: "角色管理",
                      meta: {
                        role: ["admin"]
                      },
                      children: [
                        {
                          id: "8",
                          label: "查看",
                          href: "",
                          name: "查看",
                          meta: {
                            role: ["admin"]
                          },
                          children: []
                        },
                        {
                          id: "9",
                          label: "修改",
                          href: "",
                          name: "修改",
                          meta: {
                            role: ["admin"]
                          },
                          children: []
                        }
                      ]
                    }
                  ]
                },
                {
                  id: "67",
                  label: "日志查询",
                  href: "",
                  name: "日志查询",
                  meta: {
                    role: ["admin"]
                  },
                  children: [
                    {
                      id: "68",
                      label: "日志查询",
                      href: "/sys/log/form",
                      name: "日志查询",
                      meta: {
                        role: ["admin"]
                      },
                      children: []
                    },
                    {
                      id: "84",
                      label: "连接池监视",
                      href: "/../druid",
                      name: "连接池监视",
                      meta: {
                        role: ["admin"]
                      },
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ], //节点树数据
      TreeData: {}, //节点树总数据
      defaultProps: {
        children: "children",
        label: "name"
      },
      defaultExpandKeys: [] //默认展开节点列表
    };
  },
  watch: {
    treeSearch(val) {
      this.$refs.expandMenuList.filter(val);
    }
  },
  methods: {
      saveSetDialog(){
          alert('确定')
      },
      // 已选择节点
    handleCheckChange(data, checked, indeterminate) {
      console.log("已选择节点", data, checked, indeterminate);
    },
    filterNode(value, data, node) {
      // 树节点过滤
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    },
    //设置树render
    renderContent(h, { node, data, store }) {
      //加载节点
      let that = this;
      return h(TreeRender, {
        props: {
          DATA: data,
          NODE: node,
          STORE: store
          // maxexpandId: that.non_maxexpandId
        },
        on: {
          nodeAdd: (s, d, n) => that.handleAdd(s, d, n),
          nodeEdit: (s, d, n) => that.handleEdit(s, d, n),
          nodeDel: (s, d, n) => that.handleDelete(s, d, n),
          saveName: (s, d, n) => that.handSaveName(s, d, n)
        }
      });
    },
    //点击节点
    handleNodeClick(s, d, n) {
      this.selectTreeData = s;
      console.log("点击节点", this.selectTreeData);
      var arr = [];
      //面包屑
      function fun(a) {
        if (a.data.name) {
          arr.unshift(a.data.name);
        }
        if (a.parent && a.data.name) {
          fun(a.parent);
        }
      }
      fun(d);
      this.breadArray = arr;
      //根据组织机构查询公司人员
      this.listData.officeId = s.id;
      this.getTableData();
    },


    
    
    
    
    
    // 新增弹窗关闭
    addDialogClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
          this.listQuery(this.listData);
        })
        .catch(_ => {});
    },
    

    
    //保存重命名
    handSaveName(s, d, n) {
        console.log('保存重命名',s,d,n);
        alert('保存调取接口')
    //   updateOfficeFunc({
    //     //  corpCode: this.TreeData.corpCode,
    //     // corpName: this.TreeData.corpName,
    //     createTime: this.TreeData.createTime,
    //     //  createUserId: this.TreeData.createUserId,
    //     id: n.key,
    //     name: n.label
    //   }).then(res => {
    //     if (res.success) {
    //       this.$message({
    //         message: "保存成功",
    //         type: "success"
    //       });
    //       d.isEdit = false; //放弃编辑状态
    //       this.getTreeDate();
    //       this.getTableData();
    //     } else {
    //       this.$message({
    //         message: res.message,
    //         type: "warning"
    //       });
    //     }
    //   });
    },
    //显示设置弹窗
      showSetDialog(flag) {
        if (flag == '1') {
          this.setTitle = '设置'
        } else {
          this.setTitle = '添加部门'
          this.addParentId = this.selectTreeData.parent.key 
        }
        this.setDialog = true
      },
    

    //增加节点
    handleAdd(s, d, n) {
      console.log("增加节点", s, d, n);
      this.selectTreeData = n;
      this.showSetDialog(2);
    },
    //编辑节点
    handleEdit(s, d, n) {
      console.log("编辑节点", s, d, n);
    },
    //删除节点
    handleDelete(s, d, n) {
      console.log("删除节点", s, d, n);
      this.$confirm("是否删除此节点？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteOfficeFunc({
            ids: [d.id],
            active: 2
          }).then(res => {
            if (res.success) {
              this.$message({
                message: "删除成功",
                type: "success"
              });
              this.getTreeDate();
              this.getTableData();
            } else {
              this.$message({
                message: res.message,
                type: "warning"
              });
            }
          });
        })
        .catch(() => {
          return false;
        });
    }
  }
};
</script>
<style>
.right-head .el-breadcrumb__inner:hover {
  color: #606266;
  cursor: text;
}
</style>

<style lang="scss" scoped>
@import "./organizationChart.scss";
.wc-inputKey {
  color: $at-gray !important;
  width: 42px;
  display: inline-block;
  text-align: justify;
  text-justify: distribute-all-lines; /*ie6-8*/
  text-align-last: justify; /* ie9*/
  -moz-text-align-last: justify; /*ff*/
  -webkit-text-align-last: justify; /*chrome 20+*/
}
</style>