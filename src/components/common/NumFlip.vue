<script lang="ts" setup>
import { ref } from 'vue';
import Vue3Odometer from 'vue3-odometer'
import 'odometer/themes/odometer-theme-default.css'
import Plush from '@/components/icons/Plus.vue';
import Minus from '@/components/icons/Minus.vue';
import FiveDice from '@/assets/images/five_dice.png'
import TwoDice from '@/assets/images/two_dice.png'
import ThreeDice from '@/assets/images/three_dice.png'
import HighLow from '@/components/common/HighLow.vue';
import Buttons from './Buttons.vue';
import AnyTripleVue from '@/components/common/AnyTriple.vue';
import Cube from './Cube.vue';

defineProps<{
    isNum: Boolean;
    obj: any;
}>();
const tens = ref(0);
const ones = ref(0);
const nextTens = ref(0);
const nextOnes = ref(0);
let count = ref(0);
const isFlipping = ref(false);
const counter = ref(1000);
const isMultiple = ref(null);

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

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
};

const update = () => {
    tens.value = Math.floor(Math.random() * 9)
    ones.value = Math.floor(Math.random() * 9)
    nextTens.value = Math.floor(Math.random() * 9)
    nextOnes.value = Math.floor(Math.random() * 9)
}

const updateNumbers = () => {
    isFlipping.value = true;
    setTimeout(() => {
        count.value = generateRandomNumber();
        tens.value = Math.floor(Math.random() * 99);
        ones.value = count.value % 10;
        nextTens.value = Math.floor(count.value / 10);
        nextOnes.value = count.value % 10;
        isFlipping.value = false;
    }, 500);
};

const setActive = (index: any) => {
    isMultiple.value = index;
}
const modalRef = ref();

const cubeCall = () => {
    console.log("modalRef", modalRef.value)
    modalRef.value.rollDice()
}
</script>

<template>
    <!-- win or lost content -->
    <div :class="{ 'pt-[50px] sm:pt-[78px]': isNum }">
        <!-- count number content -->
        <div v-if="isNum"
            class="scroll-container flex items-center w-fit mx-auto rounded-30 py-[15px] px-5 text-white text-[80px] leading-none dark-pink-to-blue">
            <div class="mountbatten-pink-to-purple rounded-lg mr-6 overflow-hidden min-w-[64px] text-center max-h-[92px]"
                ref="tensCurrent">
                <!-- <div class="animate__animated animate__fadeInUp" :class="{ 'animate-flip-up': isFlipping }">{{ tens }}
                </div> -->
                <Vue3Odometer :value="tens" format="d" class="animate__animated animate__fadeInUp" />
            </div>
            <div class="mountbatten-pink-to-purple rounded-lg overflow-hidden min-w-[64px]
                        text-center max-h-[92px]" ref="onesCurrent">
                <!-- <div class="animate__animated animate__fadeInUp" :class="{ 'animate-flip-up': isFlipping }">{{ ones }}
                </div> -->
                <Vue3Odometer :value="ones" format="d" class="animate__animated animate__fadeInUp" />
            </div>
            <span class="mx-1">.</span>
            <div class="mountbatten-pink-to-purple rounded-lg mr-6 overflow-hidden min-w-[64px] text-center max-h-[92px]"
                ref="tensNext">
                <!-- <div class="animate__animated animate__fadeInUp" :class="{ 'animate-flip-up': isFlipping }">{{ nextTens }}
                </div> -->
                <Vue3Odometer :value="nextTens" format="d" class="animate__animated animate__fadeInUp" />
            </div>
            <div class="mountbatten-pink-to-purple rounded-lg overflow-hidden min-w-[64px] text-center max-h-[92px]"
                ref="onesNext">
                <!-- <div class="animate__animated animate__fadeInUp" :class="{ 'animate-flip-up': isFlipping }">{{ nextOnes }}
                </div> -->
                <Vue3Odometer :value="nextOnes" format="d" class="animate__animated animate__fadeInUp" />
            </div>
        </div>

        <!-- animation cube -->
        <Cube ref="modalRef" />
        <!-- count dice content -->
        <div v-if="!isNum" class="hidden">
            <!-- <img :src="{ FiveDice: !isNum && obj.isFiveDice }" alt="dice"> -->
            <img :src="(obj.isFiveDice && !isNum) ? FiveDice : (obj.isTwoDice && !isNum) ? TwoDice : (obj.isThreeDice && !isNum) ? ThreeDice : FiveDice"
                alt="dice">

        </div>

        <!-- total win & lost -->
        <div :class="{ 'pt-0': !isNum }" class="flex items-center justify-between  rounded-30 py-[50px] sm:py-[74px] px-5">
            <div
                class="flex flex-col w-full items-center text-platinum text-2xl sm:text-4xl font-medium sm:leading-[46px] ">
                <span>WIN</span><span>100</span>
            </div>
            <div class="border-[3px] border-veronica rounded-sm h-8 sm:h-[52px]"></div>
            <div class="flex flex-col w-full items-center text-platinum text-2xl sm:text-4xl font-medium sm:leading-[46px]">
                <span>Lost</span><span>100</span>
            </div>
        </div>

        <HighLow v-if="obj.isFiveDice && !isNum" />

        <div v-if="!obj.isThreeDice" class="grid grid-cols-8 gap-3 bg-black px-3.5 py-[22px] rounded-30 mb-[98px]">
            <Buttons v-for=" i  in  16 " :key="i" :class="{ 'violet-to-french-violet': isMultiple === i }"
                @click="setActive(i)"
                class="!py-3 !px-0 flex flex-col items-center justify-center max-w-[62px] rounded-[14px]">
                <span class="text-4xl leading-[35px] mb-1">3</span>
                <span class="text-2xl leading-6 font-medium normal-case">x180</span>
            </Buttons>
        </div>

        <AnyTripleVue v-if="obj.isFiveDice && !isNum" />
        <slot name="underbutton" />
    </div>

    <slot name="progressbar" />

    <!-- roll button -->
    <button v-if="isNum" @click="update"
        class="block uppercase text-white text-2xl sm:text-[45px] sm:leading-[54px] font-medium text-center pink-to-blue-gradient py-2.5 w-full max-w-[508px] rounded-full mx-auto">Roll</button>
    <button v-else @click="cubeCall"
        class="block uppercase text-white text-2xl sm:text-[45px] sm:leading-[54px] font-medium text-center pink-to-blue-gradient py-2.5 w-full max-w-[508px] rounded-full mx-auto">Roll</button>

    <!-- counter plus & minus -->
    <div class="pt-[50px] pb-6">
        <div
            class="flex items-center justify-between max-w-[508px] w-full mx-auto bg-black rounded-30 px-1 sm:px-2.5 py-1 sm:py-2">
            <button @click="decrement"
                class="min-w-6 w-6 h-6 sm:min-w-12 sm:w-12 sm:h-12 rounded-full bg-veronicaLight flex justify-center items-center text-white">
                <Minus class="w-8" />
            </button>
            <div class="text-white font-medium text-xl sm:text-4xl">{{ counter }}</div>
            <button @click="increment"
                class="min-w-6 w-6 h-6 sm:min-w-12 sm:w-12 sm:h-12 rounded-full bg-veronicaLight flex justify-center items-center text-white">
                <Plush class="w-8" />
            </button>
        </div>
    </div>
</template>

<style>
.animate-flip-up {
    animation: flip-up 0.5s ease;
}

@keyframes flip-up {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-100%);
    }
}
</style>