<script setup>
import { ref, computed, watch } from "vue";
import router from "@/router";
import { useCartStore, useCheckOut } from "@/stores/store";
import MessageBox from "@/components/MessageBox.vue";

const store = useCheckOut();
const cartStore = useCartStore();
// 取得儲存的顧客資料
// const getData = localStorage.getItem("userData");
// const getDataArr = JSON.parse(getData);
// store.checkData.user.tel = getDataArr.tel;
// store.checkData.user.name = getDataArr.name;
//返回故物車
const route = useRoute();
const id = route.params.id;
const goCart = () => {
  router.replace(`/order/${id}`);
  store.cartModal = true;
};
//判斷class
const payCash = computed(() => {
  return store.isPayCash
    ? ["text-primary", "bg-white"]
    : ["text-white", "bg-[#E0A533]"];
});
//inpuStyle
const nameStyle = computed(() => {
  if (store.checkData.user.name == "") {
    return store.userInputClass
      ? ["animate__animated", "animate__shakeX", "ring-4", "ring-red-500"]
      : "";
  }
});
const telStyle = computed(() => {
  if (store.checkData.user.tel == "") {
    return store.telInputClass
      ? ["animate__animated", "animate__shakeX", "ring-4", "ring-red-500"]
      : "";
  }
});
</script>
<template>
  <div
    class="fixed bottom-0 h-screen w-screen bg-white bg-opacity-50 backdrop-blur-sm"
  >
    <div class="flex flex-col m-4 p-4 bg-primary h-full overflow-hidden">
      <div class="flex justify-between items-center pb-2 text-white">
        <div class="flex items-center gap-2" @click="goCart">
          <i class="ri-arrow-left-line"></i>
          <span>返回購物車、、</span>
        </div>
        <span>桌號：{{ id }}</span>
      </div>
      <img
        src="/src/assets/image/couponLogo.png"
        class="w-[128px] h-[128px] mx-auto my-2 p-2 rounded-30 bg-white"
        alt=""
      />
      <h2 class="mx-auto py-2 text-lg fnot-bold text-white">選擇付款方式</h2>
      <div
        class="flex items-center justify-center gap-2 pt-4 pb-2 text-2xl font-black"
      >
        <button class="rounded-20 p-2 font-semibold" :class="payCash">
          現金付款
        </button>
        <button class="bg-[#E0A533] text-white rounded-20 p-2 px-4">
          ${{ cartStore.cartData.final_total }}
        </button>
      </div>
      <h2 class="mx-auto py-2 text-lg fnot-bold text-white">填寫聯絡方式</h2>
      <div class="grid grid-cols-4 gap-2">
        <label
          for="name"
          class="p-2 text-center rounded-20 bg-[#E0A533] text-white font-bold"
          >姓名</label
        >
        <input
          type="text"
          placeholder="lastName"
          class="col-span-3 p-2 text-center rounded-20 bg-[#E0A533] text-white placeholder:text-white placeholder:font-bold outline-0 focus:ring-2 ring-white"
          :class="nameStyle"
          v-model.trim="store.checkData.user.name"
        />
      </div>
      <div class="grid grid-cols-4 gap-2 mt-4">
        <label
          for="mail"
          class="p-2 text-center rounded-20 bg-[#E0A533] text-white font-bold"
          >電話</label
        >
        <input
          type="text"
          placeholder="請輸入電話"
          class="col-span-3 p-2 text-center rounded-20 bg-[#E0A533] text-white placeholder:text-white placeholder:font-bold outline-0 focus:ring-2 ring-white"
          :class="telStyle"
          v-model="store.checkData.user.tel"
        />
      </div>
      <label class="mx-auto py-2 text-lg fnot-bold text-white">備註</label>
      <textarea
        class="bg-[#E0A533] rounded-20 h-full p-2 pl-4 text-xl text-white font-bold outline-0 focus:ring-2 ring-white"
        style="resize: none"
        v-model.trim="store.checkData.message"
      ></textarea>
      <button
        class="mx-auto bg-white text-primary py-3 px-12 my-2 text-3xl font-extrabold rounded-xl"
        @click="store.updateOrderData"
      >
        送出訂單
      </button>
    </div>
    <Teleport to="body">
      <Transition
        enter-to-class="fixed left-1/2 -translate-x-1/2"
        enter-active-class="animate__animated animate__backInDown translate-y-4 duration-500"
        leave-active-class="animate__animated animate__backInDown translate-y-4 duration-500"
        leave-from-class="fixed left-1/2 -translate-x-1/2"
      >
        <MessageBox />
      </Transition>
    </Teleport>
  </div>
</template>
