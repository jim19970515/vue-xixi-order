<script setup>

</script>
<template>
<div class="h-screen bg-background relative overflow-y-auto">
    <div class="flex justify-between items-center px-4 py-2">
        <i class="ri-arrow-left-line text-primary text-2xl active:text-white active:bg-primary duration-75 px-2 rounded-20 " ></i>
        <h1 class="pl-4 text-primary text-xl font-bold">炒泡麵</h1>
        <span class="px-2 bg-primary rounded-20 text-white">桌號1</span>
    </div> 
        <div class="px-4 py-2">
            <img src="" class=" w-[400px] h-[400px] rounded-20 bg-[#62615E]" alt="">
        </div>
            <h2 class="text-3xl font-black text-primary px-4 pt-2 pb-4">炒泡麵</h2>
        <div class="flex items-center gap-2 px-4 pb-4">
            <button class="w-20 p-2 rounded-20 bg-secondary text-white active:bg-primary duration-100">套餐+40</button>
            <button class="w-20 p-2 rounded-20 bg-white text-primary">蛋+15</button>
            <button class="w-20 p-2 rounded-20 bg-white text-primary">豬排+30</button>
            <button class="w-20 p-2 rounded-20 bg-white text-primary">卡啦+40</button>
        </div>
            <div class="px-4 pb-auto space-y-2 text-[#62615E]">
            <h3>餐點訊息</h3>
            <p>含火腿、玉米、小魚丸、燻雞</p>
            <p>套餐 含蛋、豬排、中杯紅茶</p>
        </div>
    <div class="absolute bottom-0 h-[148px] flex flex-col justify-between w-screen p-4   bg-[#B79448]">
        <div class="flex justify-between items-center px-2">
            <span class="text-2xl font-semibold text-white">原價 $60</span>
            <div class="flex items-center gap-4 text-2xl text-white">
                <i class="ri-subtract-line px-1 rounded-full bg-secondary active:bg-primary duration-100"></i>
                <span class="font-semibold">1</span>
                <i class="ri-add-line px-1 rounded-full bg-secondary active:bg-primary duration-100"></i>
            </div>
        </div>
        <button class="py-4 bg-secondary rounded-10 text-2xl text-white font-bold active:bg-whit duration-100 active:text-primary ">
            <span>加入</span>
            <i class="ri-arrow-right-line"></i>
        </button>

    </div>
</div>
</template>
