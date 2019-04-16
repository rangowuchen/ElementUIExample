<template>
    <div>
        <vue-cropper ref="cropper" :img="option.img" :outputSize="option.size" :outputType="option.outputType"></vue-cropper>
    </div>
</template>

<script>
import VueCropper from 'vue-cropper';
import aImg from '@/assets/logo.png'
export default {
    components:{
        VueCropper
    },
    data(){
        return{
            option:{
                img:{aImg},
                size:'12',
                outputType:'png'
            }
        }
    },
    methods:{

    }
}
</script>

