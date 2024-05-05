<script setup lang="ts">
import Assect from '@/assets/images/ assect.png';

</script>
<template>
    <div class="flex items-center justify-between bg-darkGray rounded-30 py-[22px] px-5">
        <div class="flex flex-col w-full items-center text-white  leading-6 ">
            <span class="text-lg sm:text-xl font-medium">100</span><span class="text-xs sm:text-xl font-medium">BETS</span>
        </div>
        <div class="border-2 border-veronica rounded-sm h-full"></div>
        <div class="flex flex-col w-full items-center text-white leading-6">
            <span class="flex items-center gap-2 text-lg sm:text-xl font-medium">
                <img :src=Assect alt="Assect" class="h-6 w-6 rounded-full">
                100
            </span>
            <span class="mt-2 text-xs sm:text-xl font-medium">TOTAL ASSECT</span>
        </div>
    </div>
</template>