<script setup>
import { useCartStore } from '@/stores/store';
import router from '@/router';
const emits = defineEmits(['closeCartModel'])

const store = useCartStore()

const closeCartModal = ()=>{
    emits('closeCartModel')
}
const goCheckOut = () =>{
    if(store.cartData.product.length >0){
        router.push('/CheckOut')
    }
}
</script>
<template>
    <div class="h-screen w-screen bg-white bg-opacity-50 backdrop-blur-sm z-50">
        <div class="flex flex-col m-4 p-4 bg-primary h-full overflow-hidden">
            <div class="flex justify-between items-center pb-2 text-white">
                <div class="flex items-center gap-2" @click="closeCartModal">
                    <i class="ri-arrow-left-line"></i>
                    <span>繼續購物、、</span>
                </div>
                <span>桌號：{{ store.tableNumber }}</span>
            </div>
            <h1 class="py-2 text-center w-full bg-white text-primary">購物車清單</h1>
            <div v-if="store.cartData.product.length > 0" class="overflow-y-auto max-h-full mb-auto mt-2">
                <div class="bg-white p-2 mt-2 relative" v-for="item in store.cartData.product" :key="item.id"> 
                    <div class="flex justify-between">
                        <div class="flex flex-col">
                            <h2>{{ item.product.title }}</h2>
                            <p>{{ item.product.content }}</p>
                            <p>商品數量 {{ item.product.num }}</p>
                            <p class="text-primary text-2xl font-bold">{{ item.total }}</p>
                        </div>
                        <img :src="item.product.imageUrl" class="object-cover w-[104px] h-[104px]" alt="">
                        <button class=" absolute bottom-2 right-2 text-white bg-primary" @click="store.deleteCartData(item.id)">刪除</button>
                    </div>
                </div>
            </div>
            <div v-else class="flex flex-col justify-center items-center my-auto">
                <img src="../assets/image/cart.png" class=" w-60" alt="">
                <p class="text-3xl text-white font-bold">購物車為空</p>
            </div>
            <div class="flex justify-between items-end py-2 h-[94px]">
                <div class="flex flex-col text-white pl-2 flex-dir">
                    <h3 class="text-lg font-medium">total</h3>
                    <p class="text-4xl font-black">{{ store.cartData.final_total }}</p>
                </div>
                <button class="px-14 h-full bg-white text-primary text-3xl font-extrabold rounded-lg active:bg-secondary active:text-white duration-75" @click="goCheckOut">結帳</button>
            </div>
        </div>
    </div>
</template>