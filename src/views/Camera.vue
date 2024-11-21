<script setup>
import { QrcodeStream } from "vue-qrcode-reader";
import { nextTick, ref } from "vue";
const error = ref("");
const getCodes = ref("");
const destroyed = ref(false);
const loading = ref(true);
const btn = ref(false);

const onError = (err) => {
  if (err.name === "NotAllowedError") {
    error.value = "user denied camera access permission";
  } else if (err.name === "NotFoundError") {
    error.value = "no suitable camera device installed";
  } else if (err.name === "NotSupportedError") {
    error.value = "page is not served over HTTPS (or localhost)";
  } else if (err.name === "NotReadableError") {
    error.value = "maybe camera is already in use";
  } else if (err.name === "OverconstrainedError") {
    error.value = "did you request the front camera although there is none?";
  } else if (err.name === "StreamApiNotSupportedError") {
    error.value = "browser seems to be lacking features";
  }
};
const onDecode = (detectedCodes) => {
  // getCodes.value = JSON.stringify(detectedCodes.map((code) => code.rawValue))
  console.log(detectedCodes);
  // const link = detectedCodes.map(item => item.rawValue).join('')
  // console.log(link)
  getCodes.value = detectedCodes.map((item) => item.rawValue).join("");
  console.log("有作動", getCodes.value);
  window.location.href = getCodes.value;
};
const onCameraOn = () => {
  loading.value = false;
  btn.value = true;
};
const reload = async () => {
  destroyed.value = !destroyed.value;
  await nextTick();
};
</script>
<template>
  <div class="h-screen bg-background flex flex-col pt-20 ">
    <div @click="changeHerf">
      <div
        class="w-0 h-0 border-t-[100px] border-l-[100px] border-l-transparent border-t-primary absolute right-0 top-0"
      ></div>
      <router-link to="/SelectTable">
        <i
          class="ri-list-ordered-2 text-4xl text-white absolute top-2 right-2"
        ></i>
      </router-link>
    </div>
    <img
      class="h-32 w-32 mx-auto"
      src="/src/assets/image/couponLogo.png"
      alt=""
    />
    <div class="px-4 flex flex-col items-center gap-8 mt-16">
      <h1
        class="text-center text-primary text-5xl font-extrabold"
        v-if="!destroyed"
      >
        請掃描桌號
      </h1>
      <h1
        class="text-center text-primary text-5xl font-extrabold"
        v-if="destroyed"
      >
        掃瞄器關閉中
      </h1>
      <p>{{ error }}</p>
      {{ getCodes }}
      <h1 v-if="loading" class="text-primary text-3xl font-bold">loading...</h1>
      <div class="h-80 w-80">
        <qrcode-stream
          @error="onError"
          @detect="onDecode"
          @camera-on="onCameraOn"
          :formats="['qr_code']"
          v-if="!destroyed"
        ></qrcode-stream>
      </div>
      <button
        @click="reload"
        v-if="!destroyed"
        class="bg-primary px-8 py-2 text-4xl rounded-40 text-white font-medium"
      >
        關閉
      </button>
      <button
        @click="reload"
        v-if="destroyed"
        class="bg-primary px-8 py-2 text-4xl rounded-40 text-white font-medium"
      >
        開啟
      </button>
    </div>
  </div>
</template>
