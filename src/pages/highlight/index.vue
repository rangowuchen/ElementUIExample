<!--
 * @Author: wuchen
 * @Date: 2021-04-01 15:22:31
 * @LastEditors: wuchen
 * @LastEditTime: 2021-04-01 15:27:24
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div>
        <pre v-highlight>
            <code class="lang-javascript">
                {{codeText}}
            </code>
        </pre>
    </div>
</template>
<script>
export default {
    data(){
        return {
            codeText:`<em class="line-label">2222</em>`
        }
    }
}
</script>