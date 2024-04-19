<script lang="ts" setup>
import TabCardBg from '@/assets/images/bg_mybetsinfo 2.png';
import BitCoinImage from '@/assets/images/bitcoin.png';
import Profile from '@/assets/images/profile.png';
import ThreeDots from '@/components/icons/ThreeDots.vue';
import PatternPuzzle from '@/assets/images/pattern-puzzle.png';

defineProps<{
    tabTitle: String
}>();
</script>
<template>
    <div v-if="tabTitle === 'bets'" :style="{ backgroundImage: `url(${TabCardBg})` }"
        class="w-full h-[195px] bg-no-repeat py-2 px-9 overflow-hidden mb-11">
        <div class="flex items-center justify-between text-white text-3xl leading-9 w-full uppercase">
            <div class="flex flex-col items-center font-semibold">
                <span>Data</span>
                <span class="normal-case">10 days ago</span>
            </div>
            <div class="flex flex-col items-center mr-[37px]">
                <span class="font-semibold">Bet</span>
                <span class="flex items-center gap-1.5">
                    <img :src=BitCoinImage alt="bit-coin" class="w-[38px] h-[38px]">
                    <span>1</span>
                </span>
            </div>
        </div>
        <div class="flex items-center text-white text-3xl leading-9 w-full mt-5">
            <img :src=Profile alt="profile" class="mr-9 w-[76px] h-[76px] rounded-full">
            <div class="flex flex-col">
                <span class="font-semibold">Payout</span>
                <span class="flex items-center gap-1.5">
                    <img :src=BitCoinImage alt="bit-coin" class="w-[38px] h-[38px]">
                    <span>2.5</span>
                </span>
            </div>
            <div class="flex flex-col items-end ml-auto mr-[22px]">
                <span class="font-semibold">Multiplier</span>
                <span class="normal-case">x2.5</span>
            </div>
            <ThreeDots />
        </div>
    </div>
    <div v-if="tabTitle === 'wins'" :style="{ backgroundImage: `url(${TabCardBg})` }"
        class="w-full h-[195px] bg-no-repeat py-2 px-9 overflow-hidden mb-11">
        <div class="flex text-white text-3xl leading-9 w-full uppercase">
            <img :src=Profile alt="profile" class="mr-9 w-[76px] h-[76px] rounded-full">
            <div class="flex font-semibold">
                <span>PETER</span>
            </div>
            <div class="flex flex-col items-center ml-auto mr-[37px]">
                <span class="font-semibold">Bet</span>
                <span class="flex items-center gap-1.5">
                    <img :src=BitCoinImage alt="bit-coin" class="w-[38px] h-[38px]">
                    <span>1</span>
                </span>
            </div>
        </div>
        <div class="flex items-center text-white text-3xl leading-9 w-full mt-5">
            <img :src=PatternPuzzle alt="PatternPuzzle" class="mr-9 w-[76px] h-[76px] rounded-full">
            <div class="flex flex-col">
                <span class="font-semibold">Payout</span>
                <span class="flex items-center gap-1.5">
                    <img :src=BitCoinImage alt="bit-coin" class="w-[38px] h-[38px]">
                    <span>2.5</span>
                </span>
            </div>
            <div class="flex flex-col items-end ml-auto mr-[22px]">
                <span class="font-semibold">Multiplier</span>
                <span class="normal-case">x2.5</span>
            </div>
            <ThreeDots />
        </div>
    </div>
</template>
