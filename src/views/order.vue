<script setup>
import {ref,reactive,computed} from 'vue'
import SingleProductModal from '../components/SingleProductModal.vue'
import Products from '../components/products.vue'

import { useOrderStore } from '@/stores/counter';
const store = useOrderStore()

const products = computed(()=>store.Products)

const category = reactive(['套餐','吐司','漢堡', '蛋餅', '炒麵', '炸物', '飲品'])

//單商品彈窗
const singleModal =ref(false)
const SingleProduct = ref()
const closeSingleModal = (item)=>{
    singleModal.value = !singleModal.value
    SingleProduct.value = item
}
//選擇商品類別
const selectCategory = ref('套餐')
const activeBtnStyle = ref(['bg-primary','text-white'])
const toggleCategory =(item)=>{
    selectCategory.value = item
}
const buttonStyle=(item)=>{
    return item == selectCategory.value? activeBtnStyle.value:"bg-white"
}
</script>
<template>
    <div class=" h-screen bg-background overflow-hidden">
        <div class="flex justify-between items-center px-4 py-2 text-white">
            <span class=" bg-primary rounded-20 px-2">桌號</span>
            <h1 class="pr-4 text-primary text-xl font-bold">XX精緻早午餐</h1>
            <i class="ri-shopping-cart-line bg-primary rounded-20 px-2"></i>
        </div>
        <img class="p-4" src="/src/assets/image/phone-banner.jpg" alt="">
        <div class="flex gap-2 pb-6 px-4 overflow-auto">
            <button class="py-2 rounded-30 w-24 flex-none text-primary" v-for="item in category" :key="item" :class="buttonStyle(item)" @click="toggleCategory(item)">{{ item }}</button>
        </div>
            <div class="flex flex-col px-4 gap-2 overflow-y-auto">
                <Products :products="products" @toggle-single-productModal="closeSingleModal" :select-category="selectCategory"/>
            </div>
            <Transition name="productModal" enter-from-class="transform translate-y-full opacity-0" enter-to-class="transform translate-y-0 opacity-100 duration-500" leave-active-class="transform -translate-y-full opacity-0 duration-500">
                <SingleProductModal v-if="singleModal" :single-modal="singleModal" :single-product ='SingleProduct' @close-single-modal="closeSingleModal" class="fixed bottom-0" />
            </Transition>
    </div>
</template>