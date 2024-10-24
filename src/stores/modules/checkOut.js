import {ref,reactive} from 'vue'
import { defineStore } from "pinia";
import axios from "axios";
import router from '@/router';

const api = 'https://vue-course-api.hexschool.io/api/f0920515972'

export const useCheckOut = defineStore('CheckOut',()=>{
    const checkData = reactive({
        user:{
            name:'',
            tel:'',
            email:'',//用隨機數字代替
            // address:'',
        },
        message:''
    })
    //產生取餐號碼
    const getRandom = (x)=>{
        return Math.floor(Math.random()*x)
    }
    const getNumber = () =>{
        let state = ''
        let n = 0
        for(let i=0;i<3;i++){
            n = getRandom(10)
            state += n+''
        }
        return state
    }
    checkData.user.email = getNumber()
    const orderId = ref('')
    const data = checkData
    const updateOrderData = async()=>{
        await axios.post(`${api}/order`,{data}).then(res=>{
            orderId.value = res.data.orderId
        })
        localStorage.setItem('userData',JSON.stringify(checkData.user))
        router.push('/Details')
    }
    return {checkData,orderId,updateOrderData}
})
