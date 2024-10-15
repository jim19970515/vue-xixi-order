import { ref, computed,watchEffect } from 'vue'
import axios from 'axios'

import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', () => {
    //商品data
    const Products=ref([])
    watchEffect(async () => {
        try{
            for (let i = 1; i < 3; i++) {
                const { data } = await axios.get(`https://vue-course-api.hexschool.io/api/f0920515972/products?page=${i}`)
                for(let i=0;i<data.products.length;i++){
                    Products.value.push(data.products[i])
                }
                console.log('try產品取得成功')
            }
        }catch(err){
            console.log('產品取得失敗',err)
        }
        console.log(Products.value)
    })
    //購物車data
    const cartData = ref({
        final_total:'',
        product:[]
    })
    watchEffect(async ()=>{
        const {data} = await axios.get(`https://vue-course-api.hexschool.io/api/f0920515972/cart`)
        console.log(data.data)
        cartData.value.final_total = data.data.final_total //取得購物車總Total
        cartData.value.product.push(data.data.carts) //取得購物車列表
    })
    console.log(cartData.value)
return { Products,cartData }
})