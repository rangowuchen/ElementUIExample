<!--
 * @Author: wuchen
 * @Date: 2019-01-07 14:41:29
 * @LastEditors: wuchen
 * @LastEditTime: 2019-01-07 15:09:21
 * @Description: 平面模式和排序值(父子选择没有关联)
 * @Email: rangowu@163.com
 -->


<template>
    <div class="one">
        <!-- 
            希望分支节点和叶节点不会相互影响。在这种情况下，应使用平面模式，如下所示。
            如果要控制显示所选选项的顺序，请使用sortValueByprop。这个道具有三个选择：
            "ORDER_SELECTED" （默认） - 已选择订单
            "LEVEL" - 选项等级：C🡒BB🡒AAA
            "INDEX" - 期权指数：AAA🡒BB🡒C
         -->
        <treeselect :multiple="true" :options="options" :flat="true" :sort-value-by="sortValueBy" :default-expand-level="1" placeholder="选择时父级与子级不关联" v-model="value" />
        <pre class="result">平面模式和排序值: {{ value }}</pre>
        <p><strong>种类:</strong></p>
        <p class="options">
            <label><input
              type="radio"
              value="ORDER_SELECTED"
              v-model="sortValueBy"
            >Order selected</label>
            <label><input
              type="radio"
              value="LEVEL"
              v-model="sortValueBy"
            >Level</label>
            <label><input
              type="radio"
              value="INDEX"
              v-model="sortValueBy"
            >Index</label>
        </p>
    </div>
</template>

<script>
    import Treeselect from "@riophae/vue-treeselect";
    import "@riophae/vue-treeselect/dist/vue-treeselect.css";
    import util from  "./util.js";
    export default {
        components: {
            Treeselect
        },
        data() {
            return {
                value: [],
                options: util.options,
                sortValueBy: "ORDER_SELECTED"
            };
        }
    };
</script>



