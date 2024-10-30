<script setup>
        import { useDetailsStore,useCustomerInfo } from '@/stores/store';
        const store = useDetailsStore()
        const infoStore = useCustomerInfo()
</script>
<template>
    <div class="fixed top-0 h-screen w-screen bg-primary p-4 pb-0 z-50 overflow-hidden">
        <i class="absolute top-2 right-4 p-2 ri-close-large-fill text-white text-2xl bg-primary px-1 rounded-full" @click="infoStore.toggleInfoModal"></i>
        <div class="bg-white rounded-t-20 h-full mt-12 overflow-h-auto">
            <div class="grid grid-cols-2 gap-2 p-4 items-center">
                <img src="/src/assets/image/infoPic.png" class=" bg-primary p-4 rounded-t-20" alt="">
                <h2 class=" text-center text-primary text-2xl font-bold">您的訂單資料</h2>
            </div>
            <div class="p-4 text-center space-y-4">
                <h3 class="text-white bg-primary text-xl w-full rounded-t-10 p-2">姓名/name</h3>
                <p class=" text-gray-400  text-2xl font-semibold">{{ store.detailsUserData.name }}</p>
            </div>
            <div class="p-4 text-center space-y-4">
                <h3 class="text-white bg-primary text-xl w-full rounded-t-10 p-2">電話/tel</h3>
                <p class=" text-gray-400  text-2xl font-semibold">{{ store.detailsUserData.tel }}</p>
            </div>
            <div class="p-4 text-center space-y-2">
                <h3 class="text-white bg-primary text-xl w-full rounded-t-10 p-2 mb-4">店家資訊</h3>
                <p class=" text-gray-400 text-lg font-semibold">心心精緻早午餐</p>
                <p class=" text-gray-400 text-lg font-semibold">電話：02-2204-9135</p>
                <p class=" text-gray-400 text-lg font-semibold">營業時間： 05:00~14:00</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.046322994668!2d121.44067707600117!3d25.03250197781735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7e1acb944a3%3A0x8da2e7b6e7b76e32!2z5b-D5b-D57K-57e75pep5Y2I6aSQ!5e0!3m2!1szh-TW!2stw!4v1730279639615!5m2!1szh-TW!2stw" class="p-4 w-full" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>