<script setup lang="ts">
// import CatBg from '@/assets/images/cat_bg.png'
import History from '@/components/History/index.vue';
import TabView from '@/components/common/Tab/TabView.vue';
</script>

<template>
    <div class="relative px-[45px]">
        <History />
        <TabView class="pt-[76px] pb-[100px]" />
    </div>

    <!-- <div class="relative">
        <img :src=CatBg alt="cat-bg">
        <div class="relative w-full -mt-[46%] px-[45px]">
            <History />
        </div>
        <div class="px-[45px]">
            <TabView class="pt-[76px] pb-[100px]" />
        </div>
    </div> -->
</template>