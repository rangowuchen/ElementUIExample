/*
 * @Author: wuchen
 * @Date: 2019-08-12 16:55:32
 * @LastEditors: wuchen
 * @LastEditTime: 2019-08-12 17:41:36
 * @Description: actions->mutations->state
 * state:vuex的数据源,我们需要保存的数据就保存在这里;
 * getters:相当于vue中的computed记算属性,getters的返回值回根据他的依赖被缓存起来,
 * 且只有当他的依赖发生改变才会被重新记算;
 * mutation:修改state中的值;
 * actions:官方不建议直接用mutation修改store的值,而是先提交actions,
 * 在actions提交mutation再去修改状态值;
 * @Email: rangowu@163.com
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
// 创建vuex实例
const store = new Vuex.Store({
    // 1
    state:{
        count:1
    },
    // 2
    getters:{
        getStateCount:function(state){
            return state.count+1;
        }
    },
    // 3
    mutations:{
        add(state){//上面定义的state对象
            state.count = state.count+1
        },
        reduction(state,n){
            state.count = state.count-n;
        }
    },
    // actions
    actions:{
        addFun(context){//接收一个与store实例具有相同方法的属性的context对象
            context.commit('add')
        },
        reductionFun(context,n){
            context.commit('reduction',n)
        }
    }
})
// 导出
export default store