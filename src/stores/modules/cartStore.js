import { ref, watchEffect } from "vue";
import axios from "axios";
import { defineStore } from "pinia";
import { showLoading, hideLoading } from "../../utils/evenButs";

//api
const api = "https://vue-course-api.hexschool.io/api/f0920515972";

export const useCartStore = defineStore("cart", () => {
  //購物車goCart
  const cartModal = ref(false);
  //購物車data
  const cartData = ref({
    final_total: "",
    product: [],
  });
  //api function
  const getCartData = async () => {
    try {
      const { data } = await axios.get(`${api}/cart`);
      cartData.value.final_total = data.data.final_total; //取得購物車總Total
      cartData.value.product = data.data.carts.map((item) => item); //取得購物車列表
    } catch (error) {
      console.log(error);
    }
  };
  //刪除購物車單筆
  const deleteCartData = async (CartId) => {
    showLoading();
    await axios.delete(`${api}/cart/${CartId}`);
    hideLoading();
    getCartData();
  };
  return { cartModal, cartData, getCartData, deleteCartData };
});
