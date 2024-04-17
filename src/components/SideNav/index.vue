<script setup lang="ts">
import { defineProps } from 'vue';
import MenuIcon from '@/assets/images/menu-icon.png';

const props = defineProps<{
    childFunction: Function,
    isOpen: Boolean
}>();

const MenuList = [
    { title: 'HOME', to: '/home' },
    { title: 'GAME', to: '/game ' },
    { title: 'FUNDING DETAILS', to: '/funding-details ' },
    { title: 'DEPOSIT AND WITHAWAL', to: '/deposit-and-withawal ' },
    { title: 'HELP CENTER', to: '/help-center ' },
    { title: 'CONTACT US', to: '/contact-us ' },
]
</script>

<template>
    <div :class="{ 'slide-enter-active w-64': isOpen, 'slide-enter': !isOpen }"
        class="fixed top-0 left-0 h-full bg-gray-800 text-white flex flex-col transition-all px-7 py-11">
        <!-- Hamburger menu -->
        <button @click="childFunction">
            <img :src=MenuIcon alt="MenuIcon" class="h-6 w-6">
        </button>

        <!-- Side menu content -->
        <transition name="slide">
            <div v-if="isOpen" class="flex flex-col gap-7 mt-11">
                <!-- Your menu list go here -->
                <router-link v-for="(list, index) in MenuList" :to=list.to :key="index">
                    {{ list.title }}</router-link>
            </div>
        </transition>
    </div>
</template>

<style>
/* Define slide transition */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(-100%);
}
</style>