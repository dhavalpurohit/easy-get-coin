<script setup lang="ts">
import Profile from '@/assets/images/profile.png';
import ConnectWallet from '../common/ConnectWallet.vue';
import LogOutIcon from '../icons/LogoutIcon.vue'

defineProps<{
    isWalletConnected: Boolean
}>();

</script>
<template>
    <div
        class="flex items-center justify-between md:flex-row-reverse bg-darkGray md:bg-transparent md:gap-24 rounded-30 py-2.5 px-2.5 sm:py-[22px] sm:px-5">
        <img :src=Profile alt="Profile" class="h-20 w-20 rounded-full">
        <div v-if="isWalletConnected"
            class="text-white text-md sm:text-[42px] font-medium leading-10 flex items-center gap-4">
            <span>234234523</span>
            <LogOutIcon class="w-5 md:hidden" />
        </div>
        <ConnectWallet v-else />
    </div>
</template>