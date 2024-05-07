<script lang="ts" setup>
import { ref } from 'vue'
import TabCard from './TabCard.vue';
const currentTab = ref('Tab 1');
</script>
<template>
    <div>
        <div class="flex items-center justify-between w-full space-x-4">
            <!-- Tab buttons -->
            <button @click="currentTab = 'Tab 1'" :class="{ 'after:bg-electricPurple': currentTab === 'Tab 1' }"
                class=" text-lg sm:text-[34px] sm:leading-[42px] font-medium text-white text-center relative  after:inset-x-0 after:absolute after:mx-auto after:-bottom-2 after:h-1 sm:after:-bottom-5 sm:after:h-1.5 after:w-[52px] after:rounded-[3px]">My
                Bets</button>
            <button @click="currentTab = 'Tab 2'" :class="{ 'after:bg-electricPurple': currentTab === 'Tab 2' }"
                class=" text-lg sm:text-[34px] sm:leading-[42px] font-medium text-white text-center relative  after:inset-x-0 after:absolute after:mx-auto after:-bottom-2 after:h-1 sm:after:-bottom-5 sm:after:h-1.5 after:w-[52px] after:rounded-[3px]">Big
                Wins</button>
            <button @click="currentTab = 'Tab 3'" :class="{ 'after:bg-electricPurple': currentTab === 'Tab 3' }"
                class=" text-lg sm:text-[34px] sm:leading-[42px] font-medium text-white text-center relative  after:inset-x-0 after:absolute after:mx-auto after:-bottom-2 after:h-1 sm:after:-bottom-5 sm:after:h-1.5 after:w-[52px] after:rounded-[3px]">Description</button>
        </div>

        <!-- Content of tabs -->
        <transition name="fade" mode="out-in">
            <div v-if="currentTab === 'Tab 1'" class="mt-[47px]">
                <TabCard tab-title="bets" />
                <TabCard tab-title="bets" />
                <TabCard tab-title="bets" />
            </div>
            <div v-else-if="currentTab === 'Tab 2'" class="mt-[47px]">
                <TabCard tab-title="wins" />
                <TabCard tab-title="wins" />
                <TabCard tab-title="wins" />
            </div>
            <div v-else class="mt-[47px]">
                <iframe class="w-full" height="412" src="https://www.youtube.com/embed/75yhYazRwRs?si=6aAHuMgSt0ZKaXJ_"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h2 class="text-white  text-lg sm:text-[34px] font-bold sm:leading-[42px] py-6">Game Name</h2>
                <p class="text-white  text-lg sm:text-[34px] sm:leading-10 font-medium">ffffff/15 gentle light,Where dreams
                    dissolve,
                    and fears take flight.Whispers of the breeze, secrets
                    of the dawn,A symphony of life, a canvas yet drawn.</p>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>