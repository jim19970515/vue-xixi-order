<script setup>
    import { QrcodeStream } from 'vue-qrcode-reader';
</script>
<template>
    <div class="fixed top-0 z-50 h-screen w-screen bg-primary">
        <div class="w-80 h-80 flex mx-auto">
            <qrcode-stream @decode="onDecode" ></qrcode-stream>
        </div>
    </div>
</template>