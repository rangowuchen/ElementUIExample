<!--
 * @Author: wuchen
 * @Date: 2020-01-03 11:02:52
 * @LastEditors  : wuchen
 * @LastEditTime : 2020-01-03 14:14:53
 * @Description: 
 * @Email: rangowu@163.com
 -->
<template>
    <div id="goods" class="goods-box">
        <ul class="goods-body">
            <li v-for="(list,index) in goods.goodsData" :key="list.id">
                <div class="goods-main">
                    <img :src="list.image">
                </div>
                <div class="goods-info">
                    <h3 class="goods-title">{{ list.title }}</h3>
                    <p class="goods-price">¥ {{ list.price }}</p>
                    <div class="goods-compute">
                        <span class="goods-reduce" @click="onReduce(index)">-</span>
                        <input readonly v-model="list.num" />
                        <span class="goods-add" @click="onAdd(index)">+</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="goods-footer">
            <div class="goods-total">
                合计：¥ {{ goods.totalPrice }}
                <!--
                    getters里面的数据可以直接这样写
                    {{ totalPrice }}
                -->
            </div>
            <button class="goods-check" :class="{activeChecke: goods.totalNum <= 0}">去结账({{ goods.totalNum }})</button>
        </div>
    </div>
</template>
<script>
    import {mapState,mapGetters,mapMutations} from 'vuex';
    /**
        上面大括弧里面的三个参数，便是一一对应着store.js中的state,getters,mutations
        三个属性的的辅助函数
    **/
    
    export default {
        name: 'Goods',
        computed:{
            ...mapState(['goods']),
            ...mapGetters(['totalPrice','totalNum'])
            // ... 为ES6中的扩展运算符
            // 如果使用的名称和store.js中的一样，直接写成上面数组的形式就行，
            // 如果你想改变一下名字，写法如下
            // ...mapState({
            //     goodsData: state => state.goods
            // })
        },
        methods:{
            ...mapMutations(['reduceGoods','addGoods']),
            onReduce(index){
                this.reduceGoods(index);
            },
            onAdd(index){
                this.addGoods(index);
            }
        }
    }
</script>