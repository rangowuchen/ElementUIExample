/*
 * @Author: wuchen
 * @Date: 2018-10-09 15:34:33
 * @LastEditors: wuchen
 * @LastEditTime: 2018-10-09 18:38:29
 * @Description:这是组件2 
 * @Email: rangowu@163.com
 */
 <template>
    <div>
        <h3>这是组件2</h3>
        <br>
        <span>子组件给父组件传值,通过$emit进行传值</span>
        <el-input class="inputLa" v-model="lala"></el-input>
        <el-button type="primary" @click="search">搜索</el-button>
    </div>
</template>

 <script>
export default {
  data() {
    return {
      lala: "这是啦啦啦"
    };
  },
  methods: {
    search() {
      this.$emit("searchData", this.lala);
    }
  }
};
</script>

<style lang="scss" scoped>
.inputLa{
    width: 200px;
    margin: 0 auto;
}
</style>

 
 
