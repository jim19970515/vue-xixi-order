<template>
    <div class="h-screen overflow-hidden px-4 py-2 bg-[#F5EFE2]">
        <div class="flex items-center justify-between">
            <i class="ri-arrow-left-line px-2 bg-primary text-white text-xl font-bold rounded-20" @click="goBackOrder"></i>
            <h1 class="pl-8 text-primary text-xl font-bold">餐點title</h1>
            <span class="px-2 bg-primary text-white text-xl font-bold rounded-20">桌號:1</span>
        </div>
        <div class="w-full h-[400px] rounded-20 bg-[#F3B948] px-4 my-4"></div>
        <h2 class="text-primary text-3xl font-bold">餐點title</h2>
        <p></p>
        <div class="absolute bottom-0 w-full bg-[#B79448] text-white">
            <div class="flex">
                <span>原價$60</span>
                <p></p>
            </div>
            <button class="flex items-center gap-2 w-full bg-[#F2C458] text-center">
                <span>加入</span>
                <i class="ri-arrow-right-line"></i>
            </button>
        </div>
    </div>
</template>

<script setup>
import { useOrderStore } from '@/stores/counter'
import router from '@/router'
import axios from 'axios'
defineProps({
    prop: ['id'],
})
import { ref, watchEffect } from 'vue'
const singleProduct = ref({})

// watchEffect(async () => {
//     const { data } = await axios.get(`https://vue-course-api.hexschool.io/api/f0920515972/product/${id}`)
//     console.log(data.products)
// })
//返回order
const goBackOrder = () => {
    router.back()
}
const orderStore = useOrderStore()
console.log(orderStore.tableNumber)
</script>
