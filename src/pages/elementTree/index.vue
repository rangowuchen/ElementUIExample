<template>
    <div>
        <!-- 转自 https://www.jianshu.com/p/4e0ecb0f796d -->
        <el-tree ref="tree" :data="treeMenus" default-expand-all :props="multiProps" :show-checkbox="true" node-key="id" highlight-current :expand-on-click-node="true" :default-checked-keys="checkedId" :check-strictly="true" @check="clickDeal">
        </el-tree>
        <el-button @click='clickMe'>点我</el-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                checkedId: [1,4,9,1000],
                treeMenus: [{
                        id: 1,
                        parentId: -1,
                        label: "一级 1",
                        children: [{
                                id: 4,
                                parent: 1,
                                label: "二级 1-1",
                                children: [{
                                        id: 9,
                                        parentId: 4,
                                        label: "三级 1-1-1",
                                        children: [{
                                                id: 1000,
                                                parentId: 9,
                                                label: "三级 1000-1-1",
                                                children: []
                                            },
                                            {
                                                id: 1001,
                                                parentId: 9,
                                                label: "三级 1001-1-1",
                                                children: [{
                                                        id: 2000,
                                                        parentId: 1001,
                                                        label: "三级 2000-1-1",
                                                        children: []
                                                    },
                                                    {
                                                        id: 2001,
                                                        parentId: 1001,
                                                        label: "三级 2001-1-1",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id: 10,
                                        parentId: 4,
                                        label: "三级 1-1-2",
                                        children: []
                                    }
                                ]
                            },
                            {
                                id: 20,
                                parentId: 1,
                                label: "123",
                                children: []
                            },
                            {
                                id: 25,
                                parentId: 1,
                                label: "12456",
                                children: []
                            }
                        ]
                    },
                    {
                        parentId: -1,
                        id: 2,
                        label: "一级 2",
                        children: [{
                                parentId: 2,
                                id: 5,
                                label: "二级 2-1",
                                children: []
                            },
                            {
                                parentId: 2,
                                id: 6,
                                label: "二级 2-2",
                                children: []
                            }
                        ]
                    },
                    {
                        parentId: -1,
                        id: 3,
                        label: "一级 3",
                        children: [{
                                parentId: 3,
                                id: 7,
                                label: "二级 3-1",
                                children: []
                            },
                            {
                                parentId: 3,
                                id: 8,
                                label: "二级 3-2",
                                children: []
                            }
                        ]
                    }
                ],
                multiProps: {
                    children: "children",
                    label: "label"
                }
            };
        },
        methods: {
            clickMe() {
                var mm = this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys());
                console.log('kkkkkk',mm)
            },
            /**      树形菜单复选框点击事件     **/
            clickDeal(currentObj, treeStatus) {
                // 用于：父子节点严格互不关联时，父节点勾选变化时通知子节点同步变化，实现单向关联。
                let selected = treeStatus.checkedKeys.indexOf(currentObj.id); // -1未选中
                // 选中
                if (selected !== -1) {
                    // 子节点只要被选中父节点就被选中
                    this.selectedParent(currentObj);
                    // 统一处理子节点为相同的勾选状态
                    this.uniteChildSame(currentObj, true);
                }
                // 未选中
                else {
                    // 取消子节点的选中状态触发
                    if (currentObj.parentId !== -1) {
                        this.removeParent(currentObj);
                    }
                    //点击父节点未选中子节点全部取消选中,子节点全部未选中父节点取消选中
                    if (currentObj.children.length !== 0) {
                        this.uniteChildSame(currentObj, false);
                    }
                }
            },
            /**   统一处理子节点为相同的勾选状态  **/
            uniteChildSame(treeList, isSelected) {
                this.$refs.tree.setChecked(treeList.id, isSelected);
                for (let i = 0; i < treeList.children.length; i++) {
                    this.uniteChildSame(treeList.children[i], isSelected);
                }
            },
            /**    统一处理父节点为选中    **/
            selectedParent(currentObj) {
                let currentNode = this.$refs.tree.getNode(currentObj);
                if (currentNode.parent.key !== undefined) {
                    this.$refs.tree.setChecked(currentNode.parent, true);
                    this.selectedParent(currentNode.parent);
                }
            },
            /**    子节点全没选中就取消父级的选中   **/
            removeParent(currentObj) {
                let a = 0;
                let b = 0;
                let currentNode = this.$refs.tree.getNode(currentObj);
                if (currentNode.parent !== null) {
                    if (currentNode.parent.key !== undefined) {
                        this.$refs.tree.setChecked(currentNode.parent, true); //根节点
                        this.removeParent(currentNode.parent); //递归判断子节点
                    }
                }
                //不为0表示为父节点
                if (currentNode.childNodes.length !== 0) {
                    //循环判断父节点下的子节点
                    for (let i = 0; i < currentNode.childNodes.length; i++) {
                        //判断父节点下的子节点是否全为false
                        if (currentNode.childNodes[i].checked === false) {
                            ++a;
                            //a === currentNode.childNodes.length 表明子节点全为false
                            if (a === currentNode.childNodes.length) {
                                //等于 undefined 跳过,不等于继续执行
                                if (currentNode.childNodes[i].parent.key !== undefined) {
                                    this.$refs.tree.setChecked(
                                        currentNode.childNodes[i].parent,
                                        false
                                    ); //父元素设置为false
                                    //循环上级父节点下的子节点
                                    for (let i = 0; i < currentNode.parent.childNodes.length; i++) {
                                        //判断父节点下的子节点是否全为false
                                        if (currentNode.parent.childNodes[i].checked === false) {
                                            ++b;
                                            //b === currentNode.parent.childNodes.length 表明子节点全为false
                                            if (b === currentNode.parent.childNodes.length) {
                                                this.$refs.tree.setChecked(currentNode.parent.key, false); //父元素设置为false
                                                this.removeParent(currentNode.parent); //继续递归循环判断
                                                // console.log(currentNode.parent)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
</script>
