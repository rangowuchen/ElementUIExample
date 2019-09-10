<!--
 * @Author: wuchen
 * @Date: 2019-09-10 16:28:09
 * @LastEditors: wuchen
 * @LastEditTime: 2019-09-10 16:51:43
 * @Description: 
 * @Email: rangowu@163.com
 -->
<template>
    <div>
        <treeselect :multiple="true" :options="options" :disable-branch-nodes="true" v-model="value" search-nested />
    </div>
</template>

<script>
    import Treeselect from "@riophae/vue-treeselect";
    import "@riophae/vue-treeselect/dist/vue-treeselect.css";
    export default {
        components: {
            Treeselect
        },
        data() {
            return {
                value: [],
                options: [{
                        id: "m",
                        label: "McDonalds",
                        children: [{
                                id: "m-fries",
                                label: "French Fries"
                            },
                            {
                                id: "m-cheeseburger",
                                label: "Cheeseburger"
                            },
                            {
                                id: "m-white-cheedar-burger",
                                label: "White Cheddar Burger"
                            },
                            {
                                id: "m-southwest-buttermilk-crispy-chicken-salad",
                                label: "Southwest Buttermilk Crispy Chicken Salad"
                            },
                            {
                                id: "m-cola",
                                label: "Coca-Cola®"
                            },
                            {
                                id: "m-chocolate-shake",
                                label: "Chocolate Shake"
                            }
                        ]
                    },
                    {
                        id: "kfc",
                        label: "KFC",
                        children: [{
                                id: "kfc-fries",
                                label: "French Fries"
                            },
                            {
                                id: "kfc-chicken-litties-sandwiches",
                                label: "Chicken Litties Sandwiches"
                            },
                            {
                                id: "kfc-grilled-chicken",
                                label: "Grilled Chicken"
                            },
                            {
                                id: "kfc-cola",
                                label: "Pepsi® Cola"
                            }
                        ]
                    }
                ]
            };
        }
    };
</script>