<script setup>
import { isLoading } from '@/utils/evenButs';
</script>

<template>
    <div v-if="isLoading" class="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 backdrop-blur-sm z-50"> 
        <img src="/src/assets/image/loading.gif" alt="">
    </div>
</template>