<!--
 * @Author: wuchen
 * @Date: 2019-01-07 14:24:43
 * @LastEditors: wuchen
 * @LastEditTime: 2019-01-07 14:31:20
 * @Description: 异步搜索
 * @Email: rangowu@163.com
 -->

 <template>
  <!-- 
      vue-treeselect支持在用户输入时动态加载和更改整个选项列表。
      默认情况下，vue-treeselect将缓存每个AJAX请求的结果，因此用户可以等待更少。
   -->
  <div class="one">
    <treeselect
      :multiple="true"
      :async="true"
      :load-options="loadOptions"
    />
    <pre class="result">异步搜索:{{ value }}</pre>
  </div>

</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import { ASYNC_SEARCH } from "@riophae/vue-treeselect";

const simulateAsyncOperation = fn => {
  setTimeout(fn, 2000);
};
export default {
  components: {
    Treeselect
  },
  data: () => ({
    value: []
  }),

  methods: {
    loadOptions({ action, searchQuery, callback }) {
      if (action === ASYNC_SEARCH) {
        simulateAsyncOperation(() => {
          const options = [1, 2, 3, 4, 5].map(i => ({
            id: `${searchQuery}-${i}`,
            label: `${searchQuery}-${i}`
          }));
          callback(null, options);
        });
      }
    }
  }
};
</script>



