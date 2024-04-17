<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import SideNav from '@/components/SideNav/index.vue';
import MenuIcon from '@/assets/images/menu-icon.png';

const isOpen = ref(true);
const parentFunction = () => {
    isOpen.value = !isOpen.value
    console.log("Parent function called from child component");
};
</script>

<template>
    <div class="flex w-full">
        <SideNav :childFunction="parentFunction" :isOpen="isOpen" />
        <main :class="{ 'pl-64': isOpen }" class=" w-full transition-all">
            <button v-if="!isOpen" class="p-4" @click="parentFunction">
                <img :src=MenuIcon alt="MenuIcon" class="h-6 w-6">
            </button>
            <!-- This is where the matched component will be rendered -->
            <router-view></router-view>
        </main>
    </div>
</template>
