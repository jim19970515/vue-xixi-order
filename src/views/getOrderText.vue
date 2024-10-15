<script setup>
    import {ref, watchEffect} from 'vue'
    import axios from 'axios';

    const datadata =ref()

    watchEffect(async()=>{
        const {data}  = await axios.get(`https://vue-course-api.hexschool.io/api/f0920515972/order/-O99HmxzR8OWM65WAQ7j`)
        datadata.value = data
    })
</script>
<template>
    {{ datadata }}

    <h1 class="text-red-400 text-3xl">getOrderText page</h1>
</template>