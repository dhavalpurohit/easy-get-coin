<script lang="ts" setup>
import Vue3Odometer from 'vue3-odometer'
import 'odometer/themes/odometer-theme-default.css'
import { useCounterStore } from '@/stores/counter';
const { rollingNumObj } = useCounterStore();

</script>
<template>
    <div
        class="scroll-container flex items-center w-fit mx-auto rounded-xl sm:rounded-30 py-2 sm:py-[15px] px-2.5 sm:px-5 text-white text-[40px] sm:text-[80px] leading-none dark-pink-to-blue">
        <div class="mountbatten-pink-to-purple rounded-lg mr-3 sm:mr-6 overflow-hidden min-w-10 sm:min-w-[64px] text-center max-h-[92px]"
            ref="tensCurrent">
            <Vue3Odometer :value="rollingNumObj.numOne" format="d" class="animate__animated animate__fadeInUp" />
        </div>
        <div class="mountbatten-pink-to-purple rounded-lg overflow-hidden min-w-10 sm:min-w-[64px]
                        text-center max-h-[92px]" ref="onesCurrent">
            <Vue3Odometer :value="rollingNumObj.numTwo" format="d" class="animate__animated animate__fadeInUp" />
        </div>
        <span class="mx-1">.</span>
        <div class="mountbatten-pink-to-purple rounded-lg mr-3 sm:mr-6 overflow-hidden min-w-10 sm:min-w-[64px] text-center max-h-[92px]"
            ref="tensNext">
            <Vue3Odometer :value="rollingNumObj.numThree" format="d" class="animate__animated animate__fadeInUp" />
        </div>
        <div class="mountbatten-pink-to-purple rounded-lg overflow-hidden min-w-10 sm:min-w-[64px] text-center max-h-[92px]"
            ref="onesNext">
            <Vue3Odometer :value="rollingNumObj.numFour" format="d" class="animate__animated animate__fadeInUp" />
        </div>
    </div>
</template>