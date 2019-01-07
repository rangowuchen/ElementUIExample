<!--
 * @Author: wuchen
 * @Date: 2019-01-07 10:25:38
 * @LastEditors: wuchen
 * @LastEditTime: 2019-01-07 14:15:17
 * @Description: 延迟加载
 * @Email: rangowu@163.com
 -->
 <template>
  <!-- 
      也可以将根级别选项加载延迟。如果最初没有注册选项（options: null），
      则vue-treeselect将尝试loadOptions({ action, callback, instanceId })在安装组件后通过调用加载根选项。
      在此示例中，我通过设置禁用了自动加载功能autoLoadRootOptions: false，并且在打开菜单时将加载根选项。
   -->
  <div class="one">
    <treeselect
      :load-options="loadOptions"
      :options="options"
      :auto-load-root-options="false"
      :multiple="true"
      placeholder="根级别选项加载延迟"
      v-model="value"
    />
    <pre class="result">根级别选项加载延迟:{{ value }}</pre>
  </div>

</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import { LOAD_ROOT_OPTIONS } from "@riophae/vue-treeselect";

const sleep = d => new Promise(r => setTimeout(r, d));
let called = false;
export default {
  components: {
    Treeselect
  },
  data: () => ({
    options: null,
    value:[]
  }),

  methods: {
    async loadOptions({ action /*, callback*/ }) {
      if (action === LOAD_ROOT_OPTIONS) {
        if (!called) {
          await sleep(2000);
          called = true;
          throw new Error("加载失败!");
        } else {
          await sleep(2000);
        //   此处可以请求接口
          this.options = ["a", "b", "c", "d", "e"].map(id => ({
            id,
            label: `option-${id}`
          }));
        }
      }
    }
  }
};
</script>



