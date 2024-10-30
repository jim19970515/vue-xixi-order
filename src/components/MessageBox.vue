<script setup>
    import { isAlert } from '@/utils/evenButs';
</script>

<template>
    <div v-if="isAlert" class="fixed">
        <div class="flex items-center justify-center bg-white px-2 rounded-10 ring-4 ring-[#01B93B] z-50">
            <img src="../components/icons/tickIcon.png" class="h-10" alt="">
            <p class="text-[#01B93B] font-extrabold">訂單已送出</p>
            <h1>123</h1>
        </div>
    </div>
</template>