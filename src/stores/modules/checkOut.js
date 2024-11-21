import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";
import { showAlert, hideAlert } from "@/utils/evenButs";
import { useCartStore } from "./cartStore";

const api = "https://vue-course-api.hexschool.io/api/f0920515972";

export const useCheckOut = defineStore("CheckOut", () => {
  const checkData = reactive({
    user: {
      name: "",
      tel: "",
      email: "", //用隨機數字代替
      address: "", //桌號
    },
    message: "",
  });
  //產生假 現金付款
  const isPayCash = ref(true);
  //產生取餐號碼
  const getRandom = (x) => {
    return Math.floor(Math.random() * x);
  };
  const getNumber = () => {
    let state = "";
    let n = 0;
    for (let i = 0; i < 3; i++) {
      n = getRandom(10);
      state += n + "";
    }
    return state;
  };
  //取得號碼
  checkData.user.email = getNumber();
  //
  const cartStore = useCartStore();
  const route = useRoute();
  checkData.user.address = route.params.id;
  const orderId = ref("");
  const data = checkData;
  const userInputClass = ref(false);
  const telInputClass = ref(false);
  const updateOrderData = async () => {
    if (checkData.user.name != "" && checkData.user.tel.length > 0) {
      await axios.post(`${api}/order`, { data }).then((res) => {
        orderId.value = res.data.orderId;
      });
      localStorage.setItem("userData", JSON.stringify(checkData.user));
      router.push({ name: "Details", params: { id: orderId.value } });
    } else if (checkData.user.name == "") {
      userInputClass.value = true;
    } else if (checkData.user.tel.toString().length == 0) {
      telInputClass.value = true;
    }
  };
  return {
    checkData,
    orderId,
    isPayCash,
    updateOrderData,
    userInputClass,
    telInputClass,
  };
});
