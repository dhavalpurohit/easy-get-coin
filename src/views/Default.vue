<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router'
import SideNav from '@/components/SideNav/index.vue';
import Footer from '@/components/common/Footer/index.vue'
import MenuIcon from '@/assets/images/menu-icon.png';
import TopNav from '@/components/common/TopNav.vue';
import CatBg from '@/assets/images/bg_cat 1.png';
import CatGif from '@/assets/images/Bitepigspine.gif';
import WebCatBg from '@/assets/images/webcatbg.png';

const isOpen = ref(false);
const currentPath = ref<string>(useRoute().path);
const parentFunction = () => {
    isOpen.value = !isOpen.value
};

watch(useRoute(), (to) => {
    currentPath.value = to.path;
});
</script>

<template>
    <div class="parent flex w-full pt-[50px] sm:pt-[94px] max-md:bg-black">
        <SideNav :childFunction="parentFunction" :isOpen="isOpen" />
        <main class="relative w-full  transition-all bg-cat overflow-hidden">
            <div
                class="absolute md:static z-[1] md:max-w-[1200px] mx-auto inset-x-0 top-0 w-full flex items-center justify-between md:justify-end px-[25px] sm:px-[45px] md:px-0">
                <button @click="parentFunction" class="md:absolute md:left-[50px]">
                    <img :src=MenuIcon alt="MenuIcon" class="w-10 sm:w-18">
                </button>
                <TopNav />
            </div>

            <div class="relative md:max-w-[1200px] md:mx-auto md:pt-[50px]">
                <div class="sm:hidden reative overflow-hidden">
                    <img :src=CatBg alt="cat-bg" class="md:w-full">
                    <img :src=CatGif alt="CatGif"
                        class="absolute inset-0 mx-auto max-w-[220px] top-[5%] sm:top-[65px] left-[30px] sm:max-w-full">
                </div>
                <!-- <div
                    class="hidden sm:block reative overflow-hidden webcatbg  md:pb-[375px] md:bg-russian_violet md:rounded-30">
                    <img :src=WebCatBg alt="cat-bg" class="md:w-full">
                </div> -->
                <div
                    class="hidden sm:block relative overflow-hidden md:pb-[200px] md:after:absolute md:after:bottom-0 md:after:w-full md:after:h-[374px] md:after:bg-russian_violet md:after:rounded-b-30">
                    <img :src=WebCatBg alt="cat-bg" class="md:w-full">
                </div>
                <div class="bgafter">
                    <div class="relative -mt-[46%] md:-mt-[75%] z-[1]">
                        <!-- This is where the matched component will be rendered -->
                        <router-view></router-view>
                        <Footer class="md:hidden" />
                    </div>
                </div>
            </div>
            <Footer class="hidden md:block relative z-10" />
        </main>
    </div>
</template>

<style>
.bgafter {
    position: relative;
}

.bgafter::after {
    content: '';
    width: 100%;
    height: 60%;
    background: linear-gradient(180deg, #000000 0%, #31105c 100%);
    top: 46%;
    left: 0;
    position: absolute;
}

@media (min-width: 768px) {
    body {
        background: linear-gradient(180deg, #000000 0%, #31105c 100%);
    }

    .parent {
        background-image: url(../assets/images/webbg_transparent.png);
        background-repeat: no-repeat;
        background-size: 100% auto;
    }

    .bgafter::after {
        background: transparent;
    }
}
</style>