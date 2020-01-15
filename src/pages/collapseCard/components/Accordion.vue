<template>
    <div class="Accordion">
        <!-- Accordion Title -->
        <div class="AccordionTitle">
            <div class="AccordionTitleL leftText" v-text="AccordionData"></div>
            <div class="ClickArea" @click="Shrink">
                <div class="AccordionTitleR leftText" v-text="RightContent"></div>
                <div class="AccordionTitleR leftText" v-if="isshow==0"><i class="el-icon-arrow-down"></i></div>
                <div class="AccordionTitleR leftText" v-else style="transform:rotate(90deg);-ms-transform:rotate(90deg);-moz-transform:rotate(90deg);-webkit-transform:rotate(90deg);-o-transform:rotate(90deg);"><i class="el-icon-arrow-up"></i></div>
            </div>
        </div>
        <!-- Accordion Body -->
        <div class="AccordionBody" ref="AccordionBody">
            <!-- 接受slot的容器 -->
            <!-- 这里我才用slot的方法把手风琴内的内容插件里，以方便控制，达到灵活的效果 -->
            <div class="ContentA" v-show="true">
                <slot name="First"></slot>
                <p class="isshrink" v-show="isShrink"></p>
            </div>
        </div>
    </div>
</template>
<script>
    /**
     * Accordionindex   控制某一个展开收缩
     * AccordionData    左上角标题的文字
     * 这样的好处可以实现多个共存
     */
    export default {
        props: ["AccordionData", "Accordionindex"],
        data() {
            return {
                RightContent: "收缩",
                // isshow: this.Accordionindex,
                isshow: 0,
                isShrink: false,
                ContentA:false,//默认不显示
            };
        },
        methods: {
            Shrink() {
                this.ContentA = true;
                let AllHiden = this.$refs.AccordionBody;
                let eleMoreHeight = AllHiden.childNodes[0].offsetHeight;
                // alert(eleMoreHeight)
                AllHiden.style.height = eleMoreHeight + "px";
                setTimeout(() => {
                    if (this.isshow == 0) {
                        AllHiden.style.height = "0px";
                        this.isshow = 1;
                        this.RightContent = "展开";
                        this.isShrink = false;
                    } else {
                        // AllHiden.style.height = eleMoreHeight + "px";
                        AllHiden.style.height = eleMoreHeight + 30 + "px";
                        this.isshow = 0;
                        this.RightContent = "收缩";
                        this.isShrink = true;
                    }
                }, 1);
            }
        }
    };
</script>
<style scoped>
    .Accordion {
        width: 80%;
        height: auto;
    }
    .AccordionTitle {
        width: 100%;
        height: 50px;
        background: #e4eaec;
        padding: 0px 20px 0px 20px;
        display: flex;
    }
    /* 动画效果采用css3来实现 */
    .AccordionBody {
        position: relative;
        height: auto;
        overflow: hidden;
        -webkit-transition: height 0.6s;
        -moz-transition: height 0.6s;
        -o-transition: height 0.6s;
        transition: height 0.6s;
    }
    .AccordionTitleL {
        float: left;
        font-size: 14px;
        background: #e4eaec;
    }
    .AccordionTitleR {
        float: right;
        font-size: 12px;
        color: #518bdc;
    }
    .leftText {
        height: 50px;
        line-height: 50px;
    }
    .ClickArea {
        flex: 1;
    }
    .isshrink {
        width: 100%;
        height: 20px;
    }
    /* 后期如果有修改样式的需求，直接在你的引用页面修改就好 */
</style>