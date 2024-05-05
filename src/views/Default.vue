<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router'
import SideNav from '@/components/SideNav/index.vue';
import Footer from '@/components/common/Footer/index.vue'
import MenuIcon from '@/assets/images/menu-icon.png';
import TopNav from '@/components/common/TopNav.vue';
import CatBg from '@/assets/images/cat_bg.png'

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
    <div class="flex w-full max-w-[757px] pt-[50px] sm:pt-[94px] bg-black">
        <SideNav :childFunction="parentFunction" :isOpen="isOpen" />
        <main class="relative w-full transition-all bg-cat">
            <div class="absolute z-[1] top-0 w-full flex items-center justify-between px-[25px] sm:px-[45px]">
                <button @click="parentFunction">
                    <img :src=MenuIcon alt="MenuIcon" class="w-10 sm:w-18">
                </button>
                <TopNav />
            </div>

            <div class="relative">
                <img :src=CatBg alt="cat-bg">
                <div class="bgafter">
                    <div class="relative -mt-[46%] z-[1]">
                        <!-- This is where the matched component will be rendered -->
                        <router-view></router-view>
                        <Footer />
                    </div>
                </div>
            </div>
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
    height: -webkit-fill-available;
    background: linear-gradient(180deg, #000000 0%, #31105c 100%);
    top: 46%;
    left: 0;
    position: absolute;
}
</style>