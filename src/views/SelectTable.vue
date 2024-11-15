<script setup>
import { ref } from "vue";
import router from "@/router";
import Loading from "@/components/Loading.vue";
import { showLoading, hideLoading } from "@/utils/evenButs";
const numberArray = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
const goOrder = (item) => {
  router.push({ name: "order", params: { id: item } });
};
</script>
<template>
  <div class="h-screen bg-background flex flex-col pt-20 pb-40">
    <div>
      <div
        class="w-0 h-0 border-t-[100px] border-l-[100px] border-l-transparent border-t-primary absolute right-0 top-0"
      ></div>
      <router-link to="/camera">
        <i
          class="ri-qr-code-line text-4xl text-white absolute top-2 right-2"
        ></i>
      </router-link>
    </div>
    <img
      class="h-32 w-32 mx-auto"
      src="/src/assets/image/couponLogo.png"
      alt=""
    />
    <h1 class="text-center text-primary text-5xl font-extrabold my-auto">
      請選桌號
    </h1>
    <div class="grid grid-cols-3 gap-2 px-4">
      <button
        class="bg-primary rounded-10 text-white h-20 text-3xl font-bold active:bg-third"
        @click="goOrder(item)"
        v-for="item in numberArray"
        :key="item"
      >
        {{ item }}
      </button>
    </div>
    <teleport to="body">
      <Loading />
    </teleport>
  </div>
</template>
