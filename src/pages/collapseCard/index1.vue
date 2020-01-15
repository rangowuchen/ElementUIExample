<template>
    <div>
        <div class="contain">
            <div v-for="(item,index) in baseData" :key="item.id" @click="clickMe(item,index)" >
                <span>{{item.name}}</span>
                <div class="div" v-if="item.openFlag">111111111</div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
    export default {
        data() {
            return {
                baseData: [{
                        name: 'haha',
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
                        name: 'huhu',
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
                        name: 'hoho',
                        id: 3,
                        openFlag: false
                    },
                    {
                        name: 'hehe',
                        id: 4,
                        openFlag: false
                    }
                ]
            };
        },
        methods: {
            clickMe(item,index) {
                var aa = document.getElementsByClassName('div');
                console.log(aa);
                if (!item.openFlag) {
                    Vue.set(item, 'openFlag', true)
                    // div.style.maxHeight = "0px";
                } else {
                    Vue.set(item, 'openFlag', false)
                    // div.style.maxHeight = "300px";
                }
            }
        }
    };
</script>
<style lang="scss" scoped>
    .div {
        max-height: 0;
        transition: 0.8s;
        overflow: hidden;
        border: 1px solid #000;
    }
</style>