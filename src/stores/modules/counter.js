import { ref, computed,watchEffect,onMounted } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

const api = 'https://vue-course-api.hexschool.io/api/f0920515972'

export const useOrderStore = defineStore('order', () => {
    //商品data
    const Products=ref([])
    const getProduct = async()=>{
        const { data } = await axios.get(`${api}/products/all`)
        Products.value = data.products.map(item => item)
    }
return { Products,getProduct }
})