<script setup>
    import {reactive, ref,computed,watch} from 'vue'
    import router from '@/router';
    import { useCartStore,useCheckOut } from '@/stores/store';
    
    const store = useCheckOut()
    const firstName = ref('')
    const gender = ref('')

    const getData = localStorage.getItem('userData')
    const getDataArr = JSON.parse(getData)
    store.checkData.user.tel = getDataArr.tel
    firstName.value = getDataArr.name
    
    watch([firstName,gender],()=>{
        store.$patch((state)=>{
        state.checkData.user.name = firstName.value + gender.value
    })
    })
    const goCart =()=>{
        router.push('/')
        const store = useCartStore()
        store.cartModal = true
    }
    //獲取訂單總金額
    const cartStore = useCartStore()
</script>
<template>
    <div class="fixed bottom-0 h-screen w-screen bg-white bg-opacity-50 backdrop-blur-sm">
        <div class="flex flex-col m-4 p-4 bg-primary h-full overflow-hidden">
            <div class="flex justify-between items-center pb-2 text-white">
                <div class="flex items-center gap-2" @click="goCart">
                    <i class="ri-arrow-left-line"></i>
                    <span>返回購物車、、</span>
                </div>
                <span>桌號：01</span>
            </div>                 
            <img src="/src/assets/image/couponLogo.png" class="w-[128px] h-[128px] mx-auto my-2 p-2 rounded-30 bg-white" alt="">
            <h2 class="mx-auto py-2 text-lg fnot-bold text-white">選擇付款方式</h2>
            <div class="flex items-center justify-center gap-2 pt-4 pb-2 text-4xl font-black">
                <button class="bg-[#E0A533] text-white  active:bg-white active:text-primary rounded-20 p-2" focus>現金付款</button>
                <button class="bg-[#E0A533] text-white rounded-20 p-2">${{ cartStore.cartData.final_total }}</button>
            </div>
            <h2 class="mx-auto py-2 text-lg fnot-bold text-white">填寫聯絡方式</h2>
            <div class="grid grid-cols-4 gap-2">
                <label for="name" class="p-2 text-center rounded-20 bg-[#E0A533] text-white font-bold">姓名</label>
                <input type="text" placeholder="lastName" class="col-span-2 p-2 text-center rounded-20 bg-[#E0A533] text-white placeholder:text-white placeholder:font-bold" v-model="firstName">
                <select class="p-2 rounded-20 bg-[#E0A533] text-white" v-model="gender">
                    <option selected>先生</option>
                    <option >小姐</option>
                </select>
                {{ gender }}
            </div>
            <div class="grid grid-cols-4 gap-2 mt-2">
                <label for="mail" class="p-2 text-center rounded-20 bg-[#E0A533] text-white font-bold">電話</label>
                <input type="text" placeholder="number" class="col-span-3 p-2 text-center rounded-20 bg-[#E0A533] text-white placeholder:text-white placeholder:font-bold" v-model="store.checkData.user.tel">
            </div>
            <label class="mx-auto py-2 text-lg fnot-bold text-white">備註</label>
            <textarea  class="bg-[#E0A533] rounded-20 h-full p-2 placeholder:text-white placeholder:font-bold" v-model="store.checkData.message"></textarea>
            <button class="mx-auto bg-white text-primary py-3 px-12 my-2 text-3xl font-extrabold rounded-xl" @click="store.updateOrderData">送出訂單</button>
        </div> 
    </div>
</template>