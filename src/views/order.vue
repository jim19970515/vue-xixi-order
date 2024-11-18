<script setup>
import Loading from "@/components/Loading.vue";
import { useCartStore, useOrderStore } from "@/stores/store";
import { getAssetsFile } from "@/utils/getUrls";
import { computed, reactive } from "vue";

const orderStore = useOrderStore();
onMounted(async () => {
  await orderStore.getProduct();
});

const category = [
  { title: "套餐", imgUrl: getAssetsFile("套餐icon.png") },
  { title: "吐司", imgUrl: getAssetsFile("toast.png") },
  { title: "漢堡", imgUrl: getAssetsFile("hamburger.png") },
  { title: "蛋餅", imgUrl: getAssetsFile("omelet.png") },
  { title: "炒麵", imgUrl: getAssetsFile("noodle.png") },
  { title: "炸物", imgUrl: getAssetsFile("fries.png") },
  { title: "單點", imgUrl: getAssetsFile("eggs.png") },
  { title: "飲品", imgUrl: getAssetsFile("drink.png") },
];

//單商品彈窗
const singleModalProps = reactive({
  singleModal: false,
  singleProduct: {},
});
const closeSingleModal = (item) => {
  singleModalProps.singleModal = !singleModalProps.singleModal;
  singleModalProps.singleProduct = item;
};
//選擇商品類別
const selectCategory = ref("套餐");
const activeBtnStyle = ref([
  "bg-primary",
  "p-0",
  "text-xl",
  "gap-0",
  "underline",
  "decoration-primary",
  "decoration-dashed",
  "underline-offset-4",
  "font-mono",
]);
const toggleCategory = (item) => {
  selectCategory.value = item;
};
const buttonStyle = (item) => {
  return item == selectCategory.value ? activeBtnStyle.value : "bg-white";
};
//cart 購物車
const store = useCartStore();
const cartModelHandler = () => {
  store.cartModal = !store.cartModal;
  store.getCartData();
};

const route = useRoute();
const id = route.params.id;
</script>
<template>
  <div class="h-screen bg-background -z-20">
    <div
      class="flex flex-rowc justify-between items-center px-4 py-2 text-white"
    >
      <span class="bg-primary rounded-20 px-2 z-20">桌號 {{ id }}</span>
      <h1
        class="text-center mr-4 text-white bg-primary rounded-20 text-xl font-bold px-2 z-20 shadow-md"
      >
        XX精緻早午餐
      </h1>
      <i
        class="ri-shopping-cart-line bg-primary rounded-20 px-2 z-20 relative"
        @click="cartModelHandler"
      >
        <span
          v-if="store.cartData.product.length > 0"
          class="absolute -top-2 -right-4 bg-red-500 px-2 rounded-full"
          >{{ store.cartData.product.length }}</span
        >
      </i>
    </div>
    <div class="flex">
      <img class="p-4 z-20" src="/src/assets/image/phone-banner.jpg" alt="" />
    </div>
    <div class="flex flex-row gap-2 pb-6 px-4 overflow-x-auto">
      <button
        class="flex flex-col items-center gap-2 flex-none p-2 rounded-full w-20 h-20 text-primary shadow-md z-20 mb-6 text-lg"
        v-for="item in category"
        :key="item"
        :class="buttonStyle(item.title)"
        @click="toggleCategory(item.title)"
      >
        <img :src="item.imgUrl" alt="" />
        <span class="font-bold">{{ item.title }}</span>
      </button>
    </div>
    <Products
      :select-category="selectCategory"
      @toggle-single-productModal="closeSingleModal"
      class="z-10"
    />
    <Teleport to="body">
      <Transition
        name="productModal"
        type="transition"
        enter-from-class="transform translate-y-full opacity-0"
        enter-to-class="transform translate-y-0 opacity-100 duration-500"
        leave-active-class="transform -translate-y-full opacity-0 duration-500"
      >
        <SingleProductModal
          v-if="singleModalProps.singleModal"
          :singleProduct="singleModalProps.singleProduct"
          @close-single-modal="closeSingleModal"
          class="fixed bottom-0"
        />
      </Transition>
    </Teleport>
    <CartModal
      v-if="store.cartModal"
      @close-cart-model="cartModelHandler"
      class="fixed top-0"
    />
    <Teleport to="body">
      <Loading />
    </Teleport>
    <img
      class="fixed -top-32 -left-32 rotate-45"
      src="/src/assets/image/tableRunner.png"
      alt=""
    />
    <img
      class="fixed -bottom-32 -right-32 -rotate-45"
      src="/src/assets/image/tableRunner.png"
      alt=""
    />
  </div>
</template>
