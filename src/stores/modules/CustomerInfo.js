import { defineStore } from "pinia";
import {ref} from 'vue'

export const useCustomerInfo = defineStore('CustomerInfo',()=>{
    const InfoModal = ref(false)
    const toggleInfoModal = () =>{
        InfoModal.value = !InfoModal.value 
        console.log(InfoModal.value)
    }
    return {InfoModal,toggleInfoModal}
})