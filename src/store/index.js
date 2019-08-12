/*
 * @Author: wuchen
 * @Date: 2018-12-06 19:05:06
 * @LastEditors: wuchen
 * @LastEditTime: 2019-08-12 16:54:32
 * @Description: 
 * @Email: rangowu@163.com
 */
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
// state:仓库共有属性的集合,用于存储公共状态,只存储
const state = {
    testMsg: '原始文本',
    childText:"子组件原始文本",
    count:1,//定义了一个公共属性count,并且初始化赋值为0
    amount:1
}
// mutations:专门用于修改state里的属性的方法集合
const mutations = {
    changeTestMsg(state, str){
        state.testMsg = str;
    },
    changeChildText(state, str){
        state.childText = str;
    },
    // 方法名称随便起参数state是固定写法
    changeMe(state,str){
        console.log('state',state)
        state.count = str;
    },
    // add(state){
    //     state.amount++;
    // },
    add(state,n){
        state.amount +=n;
    },
    reduce(state){
        state.amount--;
    }

}
export default new Vuex.Store({
    state,
    mutations
});