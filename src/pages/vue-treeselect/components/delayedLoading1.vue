<!--
 * @Author: wuchen
 * @Date: 2019-01-07 10:25:38
 * @LastEditors: wuchen
 * @LastEditTime: 2019-01-07 13:59:42
 * @Description: 延迟加载
 * @Email: rangowu@163.com
 -->
 <template>
 <!-- 
     如果有大量深层嵌套选项，则可能需要在初始加载时仅加载最高级别的选项，并仅在需要时加载其余选项。
     可以通过以下步骤实现这一目标：
     1,通过设置声明一个卸载的分支节点children: null
     2,添加loadOptions道具
     3,每当卸载的分支节点被扩展时，loadOptions({ action, parentNode, callback, instanceId })将被调用，
       然后您可以执行从远程服务器请求数据的作业
  -->
  <div class="one">
    <treeselect
      :multiple="true"
      :options="options"
      :load-options="loadOptions"
      placeholder="延迟加载"
      v-model="value"
    />
    <pre class="result">子元素加载延迟:{{ value }}</pre>
  </div>

</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import { LOAD_CHILDREN_OPTIONS } from "@riophae/vue-treeselect";

//在这里使用'settimeout（）'来模拟异步操作,真实情况下调取接口
const simulateAsyncOperation = fn => {
  setTimeout(fn, 2000);
};
export default {
  components: {
    Treeselect
  },
  data: () => ({
    value: [],
    options: [
      {
        id: "success",
        label: "有子元素",
        children: null
      },
      {
        id: "no-children",
        label: "没有子数组",
        children: null
      },
      {
        id: "failure",
        label: "演示错误处理",
        children: null
      }
    ]
  }),

  methods: {
    loadOptions({ action, parentNode, callback }) {
      //通常，在这里执行Ajax操作。
      //一旦服务器响应，
      //将子选项分配给父节点并调用回调。
      console.log(action,parentNode,callback)
      if (action === LOAD_CHILDREN_OPTIONS) {
        switch (parentNode.id) {
          case "success": {
            simulateAsyncOperation(() => {
              parentNode.children = [
                {
                  id: "11",
                  label: "子元素1"
                },
                {
                  id: "12",
                  label: "子元素2"
                }
              ];
              console.log(callback);
              callback();
            });
            break;
          }
          case "no-children": {
            simulateAsyncOperation(() => {
              parentNode.children = [];
              callback(new Error("没有加载项"));
            });
            break;
          }
          case "failure": {
            simulateAsyncOperation(() => {
              callback(new Error("网络错误,加载选项失败!"));
            });
            break;
          }
          default: /* empty */
        }
      }
    }
  }
};
</script>



