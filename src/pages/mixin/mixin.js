/*
 * @Author: wuchen
 * @Date: 2021-12-07 15:18:20
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-07 15:58:58
 * @Description: 
 * @Email: rangowu@163.com
 */
let mixinData = {
    data(){
        return {
            user: '哈哈哈',
            age: 28
        }
    },
    mounted () {
        console.log('这是mixin.js文件中打印:' + this.user);
    }
}
export default mixinData;

