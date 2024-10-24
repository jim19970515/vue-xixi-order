<script setup>
// const tableModal = defineModel()
// const emits = defineEmits(['chooseNumber'])

// const chooseNumber =(item)=>{
//     console.log(item)
//     emits('chooseNumber',item)
// }
</script>
<template>
    <div class="fixed top-0 h-screen w-screen bg-primary px-4 text-white place-content-center">
        <h1 class="text-center text-4xl font-extrabold pb-4">請選擇桌號</h1>
        <div class="grid grid-cols-3 gap-2">
            <div class="bg-secondary text-center rounded-20 active:bg-white active:text-primary py-4 text-2xl" v-for="item in 12" @click="chooseNumber(item)" :key="item">{{ item }}</div>
        </div>
    </div>
</template>