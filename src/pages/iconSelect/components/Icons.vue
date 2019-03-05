<template>
  <div class="ui-fa">
    <el-input v-model="name" @input.native="filterIcons" suffix-icon="el-icon-search" placeholder="请输入图标名称"></el-input>
    <ul>
      <li v-for="(item, index) in iconList" :key="index" @click="selectedIcon(item)">
        <i class="fa" :class="['fa-' + item]" />
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import fontawesome from '@/common/data.js'
export default {
  name: 'compIcons',
  data () {
    return {
      name: '',
      iconList: fontawesome.iconList
    }
  },
  methods: {
    filterIcons () {
      if (this.name) {
        this.iconList = this.iconList.filter(item => item.includes(this.name))
      } else {
        this.iconList = fontawesome.iconList
      }
    },
    selectedIcon (name) {
      this.$emit('selected', name)
    },
    reset () {
      this.name = ''
      this.iconList = fontawesome.iconList
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-fa{
  width: 400px;
}
li{
  list-style: none;
  width: 50%;
  float: left;
}
</style>
