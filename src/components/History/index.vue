<script lang="ts" setup>
import { ref } from "vue";
import Dice1 from "../../assets/images/dice/dice1.png";
import Dice2 from "../../assets/images/dice/dice2.png";
import Dice3 from "../../assets/images/dice/dice3.png";
import Dice4 from "../../assets/images/dice/dice4.png";
import Dice5 from "../../assets/images/dice/dice5.png";
import Dice6 from "../../assets/images/dice/dice6.png";

const isNum = ref(true);
const HistoryNum = [23.25, 23.25, 23.25, 23.25, 23.25];
const DiceArry = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
</script>
<template>
    <div class="bg-darkGray px-4 py-7 rounded-30">
        <div class="text-platinum text-3xl font-medium">History</div>
        <div class="pt-[30px]">
            <!-- History Number view content -->
            <ul v-if="isNum" class="flex justify-center text-white gap-3">
                <li v-for="num in HistoryNum"
                    class="flex items-center gap-3 text-3xl font-medium last:after:w-0 after:block after:w-[6px] after:bg-veronica after:h-full after:rounded"
                    :key="num">{{
                        num }}</li>
            </ul>

            <!-- diceanime view content -->
            <div v-if="!isNum" class="flex items-center justify-center gap-3">
                <ul class="flex justify-center text-white gap-2">
                    <li v-for="dice in DiceArry" :key="dice">
                        <img :src="dice" alt="dice-img" />
                    </li>
                </ul>
                <div class="w-1.5 bg-veronica rounded-[3px] h-[21px]"></div>
                <ul class="flex justify-center text-white gap-2">
                    <li v-for="index in 6" :key="index">
                        <img :src="DiceArry[5]" alt="dice-img" />
                    </li>
                </ul>
                <div class="w-1.5 bg-veronica rounded-[3px] h-[21px]"></div>
                <ul class="flex justify-center text-white gap-2">
                    <li v-for="dice in DiceArry" :key="dice">
                        <img :src="dice" alt="dice-img" />
                    </li>
                </ul>
            </div>

            <!-- win or lost content -->
            <div class="pt-[78px]">
                <div
                    class="flex items-center w-fit mx-auto rounded-30 py-[15px] px-5 text-white text-[80px] leading-none dark-pink-to-blue">
                    <div class="mountbatten-pink-to-purple rounded-lg p-1.5 mr-6">0</div>
                    <div class="mountbatten-pink-to-purple rounded-lg p-1.5">0</div>
                    <spa class="mx-1">.</spa>
                    <div class="mountbatten-pink-to-purple rounded-lg p-1.5 mr-6">0</div>
                    <div class="mountbatten-pink-to-purple rounded-lg p-1.5">0</div>
                </div>

                <div class="flex items-center justify-between  rounded-30 py-[22px] px-5">
                    <div class="flex flex-col w-full items-center text-white text-xl font-medium leading-6 ">
                        <span>100</span><span>WIN</span>
                    </div>
                    <div class="border-2 border-veronica rounded-sm h-full"></div>
                    <div class="flex flex-col w-full items-center text-white text-xl font-medium leading-6">
                        <span>100</span><span>Lost</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
