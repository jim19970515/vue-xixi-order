<script setup>
    import { ref } from 'vue';
    import router from '@/router';
    
    const cameraIcon = ref(true)
    const numberIcon = ref(false)

    const changeHerf = ()=>{
        console.log(router.currentRoute.value.name)
    if(router.currentRoute.value.name == 'Camera'){
        cameraIcon.value = true
        numberIcon.value= false
        router.push({name:'SelectTable'})
    }else if(router.currentRoute.value.name == 'SelectTable'){
        numberIcon.value= true
        cameraIcon.value = false
        console.log('回到Camera')
        router.push({name:'Camera'})
    }
    }
</script>
<template>
    <div class="h-screen bg-background flex flex-col pt-20 pb-40">
        <div @click="changeHerf">
            <div class="w-0 h-0 border-t-[100px] border-l-[100px] border-l-transparent border-t-primary absolute right-0 top-0">
            </div>
        <i v-if="cameraIcon" class="ri-qr-code-line text-4xl text-white absolute top-2 right-2"></i>
        <i v-if="numberIcon" class="ri-list-ordered-2 text-4xl text-white absolute top-2 right-2"></i>
        </div>
        <img class="h-32 w-32 mx-auto" src="/src/assets/image/couponLogo.png" alt="">
        <router-view></router-view>
    </div>
</template>