<script lang="ts" setup>
import { ref } from 'vue'
import Buttons from './Buttons.vue';
import Dice1 from "../../assets/images/dice/dice1.png";
import Dice2 from "../../assets/images/dice/dice2.png";
import Dice3 from "../../assets/images/dice/dice3.png";

const DiceArry = [Dice1, Dice2, Dice3]
const currentBtn = ref('High')
</script>
<template>
    <div
        class="flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between md:items-end md:justify-center md:gap-[100px]  mb-[80px] md:mb-5 md:max-w-[950px] md:mx-auto">
        <div class="md:order-2 md:flex md:items-center md:gap-10">
            <div class="grid grid-cols-3 gap-x-2.5 gap-y-4">
                <img v-for="(item, index) in DiceArry" :key="index" :src=item alt="dice" class="w-[45px] h-[45px]">
                <img v-for="(item, index) in DiceArry" :key="index" :src=item alt="dice" class="w-[45px] h-[45px]">
            </div>
            <div class="mt-7">
                <div class="grid grid-cols-4 place-items-center 2.5">
                    <span class="h-5 w-5 rounded border border-mauve bg-mauve"></span>
                    <span class="h-5 w-5 rounded border border-mauve"></span>
                    <span class="h-5 w-5 rounded border border-mauve"></span>
                    <span class="text-mauve text-2xl font-bold leading-[30px]">x2</span>
                </div>
                <div class="grid grid-cols-4 place-items-center 2.5">
                    <span class="h-5 w-5 rounded border border-mauve bg-mauve"></span>
                    <span class="h-5 w-5 rounded border border-mauve bg-mauve"></span>
                    <span class="h-5 w-5 rounded border border-mauve"></span>
                    <span class="text-mauve text-2xl font-bold leading-[30px]">x3</span>
                </div>
                <div class="grid grid-cols-4 place-items-center 2.5">
                    <span class="h-5 w-5 rounded border border-mauve bg-mauve"></span>
                    <span class="h-5 w-5 rounded border border-mauve bg-mauve"></span>
                    <span class="h-5 w-5 rounded border border-mauve bg-mauve"></span>
                    <span class="text-mauve text-2xl font-bold leading-[30px]">x9</span>
                </div>
            </div>
        </div>
        <div class="flex sm:flex-col gap-2 sm:gap-6 md:order-1">
            <Buttons class="!px-4 sm:px-11" @click="currentBtn = 'High'" :is-active="currentBtn === 'High'">
                High
            </Buttons>
            <Buttons class="!px-4 sm:px-11" @click="currentBtn = 'Field'" :is-active="currentBtn === 'Field'">
                Field
            </Buttons>
            <Buttons class="!px-4 sm:px-11" @click="currentBtn = 'Low'" :is-active="currentBtn === 'Low'">
                Low
            </Buttons>
        </div>
        <div
            class="flex order-3 flex-col justify-center text-fandango pink-to-orange rounded-3xl px-6 h-[180px] sm:h-[264px]">
            <span class="text-3xl sm:text-[40px] sm:leading-[normal] font-bold">ANY <br>TRIPLE</span>
            <span class="text-xl sm:text-2xl font-semibold sm:leading-7 mt-1">x30.00</span>
        </div>
    </div>
</template>