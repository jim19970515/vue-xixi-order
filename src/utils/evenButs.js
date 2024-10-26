import {ref} from 'vue'

export const isLoading = ref(false)
export const isAlert = ref(false)

export function showLoading(){
    isLoading.value = true
}

export function hideLoading(){
    setTimeout(()=>{
        isLoading.value = false
    },100)
}

export function showAlert(){
    isAlert.value = true
}

export function hideAlert(){
    setTimeout(()=>{
        isAlert.value = false
    },3000)
}