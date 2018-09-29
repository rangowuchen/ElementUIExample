<template>
  <div class="list">
    <section class="list-left">
      <div class="list-left-title">
        <el-checkbox :indeterminate="leftAll" v-model="leftCheckAll" @change="leftCheckAllChange">选择列表</el-checkbox>
        <div>
          {{leftSelect}}/{{leftNumber}}
        </div>
      </div>
      <div class="list-left-body">
        <ul>
          <li>
            <el-checkbox-group v-model="leftData" @change="leftChange">
              <el-checkbox v-for="item in dataList" :key="item.id" :label="item.id">{{item.name}}</el-checkbox>
            </el-checkbox-group>
          </li>
        </ul>
      </div>
    </section>
    <div class="list-center">
      <div>
        <div @click="toLeft" :class="{'zj-length':isLeft==true}">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div @click="toRight" :class="{'zj-length':isRight==true}">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <section class="list-left">
      <div class="list-left-title">
        <el-checkbox :indeterminate="rightAll" v-model="rightCheckAll" @change="rightCheckAllChange">已选列表</el-checkbox>
        <div>
          {{rightSelect}}/{{rightNumber}}
        </div>
      </div>
      <div class="list-left-body">
        <ul>
          <li>
            <el-checkbox-group v-model="rightData" @change="rightChange">
              <el-checkbox v-for="item in rightList" :key="item.id" :label="item.id">{{item.name}}</el-checkbox>
            </el-checkbox-group>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    props: {
      dataList: {
        type: Array
      },
      rightValue: {
        type: Array
      }
    },
    data() {
      return {
        isLeft: false,
        isRight: false,
        leftSelect: 0,
        leftNumber: 0,
        rightSelect: 0,
        rightNumber: 0,
        leftAll: true,
        leftCheckAll: false,
        rightAll: true,
        rightCheckAll: false,
        leftData: [],
        rightData: [],
        rightList: [],
      }
    },
    mounted() {
        this.leftNumber = this.dataList.length;
        // this.rightList = this.rightValue
        this.rightNumber = this.rightValue.length;
    },
    watch: {
      leftData: {
        handler(curVal) {
          if (curVal.length > 0) {
            this.isRight = true
          }
        },
        deep: true
      },
      rightData: {
        handler(curVal) {
          if (curVal.length > 0) {
            this.isLeft = true
          }
        },
        deep: true
      },
      dataList: {
        handler(curVal, oldVal) {
          this.leftNumber = curVal.length;
          if (curVal.length == 0) {
            this.leftAll = true;
            this.isRight = false;
          }
        },
        deep: true
      },
      rightValue(val){
          // console.log('里面检测')
          // console.log(val)
          this.rightList=val;
      },
      rightList: {
        handler(curVal, oldVal) {
          // console.log('里面检测')
          // console.log(curVal)
          this.$emit('input', curVal);
          if (curVal.length == 0) {
            this.isLeft = false;
          }
        },
        deep: true
      }
    },
    methods: {
      // 左侧全选
      leftCheckAllChange(val) {
        let index = []
        this.dataList.forEach(element => {
          index.push(element.id)
        })
        this.leftData = val ? index : []
        this.leftAll = false
        this.leftSelect = this.dataList.length;
      },
      //   右侧全选
      rightCheckAllChange(val) {
        let index = []
        this.rightList.forEach(element => {
          index.push(element.id)
        })
        this.rightData = val ? index : []
        this.rightAll = false
        this.rightSelect = this.rightList.length;
      },
      //   左列表选中事件
      leftChange(id) {
        this.leftSelect = this.leftData.length;
      },
      //   右侧列表选中
      rightChange() {
        this.rightSelect = this.rightData.length;
      },
      toRight() {
        this.leftData.forEach(element => {
          let array = []
          this.dataList.forEach((value, index) => {
            if (element == value.id) {
              this.dataList.splice(index, 1)
              this.rightList.push(value)
              // this.rightList = uniqueFunc(this.rightList)
              let obj = {};
              this.rightList = this.rightList.reduce((cur, next) => {
                obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
                return cur;
              }, [])
            }
          })
        });
        this.leftNumber = this.dataList.length;
        this.rightNumber = this.rightList.length;
        if (this.dataList.length == 0) {
          this.leftSelect = 0;
        }
      },
      toLeft() {
        this.rightData.forEach(element => {
          let array = []
          this.rightList.forEach((value, index) => {
            if (element == value.id) {
              this.rightList.splice(index, 1)
              this.dataList.push(value)
            }
          })
        })
        this.leftNumber = this.dataList.length;
        this.rightNumber = this.rightList.length;
        if (this.rightList.length == 0) {
          this.rightSelect = 0;
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .list {
    width: 500px;
    height: 300px;
    display: flex;

    &-left {
      width: 198px;
      height: 100%;
      border-radius: 6px;
      border: 1px solid #f5f7fa;

      &-title {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        padding-left: 10px;
        height: 40px;
        background-color: #f5f7fa;
        line-height: 40px;
        position: relative;

        div {
          position: absolute;
          color: #909399;
          font-size: 12px;
          top: 0;
          right: 10px;
        }
      }

      &-body {
        height: 260px;
        background-color: #fff;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;

        ul {
          margin-left: 10px;

          li {
            height: 250px;
            overflow: auto;
          }
        }
      }
    }

    &-center {
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        div {
          border: 1px solid #dcdfe6;
          width: 36px;
          height: 36px;
          text-align: center;
          line-height: 36px;
          border-radius: 50%;
          background-color: #f5f7fa;
          margin-top: 10px;

          i {
            color: #c0c4cc;
          }
        }
      }
    }
  }

  .zj-length {
    background-color: #14b414 !important;

    i {
      color: #fff;
    }
  }

  .el-checkbox {
    display: inline-block;
    width: 100%;
    margin-left: 0;
  }

</style>
