/*
 * @Author: wuchen
 * @Date: 2020-01-03 11:07:00
 * @LastEditors  : wuchen
 * @LastEditTime : 2020-01-03 14:09:08
 * @Description: 
 * @Email: rangowu@163.com
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // state类似data
        // 这里面写入数据
        goods: {
            totalPrice:0,
            totalNum:0,
            goodsData: [
                {
                    id:'1',
                    title:'vuejs实战',
                    price:8.00,
                    image:require('@/assets/img/avatar.png'),
                    num:0
                },
                {
                    id:'2',
                    title:'JavaScript',
                    price:'2.00',
                    image:require('@/assets/img/avatar.png'),
                    num:0
                }
            ]
        }
    },
    getters: {
        // getters类似 computed
        // 在这里面写个方法
        totalNum(state) {
            let aTotalNum = 0;
            state.goods.goodsData.forEach((value,index) => {
                aTotalNum += value.num;
            })
            return aTotalNum;
        },
        totalPrice(state) {
            let aTotalPrice = 0;
            state.goods.goodsData.forEach((value,index) => {
                aTotalPrice += value.num * value.price
            })
            return aTotalPrice.toFixed(2);
        }
    },
    mutations: {
        // mutations类似methods
        // 写方法对数据做出更改(同步操作)
        result(state,msg) {
            console.log(msg);
            state.goods.totalPrice = this.getters.totalPrice;
            state.goods.totalNum = this.getters.totalNum;
        },
        reduceGoods(state,index) {
            state.goods.goodsData[index].num -= 1;
            let msg = '我执行了一次';
            this.commit('result',msg)
        },
        addGoods(state,index) {
            state.goods.goodsData[index].num += 1;

            let msg = '我执行了一次';
            // 重新渲染store中的方法,一律使用commit方法
            this.commit('result',msg);
        }
    },
    actions: {
        // actions 类似methods
        // 写方法对数据做出更改(异步操作)
    }
})