<template>

    <li>
        <!-- 显示当前节点名称 -->
        <span v-html="nodeName"></span>
        
        <!-- 如果存在孩子节点，循环子节点数组，并递归调用本组件。 -->
        <ul v-if="isHasChildren">
            <tree-node v-for="(item,index) in node.children" :key="index" :node="item"
                :search-text="searchText">
            </tree-node>
        </ul>
    </li>
</template>
<script>
    export default {
        name:"tree-node",
        props:["node", "searchText"],
        // data(){
        //     return {};
        // }
        computed:{
            // 判断当前节点是否存在孩子节点
            isHasChildren(){
                let flag = false;
                if (this.node.children && this.node.children.length > 0) {
                    flag = true;
                }
                return flag;
            },

            // 如果当前节点名称，有文字和搜索内容匹配，就把匹配的文字标红。
            // 反之，则正常显示节点名称。
            nodeName(){
                if (this.searchText == undefined || this.searchText == "" || this.searchText == null) {
                    return this.node.name;
                }
                if (this.node.name.indexOf(this.searchText) <= -1) {
                    return this.node.name;
                }
                return this.replaceAll(this.node.name, this.searchText, 
                        "<span style='color:red;'>" + this.searchText + "</span>");
            }
        },
        methods:{
            /**
             * 替换掉原字符串中所有的子字符串。不使用正则表达式的实现。
             * 当遇到特殊字符的时候，不用输入适应正则的转义。
             * @param String str 原字符串
             * @param String substr  要被替换的子串
             * @param String replacement 新的子串
             */
            replaceAll(str, substr, replacement){
                if (!str) {
                    return "";
                }
                return str.split(substr).join(replacement);
            }
        }
    };
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  
</style>