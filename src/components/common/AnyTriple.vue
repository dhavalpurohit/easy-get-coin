<script lang="ts" setup>
import Dice1 from "../../assets/images/dice/dice1.png";
import Dice2 from "../../assets/images/dice/dice2.png";
import Dice3 from "../../assets/images/dice/dice3.png";

const DiceArry = [Dice1, Dice2, Dice3]
</script>
<template>
    <div class="flex items-center justify-between  mb-[80px]">
        <div>
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
    </div>
</template>