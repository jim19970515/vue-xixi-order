<script setup>
    import { useDetailsStore } from '@/stores/store';
    import { useRoute } from 'vue-router';
    import CustomerInfo from '@/components/CustomerInfo.vue';
    import { useCustomerInfo } from '@/stores/store';
    import router from '@/router';
    
    const store = useDetailsStore()
    const route = useRoute()
    const id = route.params.id
    store.orderId = id
    store.getDetailsData()
    const infoStore = useCustomerInfo()

    const goHome = () =>{
        router.push({name:'SelectTable'})
    }
</script>
<template>
    <div class="bg-background h-full">
      <div class=" sticky top-0 bg-background z-20">
        <h1 class="py-4 text-primary text-xl font-bold text-center">心心精緻早午餐</h1>
        <i class="absolute top-4 left-4 ri-home-office-fill text-white text-2xl bg-primary px-1 rounded-full" @click="goHome"></i>
        <i class="absolute top-4 right-4 ri-user-search-fill text-white text-2xl bg-primary px-1 rounded-full" @click="infoStore.toggleInfoModal"></i>
        <div class="h-8 bg-primary"></div>
      </div>
        <div class="flex justify-between px-4 h-[900px]">
            <div class="w-full mx-4 pt-4 border-2 border-y-0 border-[#B79448]">
                <!-- 桌號 -->
                <div class="grid grid-cols-2 gap-2 px-4">
                    <div class="flex gap-2 py-2 items-center justify-center h-20 border-4 border-[#960404] text-[#DC0303] rounded-10">
                        <p class="text-2xl font-bold w-14 text-center">內用桌號</p>
                        <p class="text-4xl font-bold">0{{ store.detailsUserData.address }}</p>
                    </div>
                    <div class="flex gap-2 py-2 items-center justify-center h-20 border-4 border-[#960404] text-[#DC0303] rounded-10">
                        <p class="text-2xl font-bold w-14 text-center">取餐編號</p>
                        <p class="text-3xl font-bold">{{ store.detailsUserData.email }}</p>
                    </div>
                </div>
                <!-- 訂餐資訊 -->
                <div class="flex justify-between py-4 mx-4">
                    <h2 class="text-xl">訂餐資訊</h2>
                    <p class="text-lg">訂購時間 : {{ store.detailsDate }}</p>
                </div>
                <!-- 訂單狀態 -->
                <div class="flex flex-col gap-2 p-4 border-y-2 border-primary w-full">
                    <h2 class="text-xl font-medium text-primary">訂單狀態</h2>
                    <div class="flex justify-between items-center px-6 relative">
                        <div class="flex flex-col gap-px items-center">
                            <div class="rounded-full w-[24px] h-[24px] z-10" :class="!store.detailsOrderData.is_paid?'bg-[#06AB20]':'bg-[#B0B0B0]'"></div>
                            <p :class="!store.detailsOrderData.is_paid?'text-[#06AB20]':'text-[#B0B0B0]'">已下單</p>
                        </div>
                        <div class="flex flex-col gap-px items-center">
                            <div class="rounded-full w-[24px] h-[24px] z-10" :class="store.detailsOrderData.is_paid?'bg-primary':'bg-[#B0B0B0]'"></div>
                            <p :class="store.detailsOrderData.is_paid?'text-primary':'text-[#B0B0B0]'">已接單</p>
                        </div>
                        <div class="flex flex-col gap-px items-center">
                            <div class="rounded-full w-[24px] h-[24px] bg-[#B0B0B0] z-10"></div>
                            <p class="text-[#B0B0B0]">訂單完成</p>
                        </div>
                        <div class=" absolute top-1/4 border-t-2 mx-4 border-black w-4/6 "></div>
                    </div>
                </div>
                <!-- 付款狀態 -->
                    <div class="flex justify-between items-center p-4 border-b-2 border-primary">
                    <h2 class="text-xl font-medium text-primary">付款狀態</h2>
                        <div class="flex items-center gap-2">
                            <div class="flex items-center px-2 text-base text-[#BB09F4] font-bold bg-white border-2 border-[#BB09F4] rounded-10">
                                <i class="ri-exchange-dollar-fill"></i>
                                <p>現金支付</p>
                            </div>
                            <p v-if="store.detailsOrderData.is_paid" class="px-2 text-[#06AB20] font-bold bg-white border-2 border-[#06AB20] rounded-10">已付款</p>
                            <p v-else class="px-2 text-red-600 font-bold bg-white border-2 border-red-600 rounded-10">未付款</p>
                        </div>
                    </div>
                <!-- 訂單明細 -->
                <h2 class=" text-center py-2 text-xl font-medium text-third">訂單明細</h2>
                <div class="max-h-full overflow-y-auto">
                        <div class="grid grid-cols-3 gap-12 px-6 py-2 bg-primary">
                        <h3 class="text-center text-white">商品</h3>
                        <h3 class="text-center text-white">數量</h3>
                        <h3 class="text-center text-white">小計</h3>
                    </div>
                    <div class="grid grid-cols-3 gap-12 px-6 py-5 bg-white border-b-2 border-[#B0B0B0]" v-for="item in store.detailsOrderData.products" :key="item.id">
                        <h3 class="text-primary text-center font-medium">{{item.product.title}}</h3>
                        <h3 class="text-center font-medium">{{ item.qty }}</h3>
                        <h3 class="text-center font-medium">${{ item.total }}</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed bottom-0 w-screen">
            <div class="bg-primary flex justify-end px-8">
                <div class="flex items-center gap-2 my-2 p-2 bg-background rounded-10  border-4 border-[#DC0303]">
                    <p class="text-xl">總計</p>
                    <p class="font-bold text-3xl text-[#DC0303]">NT ${{ store.detailsTotal }}</p>
                </div>
            </div>
            <p class="p-2 text-center bg-background">餐點如有問題，請洽服務人員</p>
        </div>
        <Teleport to="body">
            <Loading/>
        </Teleport>
        <Teleport to="body">
            <CustomerInfo v-if="infoStore.InfoModal"/>
        </Teleport>
    </div>
</template>