<template>
    <div>
        md5
    </div>
</template>

<script>
import md5 from 'js-md5';
export default {
    data(){
        return{

        }
    },
    mounted(){
        console.log(md5('123456'));
        console.log(md5('admin123'))
    }
}
</script>

