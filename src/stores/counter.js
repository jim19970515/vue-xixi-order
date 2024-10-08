import { ref, computed,watchEffect } from 'vue'
import axios from 'axios'

import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', () => {
    // const singleModal = ref(null)

    const Products=ref([])
    // watchEffect(async () => {
    //     try{
    //         const { data } = await axios.get(`https://vue-course-api.hexschool.io/api/f0920515972/products?page=${1}`)
    //         console.log('try產品取得成功',{ data })
    //         Products.value = data.products
    //     }catch(err){
    //         console.log('產品取得失敗',err)
    //     }
    // })
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
    return { Products }
})