<script lang="ts" setup>
import { ref } from "vue";
import Plush from '@/components/icons/Plus.vue';
import Minus from '@/components/icons/Minus.vue';
import FiveDice from '@/assets/images/five_dice.png'
import TwoDice from '@/assets/images/two_dice.png'
import ThreeDice from '@/assets/images/three_dice.png'
import HighLow from '@/components/common/HighLow.vue';
import Buttons from './Buttons.vue';
import AnyTripleVue from '@/components/common/AnyTriple.vue';
import Cube from './Cube.vue';
import WinLost from './WinLost.vue';
import RollNumber from './RollNumber.vue';
import { useCounterStore } from '../../stores/counter'

defineProps<{
    isNum: Boolean;
    obj: any;
}>();

const { update } = useCounterStore();
const counter = ref(50);
const isMultiple = ref(null);
const incrementInterval = ref<number | null>(null);
const isFocused = ref(false);

const increment = (isContinuous = true) => {
    if (isContinuous) {
        incrementInterval.value = setInterval(() => {
            if (counter.value < 1000) {
                counter.value++;
            }
        }, 200);
    } else {
        if (counter.value < 1000) {
            counter.value++;
        }
    }

};

const stopIncrement = () => {
    if (incrementInterval.value) {
        clearInterval(incrementInterval.value);
        incrementInterval.value = null;
    }
}
const decrement = (isContinuous = true) => {
    if (isContinuous) {
        incrementInterval.value = setInterval(() => {
            if (counter.value > 0) {
                counter.value--;
            }
        }, 200);
    } else {
        if (counter.value > 0) {
            counter.value--;
        }
    }
};

const stopDecrement = () => {
    if (incrementInterval.value) {
        clearInterval(incrementInterval.value);
        incrementInterval.value = null;
    }
}

// const generateRandomNumber = () => {
//     return Math.floor(Math.random() * 100);
// };

// const updateNumbers = () => {
//     isFlipping.value = true;
//     setTimeout(() => {
//         count.value = generateRandomNumber();
//         numOne.value = Math.floor(Math.random() * 99);
//         numTwo.value = count.value % 10;
//         numThree.value = Math.floor(count.value / 10);
//         numFour.value = count.value % 10;
//         isFlipping.value = false;
//     }, 500);
// };

const setActive = (index: any) => {
    isMultiple.value = index;
}
const modalRef = ref();

const cubeCall = () => {
    console.log("modalRef", modalRef.value)
    modalRef.value.rollDice()
}

const enableKeyboard = () => {
    isFocused.value = true;
    console.log(isFocused.value)
    window.addEventListener('keydown', handleKeyDown);
};

const disableKeyboard = () => {
    isFocused.value = false;
    console.log(isFocused.value)
    window.removeEventListener('keydown', handleKeyDown);
};

const handleKeyDown = (event: KeyboardEvent) => {
    if (isFocused.value) {
        switch (event.key) {
            case 'ArrowLeft':
                decrement(false);
                break;
            case 'ArrowRight':
                increment(false);
                break;
            case '+':
            case '=':
                increment(false);
                break;
            case '-':
                decrement(false);
                break;
        }
    }
};
</script>

<template>
    <!-- win or lost content -->
    <div :class="{ 'pt-[50px] sm:pt-[78px]': isNum }">
        <!-- count number content -->
        <RollNumber v-if="isNum" />
        <!-- animation cube -->
        <Cube v-if="!isNum" ref="modalRef" />
        <!-- count dice content -->
        <div v-if="!isNum" class="hidden">
            <!-- <img :src="{ FiveDice: !isNum && obj.isFiveDice }" alt="dice"> -->
            <img :src="(obj.isFiveDice && !isNum) ? FiveDice : (obj.isTwoDice && !isNum) ? TwoDice : (obj.isThreeDice && !isNum) ? ThreeDice : FiveDice"
                alt="dice">
        </div>
        <!-- total win & lost -->
        <WinLost class="flex md:max-w-[300px] md:mx-auto md:py-10 md:hidden" :class="{ 'pt-0': !isNum }" />
        <HighLow v-if="obj.isFiveDice && !isNum" class="hidden" />
        <div v-if="obj.isTwoDice"
            class="flex items-center overflow-x-auto sm:grid grid-cols-8 md:flex gap-3 bg-black px-3.5 py-3 sm:py-[22px] rounded-xl sm:rounded-30 mb-[50px] sm:mb-[98px] md:mb-5">
            <Buttons v-for=" i  in  32 " :key="i" :class="{ 'violet-to-french-violet': isMultiple === i }"
                @click="setActive(i)"
                class="!py-2 sm:!py-3 !px-0 flex flex-col items-center justify-center min-w-[60px] max-w-[62px] rounded-xl sm:!rounded-[14px]">
                <span class="text-2xl sm:text-4xl sm:leading-[35px] sm:mb-1">3</span>
                <span class="text-base sm:text-2xl sm:leading-6 font-medium normal-case">x180</span>
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
        <div class="flex items-center justify-between max-w-[508px] w-full mx-auto bg-black rounded-30 px-1 sm:px-2.5 py-1 sm:py-2"
            @focus="enableKeyboard" @blur="disableKeyboard" tabindex="0">
            <button @mousedown="decrement(true)" @mouseup="stopDecrement" @touchstart="decrement(true)"
                @touchend="stopDecrement" @click="decrement(false)" @focus="enableKeyboard" @blur="disableKeyboard"
                tabindex="0"
                class="min-w-6 w-6 h-6 sm:min-w-12 sm:w-12 sm:h-12 rounded-full bg-veronicaLight flex justify-center items-center text-white">
                <Minus class="w-4 sm:w-8" />
            </button>
            <div class="text-white font-medium text-xl sm:text-4xl">{{ counter }}</div>
            <button @mousedown="increment(true)" @mouseup="stopIncrement" @touchstart="increment(true)"
                @touchend="stopIncrement" @click="increment(false)" @focus="enableKeyboard" @blur="disableKeyboard"
                tabindex="0"
                class="min-w-6 w-6 h-6 sm:min-w-12 sm:w-12 sm:h-12 rounded-full bg-veronicaLight flex justify-center items-center text-white">
                <Plush class="w-4 sm:w-8" />
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