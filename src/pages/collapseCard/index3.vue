<!--
 * @Author: wuchen
 * @Date: 2020-01-14 11:35:31
 * @LastEditors  : wuchen
 * @LastEditTime : 2020-01-15 09:22:29
 * @Description: 
 * @Email: rangowu@163.com
 -->
<template>
    <div class="FundMangerDetail">
        <div class="baseBox W100 BGCW MT20">
            <!-- 引用你的组件 -->
            <Accordion v-for="(item,index) in baseData" :key="index" class="rightFixed0" :Accordionindex="index" :AccordionData="item.name">
                <div class="baseInformation" slot="First">
                    <!-- 二级显示内容 -->
                    <baseInformation v-if="item.children" :childrenItem="item.children"></baseInformation>
                    <p v-else>暂无数据</p>
                </div>
            </Accordion>
        </div>
    </div>
</template>
<script>
    import Accordion from "./components/Accordion";
    import baseInformation from "./components/baseInformation";
    export default {
        components: {
            Accordion,
            baseInformation,
        },
        data() {
            return {
                bodyScroll: "",
                baseInformation: "基本资料",
                baseData: [{
                        name: '第一',
                        id: 1,
                        openFlag: false,
                        children: [{
                                itemName: 'qqq',
                                itemId: 11
                            },
                            {
                                itemName: 'www',
                                itemId: 12
                            },
                            {
                                itemName: 'eee',
                                itemId: 13
                            },
                        ]
                    },
                    {
                        name: '第二',
                        id: 2,
                        openFlag: false,
                        children: [{
                                itemName: 'aaa',
                                itemId: 21
                            },
                            {
                                itemName: 'sss',
                                itemId: 22
                            },
                            {
                                itemName: 'ddd',
                                itemId: 23
                            },
                        ]
                    },
                    {
                        name: '第三',
                        id: 3,
                        openFlag: false
                    },
                    {
                        name: '第四',
                        id: 4,
                        openFlag: false
                    },
                    {
                        name: '第五',
                        id: 5,
                        openFlag: false
                    },
                    {
                        name: '第六',
                        id: 6,
                        openFlag: false
                    }
                ]
            };
        },
        mounted() {},
        methods: {}
    };
</script>