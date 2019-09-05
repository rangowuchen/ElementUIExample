<!--
 * @Author: wuchen
 * @Date: 2019-09-05 18:23:46
 * @LastEditors: wuchen
 * @LastEditTime: 2019-09-05 18:32:03
 * @Description: 
 * @Email: rangowu@163.com
 -->
<template>
    <div>
        <el-select v-model="searchGoodsBatchData" :filter-method="filterGoodsBatchData" filterable default-first-option placeholder="请输入产品名" @change="searchGoods" @keyup.native="showGoodsBatch($event)" :disabled="searchBoxDisable" popper-class="searchGoodsBatchInput"
            id="searchGoodsBatchInput" ref="searchGoodsBatchInput" v-focus="false" clearable>
            <template slot="prefix">
                <!-- <svg-icon icon-class="searchGreen"></svg-icon> -->
</template>
<template>
    <div class="searchHeader" v-show="showGoodsBatchOption">
        <span style="float: left">商品编号</span>
        <span style="float: left;">69码</span>
        <span style="float: left;">商品名称</span>
        <span style="float: left;">生产厂商</span>
    </div>
</template>
      <el-option
        class="searchGoodsOption"
        v-for="item in goodsListData"
        :key="item.commodityCode"
        :label="item.name"
        :value="item.commodityCode"
        v-show="showGoodsBatchOption"
      >
        <span style="float: left">{{ item.commodityCode }}</span>
        <span style="float: left;">{{ item.SixNineCode }}</span>
        <span style="float: left;">{{ item.name }}</span>
        <span style="float: left;">{{ item.manufactor }}</span>
      </el-option>
    </el-select>

  </div>
</template>
<script>
    export default {
        data() {
            return {
                searchGoodsBatchData:'',
                goodsListData:[
                    {
                        commodityCode:'大使馆的',
                        SixNineCode:'撒发射点',
                        name:'撒反对的撒旦法',
                        manufactor:'说的很多话'
                    },{
                        commodityCode:'sdgd',
                        SixNineCode:'等富含天然',
                        name:'儿童热热',
                        manufactor:'梵蒂冈反对'
                    },{
                        commodityCode:'股份回购',
                        SixNineCode:'而太热',
                        name:'风格发挥',
                        manufactor:'我去额为'
                    },
                ],
                showGoodsBatchOption:true,
                searchBoxDisable:false
            }
        },
        methods: {
            filterGoodsBatchData(v) {
                this.searchGoodsBatchData = v
                this.goodsListData = []
                console.log('搜索之前先清空', this.goodsListData)
                this.goodsListData = this.copyGoodsListData.filter((item) => {
                    const val = v.toLowerCase()
                    if (item.commodityCode.indexOf(val) !== -1) return true
                    if (item.SixNineCode.indexOf(val) !== -1) return true
                    if (item.name.indexOf(val) !== -1) return true
                    if (item.manufactor.indexOf(val) !== -1) return true
                })
                console.log('搜索之后', this.goodsListData)
            },
            searchGoods(){},
        }
    }
</script>