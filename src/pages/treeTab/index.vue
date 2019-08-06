<template>
  <div>
    <tree-grid
      :items='data'
      :columns='columns'
      :roleRow="roleRow"
      @on-row-click='rowClick'
      @on-selection-change='selectionClick'
      @on-sort-change='sortClick'
    ></tree-grid>
  </div>
</template>

<script>
import TreeGrid from "./components/TreeGrid2.0";
export default {
  components: { TreeGrid },
  data() {
    return {
      columns: [
        {
          type: "selection"
        },
        {
          title: "编码",
          key: "code",
          sortable: true
        },
        {
          title: "名称",
          key: "name"
        },
        {
          title: "状态",
          key: "status"
        },
        {
          title: "备注",
          key: "remark"
        },
        {
          title: "操作",
          type: "action",
          actions: [
            {
              type: "primary",
              text: "编辑"
            }
          ]
        }
      ],
      roleRow:[1,2],
      data: [
        {
          id: "1",
          code: "0001",
          name: "测试数据1",
          status: "启用",
          remark: "测试数据测试数据"
        },
        {
          id: "2",
          code: "0002",
          name: "测试数据2",
          status: "启用",
          remark: "测试数据测试数据",
          children: [
            {
              id: "21",
              code: "00001",
              name: "测试数据01",
              status: "启用",
              remark: "测试数据测试数据"
            },
            {
              id: "22",
              code: "00002",
              name: "测试数据02",
              status: "启用",
              remark: "测试数据测试数据"
            }
          ]
        },
        {
          id: "3",
          code: "0003",
          name: "测试数据3",
          status: "启用",
          remark: "测试数据测试数据"
        },
        {
          id: "4",
          code: "0004",
          name: "测试数据4",
          status: "启用",
          remark: "测试数据测试数据"
        }
      ]
    };
  },
  methods: {
    rowClick(data, index, event) {
      console.log("当前行数据:" + data);
      console.log("点击行号:" + index);
      console.log("点击事件:" + event);
    },
    selectionClick(arr) {
      console.log("选中数据id数组:" + arr);
    },
    sortClick(key, type) {
      console.log("排序字段:" + key);
      console.log("排序规则:" + type);
    }
  }
};
</script>

