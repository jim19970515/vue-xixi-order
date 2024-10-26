<script setup>
    import {ref} from 'vue'
    import { getAssetsFile } from '@/utils/getUrls'

    const imgArray = ref([])
    const banner2 = {imgUrl:getAssetsFile('banner2.jpeg'),id:2}
    const banner3 = {imgUrl:getAssetsFile('banner3.jpeg'),id:3}
    const banner4 = {imgUrl:getAssetsFile('banner4.jpeg'),id:4}
    const logo = {imgUrl:getAssetsFile('couponLogo.png'),id:1}
    imgArray.value.push(logo,banner2,banner3,banner4)
</script>
<template>
    <el-carousel :interval="4000" motion-blur pause-on-hover class="h-52 my-4 w-full rounded-40 z-10">
        <el-carousel-item v-for="item in imgArray" :key="item.id" class="h-52 w-full rounded-40 ">
            <img :src="item.imgUrl" class=" object-contain h-52 w-full px-4 shadow-sm" alt="">
        </el-carousel-item>
    </el-carousel>
</template>