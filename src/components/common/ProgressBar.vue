<script lang="ts" setup>
import { ref } from 'vue';
import Plush from '@/components/icons/Plus.vue';
import Minus from '@/components/icons/Minus.vue';

const progress = ref(50);
const minValue = 0;
const maxValue = 100;
const incrementInterval = ref<number | null>(null);

const updateProgress = (event: MouseEvent) => {
    const progressBar = event.currentTarget as HTMLElement;
    const boundingRect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - boundingRect.left;
    const percentage = (offsetX / boundingRect.width) * 100;
    if (percentage >= 0 && percentage <= 100) {
        progress.value = Math.max(minValue, Math.min(maxValue, percentage));
    }
};

const increment = (isContinuous = true) => {
    if (isContinuous) {
        incrementInterval.value = setInterval(() => {
            if (progress.value < maxValue) {
                progress.value = Math.min(progress.value + 10, maxValue);
            }
        }, 200)
    } else {
        if (progress.value < maxValue) {
            progress.value = Math.min(progress.value + 10, maxValue);
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
            if (progress.value > minValue) {
                progress.value = Math.max(progress.value - 10, minValue);
            }
        }, 200)

    } else {
        if (progress.value > minValue) {
            progress.value = Math.max(progress.value - 10, minValue);
        }
    }
};
const stopDecrement = () => {
    if (incrementInterval.value) {
        clearInterval(incrementInterval.value);
        incrementInterval.value = null;
    }
}

</script>

<template>
    <div class="flex items-center w-full space-x-4">
        <button @mousedown="decrement(true)" @mouseup="stopIncrement" @touchstart="decrement(true)"
            @touchend="stopIncrement" @click="decrement(false)"
            class="min-w-6 w-6 h-6 sm:min-w-12 sm:w-12 sm:h-12 rounded-full bg-veronicaLight flex justify-center items-center text-white">
            <Minus class="w-4 sm:w-8" />
        </button>
        <div class="relative w-full">
            <div class="relative flex-1 h-6 sm:h-7 bg-periwinkle rounded-[9px]" @mousedown="updateProgress"
                @mouseup="updateProgress">
                <div :style="{ width: progress + '%' }" class="absolute top-0 left-0 h-full purple-to-pink rounded-[9px]">
                </div>
                <div :style="{ left: progress + '%' }" :class="{ '-ml-[2px]': progress === 0 }"
                    class="absolute -top-[2px] sm:-top-[3px] -ml-[30px] h-7 w-7 sm:h-[34px] sm:w-[34px] light-pink-to-dark-pink rounded-full shadow-lightBlack">
                </div>
            </div>
            <div
                class="absolute -bottom-8 sm:-bottom-12 w-full flex justify-between items-center text-white text-lg sm:text-3xl font-medium">
                <span>1</span>
                <span>{{ Math.round(progress) }}</span>
                <span>100</span>
            </div>
        </div>
        <button @mousedown="increment(true)" @mouseup="stopIncrement" @touchstart="increment(true)"
            @touchend="stopIncrement" @click="increment(false)"
            class="min-w-6 w-6 h-6 sm:min-w-12 sm:w-12 sm:h-12 rounded-full bg-veronicaLight flex justify-center items-center text-white">
            <Plush class="w-4 sm:w-8" />
        </button>
    </div>
</template>