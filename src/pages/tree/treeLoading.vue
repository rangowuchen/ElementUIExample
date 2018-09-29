<template>
    <div>
        <el-tree :props="props" :load="loadNode" lazy show-checkbox @check-change="handleCheckChange">
        </el-tree>

    </div>
</template>

<script>
export default {
  data() {
    return {
      props: {
        label: "label",
        children: "children"
      },
      count: 1
    };
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    handleNodeClick(data) {
      console.log(data);
    },
    loadNode(node, resolve) {
        console.log(node,resolve)
      if (node.level === 0) {
        return resolve([{ label: "region1" }, { label: "region2" }]);
      }
      if (node.level > 3) return resolve([]);

      var hasChild;
      if (node.data.label === "region1") {
        hasChild = true;
      } else if (node.data.label === "region2") {
        hasChild = true;
      } else {
        hasChild = Math.random() > 0.5;
      }

      setTimeout(() => {
        var data;
        if (hasChild) {
          data = [
            {
              label: "一级 1",
              children: [
                {
                  label: "二级 1-1",
                  children: [
                    {
                      label: "三级 1-1-1"
                    }
                  ]
                }
              ]
            },
            {
              label: "一级 2",
              children: [
                {
                  label: "二级 2-1",
                  children: [
                    {
                      label: "三级 2-1-1"
                    }
                  ]
                },
                {
                  label: "二级 2-2",
                  children: [
                    {
                      label: "三级 2-2-1"
                    }
                  ]
                }
              ]
            },
            {
              label: "一级 3",
              children: [
                {
                  label: "二级 3-1",
                  children: [
                    {
                      label: "三级 3-1-1"
                    }
                  ]
                },
                {
                  label: "二级 3-2",
                  children: [
                    {
                      label: "三级 3-2-1"
                    }
                  ]
                }
              ]
            }
          ];
        } else {
          data = [];
        }

        resolve(data);
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>


