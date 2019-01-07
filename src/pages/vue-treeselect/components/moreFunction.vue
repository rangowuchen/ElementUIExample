<template>
  <div class="one">
    <treeselect
      name="demo"
      :multiple="multiple"
      :clearable="clearable"
      :searchable="searchable"
      :disabled="disabled"
      :open-on-click="openOnClick"
      :open-on-focus="openOnFocus"
      :clear-on-select="clearOnSelect"
      :close-on-select="closeOnSelect"
      :always-open="alwaysOpen"
      :append-to-body="appendToBody"
      :options="options"
      :limit="3"
      :max-height="200"
      v-model="value"
      placeholder="更多功能"
    />
    <pre class="result">{{ value }}</pre>
    <p>
      <label><input
          type="checkbox"
          v-model="multiple"
        >多选</label>
      <label><input
          type="checkbox"
          v-model="clearable"
        >清空</label>
      <label><input
          type="checkbox"
          v-model="searchable"
        >检索</label>
      <label><input
          type="checkbox"
          v-model="disabled"
        >不可选</label>
    </p>
    <p>
      <label><input
          type="checkbox"
          v-model="openOnClick"
        >Open on click</label>
      <label><input
          type="checkbox"
          v-model="openOnFocus"
        >Open on focus</label>
    </p>
    <p>
      <label><input
          type="checkbox"
          v-model="clearOnSelect"
        >Clear on select</label>
      <label><input
          type="checkbox"
          v-model="closeOnSelect"
        >Close on select</label>
    </p>
    <p>
      <label><input
          type="checkbox"
          v-model="alwaysOpen"
        >一直打开</label>
      <label><input
          type="checkbox"
          v-model="appendToBody"
        >Append to body</label>
    </p>
  </div>

</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  data: () => ({
    multiple: true,
    clearable: true,
    searchable: true,
    disabled: false,
    openOnClick: true,
    openOnFocus: false,
    clearOnSelect: true,
    closeOnSelect: false,
    alwaysOpen: false,
    appendToBody: false,
    value: [],
    options: [
      {
        id: "1",
        label: "Fruits",
        children: [
          {
            id: "2",
            label: "Apple 🍎",
            isNew: true
          },
          {
            id: "3",
            label: "Grapes 🍇"
          },
          {
            id: "4",
            label: "Pear 🍐"
          },
          {
            id: "5",
            label: "Strawberry 🍓"
          },
          {
            id: "6",
            label: "Watermelon 🍉"
          }
        ]
      },
      {
        id: "7",
        label: "Vegetables",
        children: [
          {
            id: "8",
            label: "Corn 🌽"
          },
          {
            id: "9",
            label: "Carrot 🥕"
          },
          {
            id: "10",
            label: "Eggplant 🍆"
          },
          {
            id: "11",
            label: "Tomato 🍅"
          }
        ]
      }
    ]
  }),

  watch: {
    multiple(newValue) {
      if (newValue) {
        this.value = this.value ? [this.value] : [];
      } else {
        this.value = this.value[0];
      }
    }
  },
  components: { Treeselect }
};
</script>


