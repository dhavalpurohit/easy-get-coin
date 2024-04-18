<script setup lang="ts">
import CatBg from '@/assets/images/cat_bg.png'
import History from '@/components/History/index.vue';
</script>

<template>
    <div class="relative bg-black">
        <img :src=CatBg alt="cat-bg">
        <div class="relative w-full -mt-[46%] px-[45px]">
            <History />
        </div>
    </div>
</template>
