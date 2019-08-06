<template>
    <!--
            功能：
                  1.利用递归组件展示树形结构。
                  2.利用“剪叶子”的算法搜索树的节点。
             -->
    <div>
        <p>这里是首页</p>
        <p><input type="text" placeholder="搜索" @keyup.enter="search($event)"></p>
        <ul v-if="nodeList && nodeList.length > 0">
            <tree-node v-for="(item,index) in nodeList" :key="index" :node="item" :search-text="searchText"></tree-node>
        </ul>
        <div v-else>没有搜索到相应结果</div>
    </div>
</template>
<script>
    import nodeListFunc from "./data.js";
    import treeNode from "./treeNode.vue";
    export default {
        data() {
            return {
                list: [],
                nodeList: [],
                searchText: ""
            };
        },
        components: {
            treeNode
        },
        mounted() {
            this.list = [{
                    name: "学习",
                    children: [{
                            name: "杂志",
                            children: [{
                                name: "电脑杂志",
                                children: [{
                                    name: "大众软件"
                                }]
                            }]
                        },
                        {
                            name: "纸质书"
                        },
                        {
                            name: "电子书",
                            children: [{
                                name: "文学",
                                children: [{
                                        name: "茶馆"
                                    },
                                    {
                                        name: "红与黑"
                                    },
                                    {
                                        name: "傅雷家书"
                                    }
                                ]
                            }]
                        }
                    ]
                },
                {
                    name: "电影",
                    children: [{
                            name: "美国电影3"
                        },
                        {
                            name: "日本电影"
                        },
                        {
                            name: "23"
                        }
                    ]
                }
            ];
        },
        methods: {
            // 对子节点进行搜索。
            searchEach(node, value) {
                let depth = this.getTreeDepth(node);
                let self = this;
                for (let i = 0; i < depth - 1; i++) {
                    // 记录【删除不匹配搜索内容的叶子节点】操作的次数。
                    // 如果这个变量记录的操作次数为0，表示树形结构中，所有的
                    // 叶子节点(不包含只有根节点的情况)都匹配搜索内容。那么就没有必要再
                    // 在循环体里面遍历树了.
                    let spliceCounter = 0;
                    // 遍历树形结构
                    this.traverseTree(node, n => {
                        if (self.isHasChildren(n)) {
                            let children = n.children;
                            let length = children.length;
                            // 找到不匹配搜索内容的叶子节点并删除。为了避免要删除的元素在数组中的索引改变，从后向前循环,
                            // 找到匹配的元素就删除。
                            for (let j = length - 1; j >= 0; j--) {
                                let e3 = children[j];
                                if (!self.isHasChildren(e3) && e3.name.indexOf(value) <= -1) {
                                    children.splice(j, 1);
                                    spliceCounter++;
                                }
                            } // end for (let j = length - 1; j >= 0; j--)
                        }
                    }); // end this.traverseTree(node, n=>{
                    // 所有的叶子节点都匹配搜索内容，没必要再执行循环体了。
                    if (spliceCounter == 0) {
                        break;
                    }
                }
            },
            // 搜索框回车事件响应
            search(e) {
                let self = this;
                // 把树形结构还原成搜索以前的。
                this.nodeList = JSON.parse(JSON.stringify(this.list));
                if (e.target.value == "") {
                    this.searchText = "";
                    return;
                }
                if (this.nodeList && this.nodeList.length > 0) {
                    this.nodeList.forEach((n, i, a) => {
                        self.searchEach(n, e.target.value);
                    });
                    // 没有叶子节点的根节点也要清理掉
                    let length = this.nodeList.length;
                    for (let i = length - 1; i >= 0; i--) {
                        let e2 = this.nodeList[i];
                        if (!this.isHasChildren(e2) &&
                            e2.name.indexOf(e.target.value) <= -1
                        ) {
                            this.nodeList.splice(i, 1);
                        }
                    }
                    this.searchText = e.target.value;
                }
            },
            // 判断树形结构中的一个节点是否具有孩子节点
            isHasChildren(node) {
                let flag = false;
                if (node.children && node.children.length > 0) {
                    flag = true;
                }
                return flag;
            },
            // 通过传入根节点获得树的深度，是 calDepth 的调用者。
            getTreeDepth(node) {
                if (undefined == node || null == node) {
                    return 0;
                }
                // 返回结果
                let r = 0;
                // 树中当前层节点的集合。
                let currentLevelNodes = [node];
                // 判断当前层是否有节点
                while (currentLevelNodes.length > 0) {
                    // 当前层有节点，深度可以加一。
                    r++;
                    // 下一层节点的集合。
                    let nextLevelNodes = new Array();
                    // 找到树中所有的下一层节点，并把这些节点放到 nextLevelNodes 中。
                    for (let i = 0; i < currentLevelNodes.length; i++) {
                        let e = currentLevelNodes[i];
                        if (this.isHasChildren(e)) {
                            nextLevelNodes = nextLevelNodes.concat(e.children);
                        }
                    }
                    // 令当前层节点集合的引用指向下一层节点的集合。
                    currentLevelNodes = nextLevelNodes;
                }
                return r;
            },
            // 非递归遍历树
            traverseTree(node, callback) {
                if (!node) {
                    return;
                }
                var stack = [];
                stack.push(node);
                var tmpNode;
                while (stack.length > 0) {
                    tmpNode = stack.pop();
                    callback(tmpNode);
                    if (tmpNode.children && tmpNode.children.length > 0) {
                        for (let i = tmpNode.children.length - 1; i >= 0; i--) {
                            stack.push(tmpNode.children[i]);
                        }
                    }
                }
            }
        }
    };
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

</style>