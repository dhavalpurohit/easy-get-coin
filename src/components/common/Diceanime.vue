<script lang="ts" setup>
import Dice1 from "../../assets/images/dice/dice1.png";
import Dice2 from "../../assets/images/dice/dice2.png";
import Dice3 from "../../assets/images/dice/dice3.png";
import Dice4 from "../../assets/images/dice/dice4.png";
import Dice5 from "../../assets/images/dice/dice5.png";
import Dice6 from "../../assets/images/dice/dice6.png";

defineProps<{
    obj: any;
}>();

const DiceArry = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
</script>
<template>
    <div v-if="obj.isFiveDice" class="flex items-center justify-center gap-1 sm:gap-3">
        <ul class="flex justify-center text-white gap-1 sm:gap-2">
            <li v-for="dice in DiceArry" :key="dice">
                <img :src="dice" alt="dice-img" />
            </li>
        </ul>
        <div class="w-1 sm:w-1.5 bg-veronica rounded-[3px] h-3 sm:h-[21px]"></div>
        <ul class="flex justify-center text-white gap-1 sm:gap-2">
            <li v-for="index in 6" :key="index">
                <img :src="DiceArry[5]" alt="dice-img" />
            </li>
        </ul>
        <div class="w-1 sm:w-1.5 bg-veronica rounded-[3px] h-3 sm:h-[21px]"></div>
        <ul class="flex justify-center text-white gap-1 sm:gap-2">
            <li v-for="dice in DiceArry" :key="dice">
                <img :src="dice" alt="dice-img" />
            </li>
        </ul>
    </div>
    <div v-if="obj.isTwoDice" class="flex items-center justify-center gap-1 sm:gap-6">
        <ul class="flex justify-center text-white gap-2">
            <li v-for="dice in DiceArry.slice(0, 2)" :key="dice">
                <img :src="dice" alt="dice-img" />
            </li>
        </ul>
        <div class="w-1 sm:w-1.5 bg-veronica rounded-[3px] h-3 sm:h-[21px]"></div>
        <ul class="flex justify-center text-white gap-2">
            <li v-for="dice in DiceArry.slice(0, 2)" :key="dice">
                <img :src="dice" alt="dice-img" />
            </li>
        </ul>
        <div class="w-1 sm:w-1.5 bg-veronica rounded-[3px] h-3 sm:h-[21px]"></div>
        <ul class="flex justify-center text-white gap-2">
            <li v-for="dice in DiceArry.slice(0, 2)" :key="dice">
                <img :src="dice" alt="dice-img" />
            </li>
        </ul>
        <div class="w-1 sm:w-1.5 bg-veronica rounded-[3px] h-3 sm:h-[21px]"></div>
        <ul class="flex justify-center text-white gap-2">
            <li v-for="dice in DiceArry.slice(0, 2)" :key="dice">
                <img :src="dice" alt="dice-img" />
            </li>
        </ul>
        <div class="w-1 sm:w-1.5 bg-veronica rounded-[3px] h-3 sm:h-[21px]"></div>
        <ul class="flex justify-center text-white gap-2">
            <li v-for="dice in DiceArry.slice(0, 2)" :key="dice">
                <img :src="dice" alt="dice-img" />
            </li>
        </ul>
    </div>
    <div v-if="obj.isThreeDice" class="flex items-center justify-center gap-1 sm:gap-6">
        <ul class="flex justify-center text-white gap-2">
            <li>
                <img :src="DiceArry[0]" alt="dice-img" />
            </li>
            <li>
                <img :src="DiceArry[1]" alt="dice-img" />
            </li>
            <li>
                <img :src="DiceArry[0]" alt="dice-img" />
            </li>
        </ul>
        <div class="w-1 sm:w-1.5 bg-veronica rounded-[3px] h-3 sm:h-[21px]"></div>
        <ul class="flex justify-center text-white gap-2">
            <li>
                <img :src="DiceArry[0]" alt="dice-img" />
            </li>
            <li>
                <img :src="DiceArry[1]" alt="dice-img" />
            </li>
            <li>
                <img :src="DiceArry[0]" alt="dice-img" />
            </li>
        </ul>
        <div class="w-1 sm:w-1.5 bg-veronica rounded-[3px] h-3 sm:h-[21px]"></div>
        <ul class="flex justify-center text-white gap-2">
            <li>
                <img :src="DiceArry[0]" alt="dice-img" />
            </li>
            <li>
                <img :src="DiceArry[1]" alt="dice-img" />
            </li>
            <li>
                <img :src="DiceArry[0]" alt="dice-img" />
            </li>
        </ul>
        <div class="w-1 sm:w-1.5 bg-veronica rounded-[3px] h-3 sm:h-[21px]"></div>
        <ul class="flex justify-center text-white gap-2">
            <li>
                <img :src="DiceArry[0]" alt="dice-img" />
            </li>
            <li>
                <img :src="DiceArry[1]" alt="dice-img" />
            </li>
            <li>
                <img :src="DiceArry[0]" alt="dice-img" />
            </li>
        </ul>
    </div>
</template>