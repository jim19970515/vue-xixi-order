<script setup>
import {ref,reactive} from 'vue'
const category = reactive(['套餐', '麵包', '蛋餅', '炒麵', '吐司', '炸物', '飲品'])
</script>



<template>
    <div class="h-screen bg-background overflow-hidden">
        <div class="flex justify-between items-center px-4 py-2 text-white ">
            <span class=" bg-primary rounded-20 px-2">桌號</span>
            <h1 class="pr-4 text-primary text-xl font-bold">XX精緻早午餐</h1>
            <i class="ri-shopping-cart-line bg-primary rounded-20 px-2"></i>
        </div>
        <img class="p-4" src="/src/assets/image/phone-banner.jpg" alt="">
        <div class="flex gap-2 pb-6 px-4 overflow-auto ">
            <button class="py-2 rounded-30 w-24 flex-none bg-white text-primary" v-for="item in category" :key="item">{{ item }}</button>
        </div>
        <h2 class="pl-4 pb-2 text-2xl font-extrabold text-primary">
            熱門精選
        </h2>
        <div class="flex gap-2 px-4 pb-6 overflow-x-auto">
            <div class="space-x-2 bg-white rounded-lg w-[160px] flex-none">
                <img src="" class="h-[135px] bg-slate-300" alt="">
                <div class="pl-4 py-2 space-y-px">
                    <h3>炒泡麵</h3>
                    <p class=" text-primary">NT$60</p>
                </div>
            </div>
            <div class=" space-x-2 bg-white rounded-lg w-[160px] flex-none">
                <img src="" class="h-[135px] bg-slate-300 " alt="">
                <div class="pl-4 py-2 space-y-px">
                    <h3>炒泡麵</h3>
                    <p class=" text-primary">NT$60</p>
                </div>
            </div>
            <div class="space-x-2 bg-white rounded-lg w-[160px] flex-none">
                <img src="" class="h-[135px] bg-slate-300" alt="">
                <div class="pl-4 py-2 space-y-px">
                    <h3>炒泡麵</h3>
                    <p class=" text-primary">NT$60</p>
                </div>
            </div>
        </div>
        <h2 class="pl-4 pb-2 text-2xl font-extrabold text-primary">
            熱門套餐
        </h2>
        <div class="">
            <div class="flex flex-col px-4 gap-2 overflow-y-auto">
            <div class="flex justify-between items-center px-4 py-2 bg-white rounded-xl flex-none">
                <div>
                    <h3 class="font-normal">厚牛套餐</h3>
                    <p class="text-sm">含厚切牛肉 薯條 中杯紅茶</p>
                    <p class="text-primary">NT$120</p>
                </div>
                <div class="bg-slate-300 rounded-xl">
                    <img src="" class="h-[116px] w-[116px] rounded-xl" alt="">
                </div>
            </div><div class=" flex justify-between items-center px-4 py-2 bg-white rounded-xl flex-none">
                <div>
                    <h3 class="font-normal">厚牛套餐</h3>
                    <p class="text-sm">含厚切牛肉 薯條 中杯紅茶</p>
                    <p class="text-primary">NT$120</p>
                </div>
                <div class="bg-slate-300 rounded-xl">
                    <img src="" class="h-[116px] w-[116px] rounded-xl" alt="">
                </div>
            </div><div class=" flex justify-between items-center px-4 py-2 bg-white rounded-xl flex-none">
                <div>
                    <h3 class="font-normal">厚牛套餐</h3>
                    <p class="text-sm">含厚切牛肉 薯條 中杯紅茶</p>
                    <p class="text-primary">NT$120</p>
                </div>
                <div class="bg-slate-300 rounded-xl">
                    <img src="" class="h-[116px] w-[116px] rounded-xl" alt="">
                </div>
            </div>
        </div>
        </div>
    </div>
</template>