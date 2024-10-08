<script setup>
    import { ref } from 'vue'
    const props = defineProps(['singleProduct'])
    const emits = defineEmits(['closeSingleModal'])
    
    const closeModalHandler =()=>{
        emits('closeSingleModal')
    }
    // quantity 商品數量增加減少
    const quantity = ref(1)
    const addQuantity = ()=>{
        quantity.value++
    }
    const reduceQuantity =()=>{
        if(quantity.value >0){
            quantity.value--
        }else{
            quantity.value = 0
        }
    }
</script>
<template>
    <div class="h-screen w-screen  bg-white bg-opacity-50 backdrop-blur-sm">
        <i class=" absolute top-2 right-2 text-3xl ri-close-large-fill" @click="closeModalHandler"></i>
        <div class="w-screen fixed bottom-0 h-[460px] bg-background rounded-t-full flex flex-col items-center shadow-white shadow-inner">
            <img :src="props.singleProduct.imageUrl" class="h-80 w-80 absolute -top-40 object-cover rounded-full shadow-white shadow-sm border-8 border-white bg-secondary" alt="">
            <h1 class="mt-48 text-4xl font-bold text-primary">{{props.singleProduct.title}}</h1>
            <p class="pt-2 text-center">{{props.singleProduct.contnt}}</p>
            <p class="pt-8 text-5xl font-bold text-red-600">${{ props.singleProduct.price }}</p>
            <div class="flex justify-center gap-2 absolute bottom-6">
                <button class=""><i class="ri-subtract-fill py-2 px-3 rounded-full bg-white text-primary text-2xl font-extrabold" @click="reduceQuantity"></i></button>
                <button class="rounded-40 bg-primary w-[160px] pl-8 pr-2 py-2 text-white flex justify-center items-center gap-2" >
                    <span class="text-white text-3xl font-bold mx-auto text-center">{{ quantity }}</span>
                    <i class="ri-add-large-line py-2 px-3 rounded-full bg-white text-primary text-2xl font-extrabold active:bg-gray-100"@click="addQuantity"></i>
                </button>
                <button class=""><i class="ri-delete-bin-fill py-2 px-3 rounded-full bg-white text-primary text-2xl font-extrabold"></i></button>
            </div>
        </div>
    </div>
</template>
/* Rectangle 330 */

position: absolute;
width: 427px;
height: 932px;
left: 4px;
top: -1px;

background: #D9D9D9;
opacity: 0.7;
