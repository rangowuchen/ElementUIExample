<!--
 * @Author: wuchen
 * @Date: 2020-02-28 15:02:12
 * @LastEditors: wuchen
 * @LastEditTime: 2020-03-03 18:12:36
 * @Description: https://www.tangshuang.net/3657.html
 * @Email: rangowu@163.com
 -->
<template>
  <div>11</div>
</template>

<script>
export default {
  name: 'worker-test',
  data() {
    return {
      worker: null,
    }
  },
  created() {
    this.worker = this.$worker.create([
      {
        message: 'pull-data',
        func(data) {
        //   data.forEach(...)
          return data
        },
      },
      {
        message: 'run-task',
        func() {
          //...
        },
      }
    ])
  },
  mounted() {
    // 1. 不传
    // this.worker.postAll().then(([res1, res2]) => {})
  
    // 2. 字符串形式
    let data = 'sdddds';
    this.worker.postAll(['run-task']).then(([res]) => {
        console.log(res)
    }) // 仅'run-task'被postMessage
  
    // // 3. 对象形式（混合形式）
    // this.worker.postAll([
    //   'run-task',
    //   {
    //     message: 'pull-data',
    //     args: [data],
    //   },
    // ]).then(([res1, res2]) => {
    //   // 注意，这里then里面执行的是在主js线程里面执行的，所以可以直接用this.worker
    //   this.worker.unregister('run-task')
    //   // 当你注销掉了，那么下回你在post到run-task这个任务消息时，就啥都不会发生了
    // })
  },
  destroyed() {
    this.worker = null
  },
}
</script>