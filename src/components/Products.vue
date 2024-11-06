<script setup>
import { ref,computed } from 'vue';
import { useOrderStore } from '@/stores/store';

//store
const store = useOrderStore()
//props 商品類別
const props = defineProps({
  selectCategory:{
    type:String,
    required:true
  }
});
const emits = defineEmits({
  toggleSingleProductModal:(payload)=>{
    return payload !== undefined
  }});

//打開singleProductsModel 將篩選的商品 emits給order在props給singleProductsModel
const toggleSingleProductModal = (item) => {
  emits("toggleSingleProductModal",item);
}
//切換商品
const products = computed(()=> store.Products)
const filterProduct = computed(()=>{
      return products.value.filter(item => item.category == props.selectCategory)
})
</script>
<template>
  <div class="flex flex-col h-[calc(100vh-312px)] p-4 gap-4">
      <h2 class="pl-2 text-primary text-3xl font-bold">
        <i class="ri-restaurant-2-line"></i>
        <span class="pl-1">{{ selectCategory }}</span>
      </h2>
      <div class="overflow-y-auto max-h-full z-20">
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md" v-for="item in filterProduct" :key="item.id">
            <div class="flex flex-col justify-between items-start">
              <h3 class="font-medium text-xl">{{ item.title }}</h3>
              <p class="pt-2 text-sm text-gray-500">{{ item.content }}</p>
              <p class="pt-6 text-primary text-xl">$ {{ item.price }}</p>
            </div>
            <div class="relative bg-slate-300 rounded-xl h-[116px] w-[116px] shrink-0">
              <img :src="item.imageUrl" class="h-full rounded-xl" alt="" />
              <button class="absolute top-0 right-0 px-2 bg-primary text-white rounded-full" @click="toggleSingleProductModal(item)">查看</button>
            </div>  
        </div>
    </div>
      </div>
  </div>
</template>
