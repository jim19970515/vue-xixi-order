<script setup>
import {ref,reactive} from 'vue'
import SingleProductModal from '../components/SingleProductModal.vue'
import Products from '../components/Products.vue'
import CartModal from '../components/CartModal.vue'
import TableNumber from '../components/TableNumber.vue'
import Loading from '@/components/Loading.vue'
import { useCartStore } from '@/stores/store'

const category = reactive(['套餐','吐司','漢堡', '蛋餅', '炒麵', '炸物', '飲品'])

//單商品彈窗
const singleModalProps =ref({
    singleModal:false,
    singleProduct:{}
})
const closeSingleModal = (item)=>{
    singleModalProps.value.singleModal = !singleModalProps.value.singleModal
    singleModalProps.value.singleProduct = item
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
//cart 購物車
const store = useCartStore()
const cartModelHandler = () =>{
    store.cartModal = !store.cartModal
    store.getCartData()
}
//桌號選擇
const tableModal = ref(false)
const tableNumber = ref()
const chooseNumber = (number)=>{
    tableNumber.value = number
}
</script>
<template>
    <div class="h-screen bg-background overflow-hidden -z-50">
        <div class="flex flex-row items-center px-4 py-2 text-white">
            <span class=" bg-primary rounded-20 px-2 z-20">桌號 {{ tableNumber }}</span>
            <h1 class="text-center mx-auto text-white bg-primary rounded-20  text-xl font-bold px-2 z-20 shadow-md">XX精緻早午餐</h1>
            <i class="ri-shopping-cart-line bg-primary rounded-20 px-2 z-20" @click="cartModelHandler"></i>
        </div>
        <div class="flex">
            <img class="p-4 z-20" src="/src/assets/image/phone-banner.jpg" alt="">
        </div>
        <div class="flex flex-row gap-2 pb-6 px-4 overflow-x-auto">
            <button class="py-2 rounded-30 w-24 flex-none text-primary shadow-md z-20" v-for="item in category" :key="item" :class="buttonStyle(item)" @click="toggleCategory(item)">{{ item }}</button>
        </div>
        <Products :select-category="selectCategory" @toggle-single-productModal="closeSingleModal" class="z-10"/>
        <Teleport to='body'>
            <Transition name="productModal" enter-from-class="transform translate-y-full opacity-0" enter-to-class="transform translate-y-0 opacity-100 duration-500" leave-active-class="transform -translate-y-full opacity-0 duration-500">
                <SingleProductModal v-if="singleModalProps.singleModal" v-bind="singleModalProps" @close-single-modal="closeSingleModal" class="fixed bottom-0" />
            </Transition>
        </Teleport>
            <CartModal v-if="store.cartModal" @close-cart-model="cartModelHandler" class="fixed top-0"/>
        <TableNumber v-if="tableModal" @chooseNumber="chooseNumber(number)" v-model="tableModal"/>
        <Teleport to="body">
            <Loading/>
        </Teleport>
        <img class="fixed -top-32 -left-32 rotate-45 z-10" src="/src/assets/image/tableRunner.png" alt="">
        <img class="fixed -bottom-32 -right-32 -rotate-45 z-10" src="/src/assets/image/tableRunner.png" alt="">
    </div>
</template>