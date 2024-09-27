<template>
    <div class="h-screen overflow-hidden bg-[#F5EFE2]">
        <div class="flex items-center px-4 py-2 text-white text-base font-semibold">
            <button class="px-[10px] bg-primary rounded-20" @click="toggleTotal">桌號:{{ orderStore.tableNumber }}</button>
            <h1 class="text-center mx-auto pr-8 text-primary text-xl font-bold">xxxx早午餐</h1>
            <i class="ri-shopping-cart-line px-[10px] bg-primary rounded-20"></i>
        </div>
        <img class="p-4 flex-none" src="/src/assets/image/phone-banner.jpg" alt="" />
        <div class="flex items-center gap-2 px-4 pb-6 font-bold overflow-x-auto">
            <div class="flex items-center gap-2 p-4 py-2 text-base font-bold text-[#797F84] bg-white rounded-30 relative">
                <i class="ri-search-line" @click="toggleSearch()"></i>
                <input type="text" class="pl-2" v-if="search" placeholder="Search" :class="search ? 'w-24' : ''" v-model="searchText.text" @keyup.enter="filterSearchProduct" />
                <!-- 搜尋model -->
                <div class="absolute top-10 z-50" v-if="filterProductModel">
                    <div class="fixed">
                        <div class="flex items-center p-2 mt-2 gap-2 rounded-10 bg-white" v-for="(item, i) in filterProduct" :key="i" @click="goToProducts(item.id)">
                            <h5 class="text-sm">{{ item.title }}</h5>
                            <img :src="item.imageUrl" class="rounded-10 h-20 w-20" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <button
                class="py-2 rounded-30 w-24 flex-none"
                :class="item == selectCategory ? 'bg-primary text-white' : 'bg-white text-primary'"
                v-for="(item, i) in category"
                :key="i"
                @click="renewProducts(item)"
            >
                {{ item }}
            </button>
        </div>
        <h2 class="pl-4 pb-2 text-2xl font-extrabold text-primary">熱門精選</h2>
        <div class="flex items-center gap-2 px-4 pb-[10px] overflow-x-auto">
            <div class="space-y-2 pb-2 bg-white rounded-lg flex-none" v-for="(item, i) in products" :key="i" @click="goToProducts(item.id)">
                <img :src="item.imageUrl" class="w-[140px] h-[135px] rounded-t-lg" alt="" />
                <div class="space-y-1 pl-4 text-base font-bold">
                    <h3>{{ item.title }}</h3>
                    <p class="text-primary">NT$ {{ item.price }}</p>
                </div>
            </div>
        </div>
        <h2 class="pl-4 pb-2 text-2xl font-extrabold text-primary">{{ selectCategory }}</h2>
        <div class="flex flex-col gap-2 px-4 max-h-screen overflow-y-auto">
            <div v-for="(item, i) in categoryProducts" :key="i" @click="goToProducts(item.id)" v-show="item.category == selectCategory">
                <div class="flex items-center justify-between px-4 py-2 rounded-lg bg-white">
                    <div class="space-y-2 text-lg">
                        <h4 class="font-bold">{{ item.title }}</h4>
                        <p class="text-sm">{{ item.content }}</p>
                        <p class="text-primary">NT$ {{ item.price }}</p>
                    </div>
                    <img :src="item.imageUrl" class="h-[116px] w-[116px] rounded-10" alt="" />
                </div>
            </div>
        </div>
        <!-- 桌號 -->
        <div class="fixed h-screen top-0 w-full z-50 bg-gray-800 bg-opacity-50" v-if="tableNumberModel">
            <div class="absolute top-80 w-full">
                <h5 class="text-center mb-2 text-2xl text-white font-extrabold bg-[#a16b05]">請選擇桌號</h5>
                <div class="flex items-center gap-2 bg-primary p-4">
                    <button class="w-1/3 py-4 rounded-10 bg-[#a16b05] hover:bg-[#e6b14e] active:bg-[#e6b14e] text-white opacity-100" v-for="(item, i) in 10" :key="i" @click="chooseTableNumber(item)">
                        {{ item }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>
<script setup>
import axios from 'axios'
import { computed, ref, watchEffect, reactive, watch } from 'vue'

const products = ref([]) //橫排商品
const categoryProducts = ref([]) //分類商品
const selectCategory = ref('套餐') //副選單 title
// btn category 總類
const category = ref(['套餐', '麵包', '蛋餅', '炒麵', '吐司', '炸物', '飲品'])

//預設選單
watchEffect(async () => {
    const { data } = await axios.get(`https://vue-course-api.hexschool.io/api/f0920515972/products`)
    products.value = data.products
    categoryProducts.value = data.products
    console.log(products.value)
})
//
const renewProducts = (item) => {
    selectCategory.value = item
}

import { useOrderStore } from '@/stores/counter'
import router from '@/router'
import { data } from 'autoprefixer'
const orderStore = useOrderStore()
// 開啟桌號model 選擇桌號
const tableNumberModel = ref('true')
//判斷 orderStore.tableNumber 是否為空值 空值維持false
if (orderStore.tableNumber !== null) {
    tableNumberModel.value = false
}
// const tableNumber = ref()
function toggleTotal() {
    tableNumberModel.value = !tableNumberModel.value
}
//選擇桌號
function chooseTableNumber(item) {
    orderStore.tableNumber = item
    console.log('選擇了', `${item}`, '桌')
    tableNumberModel.value = !tableNumberModel.value
}

//搜尋商品
const search = ref(false)
const searchText = reactive({ text: '' })
const filterProductModel = ref(false)
const filterProduct = ref([{}])
function toggleSearch() {
    search.value = !search.value
}
watch(searchText, function (searchText) {
    filterProduct.value = products.value.filter((item) => item.title == searchText.text)
    console.log(filterProduct.value)
    filterProductModel.value = true
})

//點擊進入查看商品
var goToProducts = (productId) => {
    router.push({ name: 'SingleProduct', params: { id: productId } })
}


function promiseFn(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num) {
                resolve('成功')
            } else {
                reject(new Error('失敗'))
            }
        })
    })
}
</script>
