<!--
 * @Author: wuchen
 * @Date: 2020-03-28 14:33:30
 * @LastEditors: wuchen
 * @LastEditTime: 2020-03-31 11:39:58
 * @Description: 框架-左右结构
 * @Email: rangowu@163.com
 -->
<template>
    <div class="app-wrapper">
        <!-- 左侧菜单-->
        <sidebar class="sidebar-container"></sidebar>
        <!-- 右侧 -->
        <div :class="{hasTagsViews:needTagsView}" class="main-container">
            <!-- 头部内容 -->
            <!-- 可设置头部是否固定到顶部 -->
            <div :class="{'fixed-header:fixedHeader'}">
                <!-- 头部最上面的信息,包括头像,个人信息,退出登录等 -->
                <navbar />
                <!-- 头部标签页,可记录点击历史等 -->
                <tags-view v-if="needTagsView" />
            </div>
            <!-- 内容区 -->
            <app-main />
            <!-- 设置 -->
            <right-panel v-if="showSettings">
                <settings></settings>
            </right-panel>
        </div>
    </div>
</template>

<script>
import RightPanel from '@/components/RightPanel';
import { AppMain, Navbar, Settings, Sidebar, TagsView } from './components'
export default {
    name: 'layout',
    components:{AppMain, Navbar, Settings, Sidebar, TagsView, RightPanel},
    data(){
        return{
            
        }
    }
}
</script>