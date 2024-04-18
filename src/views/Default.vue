<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import SideNav from '@/components/SideNav/index.vue';
import Footer from '@/components/common/Footer/index.vue'
import MenuIcon from '@/assets/images/menu-icon.png';
import TopNav from '@/components/common/TopNav.vue';

const isOpen = ref(false);
const parentFunction = () => {
    isOpen.value = !isOpen.value
};
</script>

<template>
    <div class="flex w-full max-w-[757px] default-gradient pt-[94px]">
        <SideNav :childFunction="parentFunction" :isOpen="isOpen" />
        <main class="relative w-full transition-all bg-cat">
            <div class="absolute z-[1] top-0 w-full flex items-center justify-between px-[45px]">
                <button @click="parentFunction">
                    <img :src=MenuIcon alt="MenuIcon" class="w-18">
                </button>
                <TopNav />
            </div>
            <!-- This is where the matched component will be rendered -->
            <router-view></router-view>
            <Footer />
        </main>
    </div>
</template>
