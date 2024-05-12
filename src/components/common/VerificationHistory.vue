<script lang="ts" setup>
import { ref } from 'vue'
import PatternPuzzleImg from '@/assets/images/pattern-puzzle.png';
import DownArrow from '../icons/DownArrow.vue';
import RollNumber from './RollNumber.vue';

const counter = ref(150);
const increment = () => {
    if (counter.value < 1000) {
        counter.value++;
    }
};

const decrement = () => {
    if (counter.value > 0) {
        counter.value--;
    }
};

</script>
<template>
    <div class="bg-darkGray pl-[30px] pr-6 pt-7 rounded-30 pb-16 md:max-w-[1200px]  md:mx-auto">
        <div class="text-platinum text-xl sm:text-3xl font-medium mb-[54px]">History</div>
        <div
            class="flex items-center justify-between w-full mx-auto bg-black text-white rounded-s-[40px] rounded-e-30 max-w-[582px] mb-[54px]">
            <img :src=PatternPuzzleImg alt="PatternPuzzleImg" class="w-11 h-11 sm:w-20 sm:h-20 rounded-full">
            <div class="text-base sm:text-4xl font-medium">Game Name</div>
            <div class="flex items-center justify-center w-5 h-5 sm:w-12 sm:h-12 rounded-full bg-veronicaLight mr-3.5">
                <DownArrow />
            </div>
        </div>
        <!-- count number content -->
        <RollNumber />

        <!-- seeds -->
        <div class="pt-[54px]">
            <div class="text-white font-medium text-2xl sm:text-[34px] leading-[42px] mb-2 sm:mb-6">Server Seed</div>
            <div
                class="w-full mx-auto bg-black text-white font-medium text-2xl sm:text-[34px] sm:leading-[42px] rounded-2xl sm:rounded-30 py-3 sm:py-5 text-center px-11 overflow-x-auto">
                sefhiachliwhclwihlawclahwhv
            </div>
        </div>
        <div class="pt-[54px]">
            <div class="text-white font-medium text-2xl sm:text-[34px] leading-[42px] mb-2 sm:mb-6">Cilend Seed</div>
            <div
                class="w-full mx-auto bg-black text-white font-medium text-2xl sm:text-[34px] sm:leading-[42px] rounded-2xl sm:rounded-30 py-3 sm:py-5 text-center px-11 overflow-x-auto">
                sefhiachliwhclwihlawclahwhv
            </div>
        </div>
        <div class=" pt-[54px] pb-16">
            <div class="text-white font-medium text-2xl sm:text-[34px] leading-[42px] mb-2 sm:mb-6">Nonce</div>
            <div
                class="flex items-center justify-between w-full mx-auto bg-black text-white font-medium text-2xl sm:text-[34px] leading-[42px] rounded-2xl sm:rounded-30 py-5 px-11 text-center">
                <DownArrow class="rotate-90 w-9 h-9 cursor-pointer" @click="decrement" />
                <span>{{ counter }}</span>
                <DownArrow class="-rotate-90 w-9 h-9 cursor-pointer" @click="increment" />

            </div>
        </div>
        <button
            class="btn_hover rounded-2xl sm:rounded-30 text-white font-medium text-base sm:text-3xl bg-veronica py-3 sm:px-[62px] px-8 mx-auto block">
            Learn How To Verify
        </button>
    </div>
</template>