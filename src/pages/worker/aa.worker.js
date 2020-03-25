/*
 * @Author: wuchen
 * @Date: 2020-03-17 16:41:00
 * @LastEditors: wuchen
 * @LastEditTime: 2020-03-25 11:41:38
 * @Description: worker不能使用弹窗,window等全局属性,不能引入api接口,不能操作dom
 * 在接口请求的时候直接axios.post这种形式进行书写
 * @Email: rangowu@163.com
 */
onmessage = function(evt){
    // 工作线程收到主线程的消息
    // 2,接收页面发送的信息
    let dataBase = evt.data;
    this.console.log('2,页面传到worker的数据',dataBase)
    if(dataBase.name == 'rango'){
        // 请求
        let a = {
            data:{
                name:'haha',
                desc:'我又回来了'
            }
        }
        // 3,根据执行结果发送给页面
        postMessage(a)
    }
}