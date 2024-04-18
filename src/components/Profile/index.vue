<script setup lang="ts">
import Profile from '@/assets/images/profile.png';
import ConnectWallet from '../common/ConnectWallet.vue';
import LogOutIcon from '../icons/LogoutIcon.vue'

defineProps<{
    isWalletConnected: Boolean
}>();

</script>
<template>
    <div class="flex items-center justify-between bg-darkGray rounded-30 py-[22px] px-5">
        <img :src=Profile alt="Profile" class="h-20 w-20 rounded-full">
        <div v-if="isWalletConnected" class="text-white text-[42px] font-medium leading-10 flex items-center gap-4">
            <span>234234523</span>
            <LogOutIcon />
        </div>
        <ConnectWallet v-else />
    </div>
</template>