<template>
  <div class="one">
    <treeselect
      :multiple="true"
      :options="options"
      placeholder="基本功能"
      v-model="value"
    >
    </treeselect>
    <pre class="result">基本功能: {{ value }}</pre>
  </div>
  
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  data: () => ({
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
  components:{Treeselect}
};
</script>


