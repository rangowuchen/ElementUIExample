<!--
 * @Author: wuchen
 * @Date: 2023-02-13 14:20:07
 * @LastEditors: wuchen
 * @LastEditTime: 2023-02-13 14:27:15
 * @Description: https://blog.csdn.net/qq_40981137/article/details/105448713
 * npm install js-yaml --save
 * npm install codemirror
 * @Email: rangowu@163.com
-->
<template>
  <div>
    <div class="editor-container">
      <yaml-editor  v-model="value" />
    </div>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
import YamlEditor from './component.vue';

const yamlData = "- hosts: all\n  become: yes\n  become_method: sudo\n  gather_facts: no\n\n  tasks:\n  - name: \"install {{ package_name }}\"\n    package:\n      name: \"{{ package_name }}\"\n      state: \"{{ state | default('present') }}\"";

export default {
  name: 'YamlEditorDemo',
  components: { YamlEditor },
  data() {
    return {
      value: yamlData,
    };
  },
  methods: {
    submit() {
        console.log('需要提交的数据----------------',this.value)
    }
  }
};
</script>
<style scoped>
.editor-container{
  position: relative;
  height: 100%;
}
</style>
