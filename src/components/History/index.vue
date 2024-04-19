<script lang="ts" setup>
import { ref } from "vue";
import ProgressBar from "../common/ProgressBar.vue";
import Dice1 from "../../assets/images/dice/dice1.png";
import Dice2 from "../../assets/images/dice/dice2.png";
import Dice3 from "../../assets/images/dice/dice3.png";
import Dice4 from "../../assets/images/dice/dice4.png";
import Dice5 from "../../assets/images/dice/dice5.png";
import Dice6 from "../../assets/images/dice/dice6.png";
import Plush from '@/components/icons/Plus.vue';
import Minus from '@/components/icons/Minus.vue';

const isNum = ref(true);
const HistoryNum = [23.25, 23.25, 23.25, 23.25, 23.25];
const DiceArry = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
const counter = ref(1000);

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
                <!-- count number content -->
                <div v-if="isNum"
                    class="flex items-center w-fit mx-auto rounded-30 py-[15px] px-5 text-white text-[80px] leading-none dark-pink-to-blue">
                    <div class="mountbatten-pink-to-purple rounded-lg p-1.5 mr-6">0</div>
                    <div class="mountbatten-pink-to-purple rounded-lg p-1.5">0</div>
                    <spa class="mx-1">.</spa>
                    <div class="mountbatten-pink-to-purple rounded-lg p-1.5 mr-6">0</div>
                    <div class="mountbatten-pink-to-purple rounded-lg p-1.5">0</div>
                </div>

                <!-- count dice content -->
                <div v-if="!isNum"></div>

                <!-- total win & lost -->
                <div class="flex items-center justify-between  rounded-30 py-[74px] px-5">
                    <div class="flex flex-col w-full items-center text-platinum text-4xl font-medium leading-[46px] ">
                        <span>WIN</span><span>100</span>
                    </div>
                    <div class="border-[3px] border-veronica rounded-sm h-[52px]"></div>
                    <div class="flex flex-col w-full items-center text-platinum text-4xl font-medium leading-[46px]">
                        <span>Lost</span><span>100</span>
                    </div>
                </div>

                <!-- under x button -->
                <div class="flex items-center justify-center gap-[30px]">
                    <button
                        class="flex flex-col items-center text-platinumGray rounded-3xl bg-darkPurple py-2 px-9 text-center">
                        <span class="text-3xl leading-[38px] font-bold">UNDER 10.98</span>
                        <span class="text-2xl font-medium">x30.00</span>
                    </button>
                    <button
                        class="flex flex-col items-center text-fandango rounded-3xl pink-to-orange py-2 px-9 text-center">
                        <span class="text-3xl leading-[38px] font-bold">UNDER 10.98</span>
                        <span class="text-2xl font-medium">x30.00</span>
                    </button>
                </div>
            </div>

            <!-- progressbar -->
            <div class="py-[74px]">
                <ProgressBar />
            </div>

            <!-- roll button -->
            <button
                class="block uppercase text-white text-[45px] leading-[54px] font-medium text-center pink-to-blue-gradient py-2.5 w-full max-w-[508px] rounded-full mx-auto">Roll</button>

            <!-- counter plus & minus -->
            <div class="pt-[50px] pb-6">
                <div class="flex items-center justify-between max-w-[508px] w-full mx-auto bg-black rounded-30 px-2.5 py-2">
                    <button @click="decrement"
                        class="min-w-12 w-12 h-12 rounded-full bg-veronicaLight flex justify-center items-center text-white">
                        <Minus class="w-8" />
                    </button>
                    <div class="text-white font-medium text-4xl">{{ counter }}</div>
                    <button @click="increment"
                        class="min-w-12 w-12 h-12 rounded-full bg-veronicaLight flex justify-center items-center text-white">
                        <Plush class="w-8" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
