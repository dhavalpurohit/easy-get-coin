<script lang="ts" setup>
import NumFlip from "../common/NumFlip.vue";
import { ref, reactive } from "vue";
import ProgressBar from "../common/ProgressBar.vue";
import Diceanime from '@/components/common/Diceanime.vue';
import WinLost from "../common/WinLost.vue";
import TabView from "../common/Tab/TabView.vue";
const booleanList = reactive({
    isFiveDice: true,
    isTwoDice: false,
    isThreeDice: false
})
const isNum = ref(false);

const HistoryNum = [23.25, 23.25, 23.25, 23.25, 23.25];
// const DiceArry = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]
</script>
<template>
    <div class="relative px-5 sm:px-[45px] md:px-0">
        <div class="bg-darkGray md:bg-transparent px-4 py-7 rounded-30">
            <div class="text-platinum text-lg sm:text-3xl font-medium md:hidden">History</div>
            <div class="pt-[30px]">
                <!-- History Number view content -->
                <ul v-if="isNum" class="flex justify-center text-white gap-2 sm:gap-3">
                    <li v-for="num in HistoryNum"
                        class="flex items-center gap-2 sm:gap-3 text-sm sm:text-3xl font-medium last:after:w-0 after:block sm:after:w-[6px] after:w-[2px] after:bg-veronica after:h-full after:rounded"
                        :key="num">{{
                            num }}</li>
                </ul>
                <!-- diceanime view content -->
                <Diceanime v-if="!isNum" :obj="booleanList" />

                <!-- number view content -->
                <NumFlip :isNum="isNum" :obj="booleanList">
                    <template #underbutton v-if="isNum">
                        <!-- under x button -->
                        <div class="flex items-center justify-center gap-4 sm:gap-[30px]">
                            <button
                                class="flex flex-col items-center text-platinumGray rounded-xl sm:rounded-3xl bg-darkPurple py-1 sm:py-2 px-3 sm:px-9 text-center">
                                <span class="text-lg sm:text-3xl sm:leading-[38px] font-bold">UNDER 10.98</span>
                                <span class="text-sm sm:text-2xl font-medium">x30.00</span>
                            </button>
                            <WinLost class="hidden md:flex" />
                            <button
                                class="flex flex-col items-center text-fandango rounded-xl sm:rounded-3xl pink-to-orange py-1 sm:py-2 px-3 sm:px-9 text-center">
                                <span class="text-lg sm:text-3xl sm:leading-[38px] font-bold">UNDER 10.98</span>
                                <span class="text-sm sm:text-2xl font-medium">x30.00</span>
                            </button>
                        </div>
                    </template>
                    <template #progressbar v-if="isNum">
                        <!-- progressbar -->
                        <div class="py-[74px] md:pt-0">
                            <ProgressBar class="md:max-w-[580px] md:mx-auto" />
                        </div>
                    </template>
                </NumFlip>
            </div>
        </div>
        <TabView class="pt-[76px] pb-[100px]" />
    </div>
</template>
