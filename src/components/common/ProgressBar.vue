<script lang="ts" setup>
import { ref } from 'vue';
import Plush from '@/components/icons/Plus.vue';
import Minus from '@/components/icons/Minus.vue';

const progress = ref(50);

const increment = () => {
    if (progress.value < 100) {
        progress.value += 50;
    }
};

const decrement = () => {
    if (progress.value > 0) {
        progress.value -= 50;
    }
};
</script>

<template>
    <div class="flex items-center w-full space-x-4">
        <button @click="decrement"
            class="min-w-12 w-12 h-12 rounded-full bg-veronicaLight flex justify-center items-center text-white">
            <Minus class="w-8" />
        </button>
        <div class="relative w-full">
            <div class="relative flex-1 h-7 bg-periwinkle rounded-[9px]">
                <div :style="{ width: progress + '%' }" class="absolute top-0 left-0 h-full purple-to-pink rounded-[9px]">
                </div>
                <div :style="{ left: progress + '%' }" :class="{ '!-ml-0.5': progress === 0 }"
                    class="absolute -top-[3px] -ml-8 h-[34px] w-[34px] light-pink-to-dark-pink rounded-full shadow-lightBlack">
                </div>
            </div>
            <div class="absolute -bottom-12 w-full flex justify-between items-center text-white text-3xl font-medium">
                <span>1</span>
                <span>50</span>
                <span>100</span>
            </div>
        </div>
        <button @click="increment"
            class="min-w-12 w-12 h-12 rounded-full bg-veronicaLight flex justify-center items-center text-white">
            <Plush class="w-8" />
        </button>
    </div>
</template>