<script setup>

</script>
<template>
    <div class="h-screen bg-background overflow-hidden">
        <h1 class=" py-4 text-primary text-xl font-bold text-center">XX精緻早午餐</h1>
        <div class="h-8 bg-secondary"></div>
        <div class="flex items-center justify-between px-4">
            <div class="w-full mx-4 pt-4 border-2 border-y-0 border-[#B79448]">
                <!-- 桌號 -->
                <div class="flex items-center justify-between mx-4">
                    <div class="flex items-center gap-2 px-4 py-2 border-4 border-[#960404] text-[#DC0303] rounded-10">
                        <p class="w-12 text-2xl font-medium">內用桌號</p>
                        <p class="text-5xl font-bold">01</p>
                    </div>
                    <div class="flex items-center gap-5 text-[#DC0303]">
                        <p class="w-12 text-2xl font-medium">取餐編號</p>
                        <p class="text-5xl font-bold">151</p>
                    </div>
                </div>
                <!-- 訂餐資訊 -->
                <div class="flex justify-between py-4 mx-4">
                    <h2 class="text-xl">訂餐資訊</h2>
                    <p class="text-lg">訂購時間 : 2024-5-31 00:00</p>
                </div>
                <!-- 訂單狀態 -->
                <div class="flex flex-col gap-2 p-4 border-y-2 border-primary w-full">
                    <h2 class="text-xl">訂單狀態</h2>
                    <div class="flex justify-between items-center px-6 relative">
                        <div class="flex flex-col gap-px items-center">
                            <div class="rounded-full w-[24px] h-[24px] bg-[#B0B0B0] z-10 "></div>
                            <p>已下單</p>
                        </div>
                        <div class="flex flex-col gap-px items-center">
                            <div class="rounded-full w-[24px] h-[24px] bg-primary z-10"></div>
                            <p class=" text-primary">已接單</p>
                        </div>
                        <div class="flex flex-col gap-px items-center">
                            <div class="rounded-full w-[24px] h-[24px] bg-[#B0B0B0] z-10"></div>
                            <p>訂單完成</p>
                        </div>
                        <div class=" absolute top-1/4 border-t-2 mx-4 border-black w-4/6 "></div>
                    </div>
                </div>
                <!-- 付款狀態 -->
                 <div class="flex justify-between items-center p-4 border-b-2 border-primary ">
                    <h2 class="text-xl">付款狀態</h2>
                        <div class="flex items-center gap-2">
                            <div class="flex items-center px-2 text-base text-[#BB09F4] font-bold bg-white border-2 border-[#BB09F4] rounded-10">
                                <i class="ri-exchange-dollar-fill"></i>
                                <p>現金支付</p>
                            </div>
                            <p class="px-2 text-[#06AB20] font-bold bg-white border-2 border-[#06AB20] rounded-10">已付款</p>
                        </div>
                    </div>
                <!-- 訂單明細 -->
                <h2 class=" text-center py-2 text-xl">訂單明細</h2>
                <div class="max-h-full overflow-y-auto">
                        <div class="flex justify-between px-6 py-2 bg-secondary">
                        <h3>商品</h3>
                        <h3>數量</h3>
                        <h3>小計</h3>
                    </div>
                    <div class="flex justify-between px-6 py-5 bg-white border-b-2 border-[#B0B0B0]">
                        <h3 class="text-primary">炒泡麵</h3>
                        <h3>1</h3>
                        <h3>$60</h3>
                    </div>
                    <div class="flex justify-between px-6 py-5 bg-white border-b-2 border-[#B0B0B0]">
                        <h3 class="text-primary">炒泡麵</h3>
                        <h3>1</h3>
                        <h3>$60</h3>
                    </div>
                    <div class="flex justify-between px-6 py-5 bg-white border-b-2 border-[#B0B0B0]">
                        <h3 class="text-primary">炒泡麵</h3>
                        <h3>1</h3>
                        <h3>$60</h3>
                    </div>
                    <div class="flex justify-between px-6 py-5 bg-white border-b-2 border-[#B0B0B0]">
                        <h3 class="text-primary">炒泡麵</h3>
                        <h3>1</h3>
                        <h3>$60</h3>
                    </div>
                    <div class="flex justify-between px-6 py-5 bg-white border-b-2 border-[#B0B0B0]">
                        <h3 class="text-primary">炒泡麵</h3>
                        <h3>1</h3>
                        <h3>$60</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class=" absolute bottom-0 w-screen">
            <div class="bg-secondary flex justify-end px-4">
                <div class="flex items-center gap-2 my-2 p-2 bg-white rounded-5">
                    <p>總計</p>
                    <p class="text-[#DC0303] font-bold text-xl">NT $150</p>
                </div>
            </div>
            <p class="p-2 text-center bg-background">餐點如有問題，請洽服務人員</p>
        </div>
    </div>
</template>