import {ref,reactive,watchEffect,computed} from 'vue'
import { defineStore } from "pinia";
import axios from "axios";
import { useCheckOut } from './checkOut';
import { showLoading,hideLoading } from '@/utils/evenButs';

const api = 'https://vue-course-api.hexschool.io/api/f0920515972'

export const useDetailsStore = defineStore('Details',()=>{
    const detailsOrderData = reactive({ //訂單內容
        create_at:'',
        id: "",
        is_paid :false,
        message :'',
        payment_method:'',
        products:[
        ]
    })
    const detailsTotal = ref() //訂單總金額
    const detailsUserData = reactive({ //訂單人資料
        name:'',
        tel:'',
    })
    const checkOutStore = useCheckOut()

    // const localId = computed(()=>{
    //     const orderId = localStorage.getItem('orderId')
    //     return orderId
    // })
    const orderId = ref('')

    const getDetailsData = async() =>{
        showLoading()
        // const orderId = checkOutStore.orderId !== ''? checkOutStore.orderId : localId.value; 
        const {data} = await axios.get(`${api}/order/${orderId.value}`)
        hideLoading()
        // localStorage.setItem('orderId',orderId)
        //訂單內容
        detailsOrderData.create_at = data.order.create_at
        detailsOrderData.id = data.order.id
        detailsOrderData.is_paid = data.order.is_paid
        detailsOrderData.message = data.order.message
        detailsUserData.address = data.order.address
        detailsOrderData.payment_method = data.order.payment_method
        //餐點內容
        detailsOrderData.products = Object.values(data.order.products)
        console.log(detailsOrderData.products)
        //訂單總金額
        detailsTotal.value = data.order.total
        //訂單人資料
        Object.assign(detailsUserData,data.order.user)
    }
    //處理訂單時間
    const detailsDate = computed(()=>{
        const date = new Date(detailsOrderData.create_at *1000)
        const year = date.getFullYear()
        const month = date.getMonth()+1
        const day = date.getDate()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const dateString = `${year}-${month}-${day} ${hours}:${minutes}`
        return dateString
    })
    return {detailsOrderData,detailsTotal,detailsUserData,getDetailsData,detailsDate,orderId}
})