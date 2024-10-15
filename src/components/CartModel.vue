<script setup>
import axios from 'axios';
import router from '@/router';
import { watchEffect,ref,watch,onMounted} from 'vue';

const cartDate = ref()
const cartsDate = ref()

watchEffect(async()=>{
    const {data} = await axios.get(`https://vue-course-api.hexschool.io/api/f0920515972/cart`)
    cartDate.value = data.data
    cartsDate.value = data.data.carts
    console.log(cartDate.value)
    console.log(cartsDate.value)
})
//刪除購物車內容
const deleteCart = (cartDateId) =>{
    axios.delete(`https://vue-course-api.hexschool.io/api/f0920515972/cart/${cartDateId}`).then(res =>{
        console.log(res.data)
        resetData()
    })
}
//關閉購物車
const emits = defineEmits(['closeCartModel'])
const closeCartHandler =()=>{
    emits('closeCartModel')
}

const resetData = async() =>{
    const {data} = await axios.get(`https://vue-course-api.hexschool.io/api/f0920515972/cart`)
    cartDate.value = data.data
    cartsDate.value = data.data.carts
    console.log(cartDate.value)
    console.log(cartsDate.value)
}
const goCheckOut=()=>{
    router.push({path:'/CheckOut'})
}
</script>
<template>
    <div class="fixed bottom-0 h-screen w-screen bg-white bg-opacity-50 backdrop-blur-sm">
        <div class="flex flex-col m-4 p-4 bg-primary h-full overflow-hidden">
            <div class="flex justify-between items-center pb-2 text-white">
                <div class="flex items-center gap-2">
                    <i class="ri-arrow-left-line" @click="closeCartHandler"></i>
                    <span>繼續購物、、</span>
                </div>
                <span>桌號：01</span>
            </div>
            <h1 class="py-2 text-center w-full bg-white text-primary">購物車清單</h1>
            <div class="overflow-y-auto max-h-full mb-auto mt-2">
                <div class="bg-white p-2 mt-2 relative" v-for="item in cartsDate" :key="item.id"> 
                    <div class="flex justify-between">
                        <div class="flex flex-col">
                            <h2>{{ item.product.title }}</h2>
                            <p>{{ item.product.content }}</p>
                            <p>商品數量 {{ item.qty }}</p>
                            <p class="text-primary text-2xl font-bold">{{ item.total }}</p>
                        </div>
                        <img :src="item.product.imageUrl" class=" object-cover w-[104px]" alt="">
                        <i class="ri-delete-bin-5-line absolute bottom-2 right-2 bg-primary text-white px-2 py-1 rounded-tl-5 active:bg-secondary" @click="deleteCart(item.id)"></i>
                    </div>
                </div>
            </div>
            <div class="flex justify-between items-end py-2 h-[94px]">
                <div class="flex flex-col text-white pl-2 flex-dir">
                    <h3 class="text-lg font-medium">total</h3>
                    <p class="text-4xl font-black">$ {{ cartDate.final_total }}</p>
                </div>
                <button class="px-14 h-full bg-white text-primary text-3xl font-extrabold rounded-lg active:bg-secondary active:text-white duration-75" @click="goCheckOut">結帳</button>
            </div>
        </div>
    </div>
</template>