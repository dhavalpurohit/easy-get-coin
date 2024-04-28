<script lang="ts" setup>
import TabCardBg from '@/assets/images/bg_mybetsinfo 2.png';
import BitCoinImage from '@/assets/images/bitcoin.png';
import Profile from '@/assets/images/profile.png';
import ThreeDots from '@/components/icons/ThreeDots.vue';

</script>
<template>
    <div :style="{ backgroundImage: `url(${TabCardBg})`, backgroundSize: '100% 100%' }"
        class="w-full h-[132px] bg-no-repeat py-1.5 px-6 overflow-hidden mb-11">
        <div class="flex items-center justify-between text-white text-xl w-full uppercase">
            <div class="flex flex-col items-center font-semibold">
                <span>Data</span>
                <span class="normal-case">10 days ago</span>
            </div>
            <div class="flex flex-col items-center mr-[37px]">
                <span class="font-semibold">Bet</span>
                <span class="flex items-center gap-1.5">
                    <img :src=BitCoinImage alt="bit-coin" class="w-6 h-6">
                    <span>1</span>
                </span>
            </div>
        </div>
        <div class="flex items-center text-white text-xl w-full mt-2.5">
            <img :src=Profile alt="profile" class="mr-9 w-[50px] h-[50px] rounded-full">
            <div class="flex flex-col">
                <span class="font-semibold">Payout</span>
                <span class="flex items-center gap-1.5">
                    <img :src=BitCoinImage alt="bit-coin" class="w-6 h-6">
                    <span>2.5</span>
                </span>
            </div>
            <div class="flex flex-col items-end ml-auto mr-[22px]">
                <span class="font-semibold">Multiplier</span>
                <span class="normal-case">x2.5</span>
            </div>
            <ThreeDots class="h-8" />
        </div>
    </div>
</template>