<script lang="ts" setup>
import Buttons from './Buttons.vue';
import { ref } from 'vue'

const currentBtn = ref('High');
</script>
<template>
    <div class="flex items-center justify-center mb-[62px] gap-4 sm:gap-[42px]">
        <ul
            class="flex flex-col gap-2 sm:gap-7 bg-black text-platinum px-3 sm:px-[25px] py-2 sm:py-[18px] rounded-xl sm:rounded-[26px] text-xs sm:text-[25px] font-bold">
            <li class="flex items-center justify-between">
                <span class="mr-9">FIVE OF A KIND</span>
                <span>X15.00</span>
            </li>
            <li class="flex items-center justify-between">
                <span class="mr-9">FORE OF A KIND</span>
                <span>X15.00</span>
            </li>
            <li class="flex items-center justify-between">
                <span class="mr-9">STRIGHT</span>
                <span>X15.00</span>
            </li>
            <li class="flex items-center justify-between">
                <span class="mr-9">FULL HOUSE</span>
                <span>X15.00</span>
            </li>
            <li class="flex items-center justify-between">
                <span class="mr-9">FORE OF A KIND</span>
                <span>X15.00</span>
            </li>
            <li class="flex items-center justify-between">
                <span class="mr-9">TWO PAIR</span>
                <span>X15.00</span>
            </li>
        </ul>
        <div class="flex flex-col gap-6">
            <Buttons @click="currentBtn = 'High'" :is-active="currentBtn === 'High'">
                High
            </Buttons>
            <Buttons @click="currentBtn = 'Field'" :is-active="currentBtn === 'Field'">
                Field
            </Buttons>
            <Buttons @click="currentBtn = 'Low'" :is-active="currentBtn === 'Low'">
                Low
            </Buttons>
        </div>
    </div>
</template>