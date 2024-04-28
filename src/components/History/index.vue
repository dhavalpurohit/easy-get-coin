<script lang="ts" setup>
import NumFlip from "../common/NumFlip.vue";
import { ref, reactive } from "vue";
import ProgressBar from "../common/ProgressBar.vue";
import Diceanime from '@/components/common/Diceanime.vue';

// import Dice1 from "../../assets/images/dice/dice1.png";
// import Dice2 from "../../assets/images/dice/dice2.png";
// import Dice3 from "../../assets/images/dice/dice3.png";
// import Dice4 from "../../assets/images/dice/dice4.png";
// import Dice5 from "../../assets/images/dice/dice5.png";
// import Dice6 from "../../assets/images/dice/dice6.png";

const booleanList = reactive({
    isFiveDice: false,
    isTwoDice: false,
    isThreeDice: true
})
const isNum = ref(true);

const HistoryNum = [23.25, 23.25, 23.25, 23.25, 23.25];
// const DiceArry = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
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
            <Diceanime v-if="!isNum" :obj="booleanList" />

            <!-- number view content -->
            <NumFlip :isNum="isNum" :obj="booleanList">
                <template #underbutton v-if="isNum">
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
                </template>
                <template #progressbar v-if="isNum">
                    <!-- progressbar -->
                    <div class="py-[74px]">
                        <ProgressBar />
                    </div>
                </template>
            </NumFlip>
        </div>
    </div>
</template>
