<script setup lang="ts">
import { ref } from 'vue';
import Profile from '../Profile/index.vue';
import TotalAssets from '../Profile/TotalAssets.vue'
import Close from '@/components/icons/Close.vue'

defineProps<{
    childFunction: (payload: MouseEvent) => void,
    isOpen: Boolean
}>();

const isWalletConnected = ref(true)
const MenuList = [
    { title: 'HOME', to: '/home' },
    { title: 'GAME', to: '/game' },
    { title: 'FUNDING DETAILS', to: '/funding-details' },
    { title: 'DEPOSIT AND WITHAWAL', to: '/deposit-and-withawal' },
    { title: 'HELP CENTER', to: '/help-center' },
    { title: 'CONTACT US', to: '/contact-us' },
]
</script>

<template>
    <div :class="{ 'slide-enter-active w-510': isOpen, 'slide-enter': !isOpen }"
        class="fixed top-0 left-0 z-10 h-full default-gradient text-white flex flex-col transition-all px-7 py-14 shadow-default">
        <!-- Hamburger menu -->
        <button @click=childFunction class="absolute top-4 right-4">
            <Close />
        </button>

        <!-- Profile content -->
        <Profile :isWalletConnected="isWalletConnected" />
        <!-- Total Assets content -->
        <TotalAssets class="mt-[42px]" v-if="isWalletConnected" />
        <!-- Side menu content -->
        <transition name="slide">
            <div v-if="isOpen" class="flex flex-col gap-7 mt-11">
                <!-- Your menu list go here -->
                <router-link v-for="(list, index) in MenuList" :to=list.to :key="index"
                    class="text-platinum text-3xl font-medium p-2 rounded-30 text-center"
                    activeClass="pink-to-blue-gradient text-white">
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