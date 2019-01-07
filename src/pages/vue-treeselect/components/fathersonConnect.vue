<!--
 * @Author: wuchen
 * @Date: 2019-01-07 14:41:29
 * @LastEditors: wuchen
 * @LastEditTime: 2019-01-07 15:09:21
 * @Description: 防止价值组合(父子选择有关联)
 * @Email: rangowu@163.com
 -->
<template>
    <div class="one">
        <!-- 
            对于非平面和多选模式，如果检查了分支节点及其所有后代，则vue-treeselect将它们组合到值数组中的单个项目中，
            如以下示例所示。通过使用valueConsistsOfprop，您可以更改该行为。这个道具有四个选择：
            "ALL"- 任何已检查的节点都将包含在value数组中
            "BRANCH_PRIORITY"（默认） - 如果选中了分支节点，则将在value数组中排除其所有后代
            "LEAF_PRIORITY"- 如果选中了一个分支节点，该节点本身及其分支后代将从value数组中排除，但它的叶子后代将被包含在内
            "ALL_WITH_INDETERMINATE"- 任何已检查的节点都将包含在value阵列中，加上不确定的节点
         -->
        <treeselect
    :multiple="true"
    :options="options"
    :value-consists-of="valueConsistsOf"
    v-model="value"
    placeholder="父子关联性"
    />
  <pre class="result">防止价值组合: {{ value }}</pre>
  <p><strong>种类:</strong></p>
  <p class="options">
    <label><input type="radio" value="ALL" v-model="valueConsistsOf">所有</label><br>
    <label><input type="radio" value="BRANCH_PRIORITY" v-model="valueConsistsOf">分支优先</label><br>
    <label><input type="radio" value="LEAF_PRIORITY" v-model="valueConsistsOf">叶优先</label><br>
    <label><input type="radio" value="ALL_WITH_INDETERMINATE" v-model="valueConsistsOf">关联</label>
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
        data: () => ({
    value: [],
    valueConsistsOf: 'BRANCH_PRIORITY',
    options: util.options
  }),
    };
</script>



