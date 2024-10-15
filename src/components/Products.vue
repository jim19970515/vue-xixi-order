<script setup>
import { ref,computed, watch } from 'vue';
const props = defineProps(["products","selectCategory"]);
const emits = defineEmits(["toggleSingleProductModal"]);

const toggleSingleProductModal = (item) => {
  emits("toggleSingleProductModal",item);
}
//切換商品
const filterProduct = computed(()=>{
     return props.products.filter(item => item.category == props.selectCategory)
})
const search = ref('')

// const fillterProducts = computed(()=>{
//   const strArr =search.value.split(' ')
//   const arr= []
//   strArr.forEach(str =>{
//     props.products.forEach(item =>{
//       if(item.title.includes(str)&&search.value.length >=1){
//         arr.push(item)
//       }
//     })
//     // props.products.forEach(item=>{
//     //   if(item.title.includes(str)&&search.value.length >=1){
//     //       arr.push(item)
//     //   } 
//     // })
//   })
//   return arr
// })

</script>
<template>
  <!-- <input type="text" v-model.trim="search">
  <div class="flex justify-between items-center px-4 py-2 bg-white rounded-xl flex-none" v-for="item in fillterProducts" :key="item.id">
    <div>
      <h3 class="font-medium text-xl">{{ item.title }}</h3>
      <p class="pt-2 text-sm text-gray-500">{{ item.content }}</p>
      <p class="pt-6 text-primary text-xl">$ {{ item.price }}</p>
    </div>
    <div class="relative bg-slate-300 rounded-xl h-[116px] w-[116px]">
      <img :src="item.imageUrl" class="h-full rounded-xl" alt="" />
      <button class="absolute top-0 right-0 px-2 bg-primary text-white rounded-full" @click="toggleSingleProductModal(item)">查看</button>
    </div>  
  </div> -->
    <h2 class="pl-2 text-primary text-3xl font-bold"><i class="ri-restaurant-2-line"></i><span class="pl-1">{{ selectCategory }}</span></h2>
  <div
    class="flex justify-between items-center px-4 py-2 bg-white rounded-xl flex-none" v-for="item in filterProduct" :key="item.id">
    <div>
      <h3 class="font-medium text-xl">{{ item.title }}</h3>
      <p class="pt-2 text-sm text-gray-500">{{ item.content }}</p>
      <p class="pt-6 text-primary text-xl">$ {{ item.price }}</p>
    </div>
    <div class="relative bg-slate-300 rounded-xl h-[116px] w-[116px]">
      <img :src="item.imageUrl" class="h-full rounded-xl" alt="" />
      <button class="absolute top-0 right-0 px-2 bg-primary text-white rounded-full" @click="toggleSingleProductModal(item)">查看</button>
    </div>  
  </div>
</template>
