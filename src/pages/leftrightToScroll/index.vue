<!--
 * @Author: wuchen
 * @Date: 2020-07-13 16:10:26
 * @LastEditors: wuchen
 * @LastEditTime: 2020-07-13 16:20:59
 * @Description: 
 * @Email: rangowu@163.com
--> 
<template>
    <div>
        <!--template中的代码 -->
        <div class="module-list-wrap">
            <!-- <el-icon name="xiangzuojiantou" class="left-icon" @click.native="leftmove"></el-icon> //左箭头 -->
            
            <i class="el-icon-arrow-left" @click.native="leftmove"></i>
            <ul class="module-list" ref="modulelist" :style="{width: itemlist.length * 100 + 'px','margin-left': xxx * 100 + 'px'}">
                <li v-for="(item, index) in itemlist" :key="index">
                    <!-- itemlist 文案的数组  -->
                    {{ item.name }}
                </li>
            </ul>
            <!-- <el-icon name="xiangyoujiantou" class="right-icon" @click.native="rightmove"></el-icon>//右箭头 -->
            <i class="el-icon-arrow-right" @click.native="rightmove"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                itemlist: [
                    {name:'hahahaha1'},
                    {name:'hahahaha2'},
                    {name:'hahahaha3'},
                    {name:'hahahaha4'},
                    {name:'hahahaha5'},
                    {name:'hahahaha6'},
                    {name:'hahahaha7'},
                    {name:'hahahaha8'},
                    {name:'hahahaha9'},
                    {name:'hahahaha10'},
                    {name:'hahahaha11'},
                    {name:'hahahaha12'},
                    {name:'hahahaha13'},
                ],
                xxx: 0,
            }
        },
        methods: {
            //methods中的代码
            leftmove() {
                if (this.xxx < 0) {
                    this.xxx += 1;
                }
            },
            rightmove() {
                if (this.xxx > -(this.itemlist.length + this.xxx)) {
                    this.xxx -= 1;
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
.ul{
    float: left;
    li{
        float: left;
    }
}
</style>
