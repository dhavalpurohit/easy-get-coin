<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import TabCard from './TabCard.vue';
import tableLine from '../../../assets/images/table_line.png'
import Profile from '../../../assets/images/profile.png'
import bitCoin from '../../../assets/images/bitcoin.png'
import gameIcon from '../../../assets/images/pattern-puzzle.png'

const currentTab = ref('Tab 1');
const isTable = ref(true)
const tableData = [
    { playerImg: Profile, player: 'Peter', currencyIcon: bitCoin, bet: '0.0002000', payout: '0.0002000', multiplier: 'x2', gameImg: gameIcon },
    { playerImg: Profile, player: 'Peter', currencyIcon: bitCoin, bet: '0.0002000', payout: '0.0002000', multiplier: 'x2', gameImg: gameIcon }
]
const router = useRouter();
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
            <div v-if="isTable" class="md:hidden">
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
                    <p class="text-white  text-lg sm:text-[34px] sm:leading-10 font-medium">ffffff/15 gentle light,Where
                        dreams
                        dissolve,
                        and fears take flight.Whispers of the breeze, secrets
                        of the dawn,A symphony of life, a canvas yet drawn.</p>
                </div>
            </div>
        </transition>

        <transition name="fade" mode="out-in">
            <div v-if="isTable" class="mt-[47px] w-full hidden md:block">
                <table v-if="currentTab === 'Tab 1'" class="text-left text-white text-2xl w-full">
                    <thead class="uppercase">
                        <tr class="bg-electric_purple">
                            <th class=" p-[52px] rounded-tl-30">Player</th>
                            <th class="p-[52px]">Bet</th>
                            <th class="p-[52px]">Payout</th>
                            <th class="p-[52px]">Multiplier</th>
                            <th class="p-[52px] rounded-tr-30">Game</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(data, index) in  tableData" :key="index" class="bg-electric_purple"
                            :style="{ backgroundImage: `url(${tableLine})`, backgroundSize: '100% 100%' }">
                            <td class="px-[52px] py-5" :class="{ 'rounded-bl-30': index === tableData.length - 1 }">
                                <div class="flex items-center gap-3.5">
                                    <img :src="data.playerImg" alt="player-image" class="w-[90px] h-[90px] rounded-full">
                                    <span>{{ data.player }}</span>
                                </div>
                            </td>
                            <td class="px-[52px] py-5">
                                <div class="flex items-center gap-3.5 cursor-pointer" @click="router.push('/betdetails');">
                                    <img :src="data.currencyIcon" alt="currency-image"
                                        class="w-[50px] h-[50px] rounded-full">
                                    <span>{{ data.bet }}</span>
                                </div>
                            </td>
                            <td class="px-[52px] py-5">
                                <div class="flex items-center gap-3.5 cursor-pointer" @click="router.push('/betdetails');">
                                    <img :src="data.currencyIcon" alt="currency-image"
                                        class="w-[50px] h-[50px] rounded-full">
                                    <span>{{ data.payout }}</span>
                                </div>
                            </td>
                            <td class="px-[52px] py-5">{{ data.multiplier }}</td>
                            <td class="px-[52px] py-5" :class="{ 'rounded-br-30': index === tableData.length - 1 }">
                                <img :src="data.gameImg" alt="game-image"
                                    class="min-w-[90px] min-h-[90px] w-[90px] h-[90px] rounded-full">
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table v-if="currentTab === 'Tab 2'" class="text-left text-white text-2xl w-full">
                    <thead class="uppercase">
                        <tr class="bg-electric_purple">
                            <th class=" p-[52px] rounded-tl-30">Player</th>
                            <th class="p-[52px]">Bet</th>
                            <th class="p-[52px]">Payout</th>
                            <th class="p-[52px]">Multiplier</th>
                            <th class="p-[52px] rounded-tr-30">Game</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(data, index) in  tableData" :key="index" class="bg-electric_purple"
                            :style="{ backgroundImage: `url(${tableLine})`, backgroundSize: '100% 100%' }">
                            <td class="px-[52px] py-5" :class="{ 'rounded-bl-30': index === tableData.length - 1 }">
                                <div class="flex items-center gap-3.5">
                                    <img :src="data.playerImg" alt="player-image" class="w-[90px] h-[90px] rounded-full">
                                    <span>{{ data.player }}</span>
                                </div>
                            </td>
                            <td class="px-[52px] py-5">
                                <div class="flex items-center gap-3.5 cursor-pointer" @click="router.push('/betdetails');">
                                    <img :src="data.currencyIcon" alt="currency-image"
                                        class="w-[50px] h-[50px] rounded-full">
                                    <span>{{ data.bet }}</span>
                                </div>
                            </td>
                            <td class="px-[52px] py-5">
                                <div class="flex items-center gap-3.5 cursor-pointer" @click="router.push('/betdetails');">
                                    <img :src="data.currencyIcon" alt="currency-image"
                                        class="w-[50px] h-[50px] rounded-full">
                                    <span>{{ data.payout }}</span>
                                </div>
                            </td>
                            <td class="px-[52px] py-5">{{ data.multiplier }}</td>
                            <td class="px-[52px] py-5" :class="{ 'rounded-br-30': index === tableData.length - 1 }">
                                <img :src="data.gameImg" alt="game-image"
                                    class="min-w-[90px] min-h-[90px] w-[90px] h-[90px] rounded-full">
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div v-if="currentTab === 'Tab 3'" class="mt-[47px]">
                    <iframe class="w-full" height="500" src="https://www.youtube.com/embed/75yhYazRwRs?si=6aAHuMgSt0ZKaXJ_"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <h2 class="text-white  text-lg sm:text-[34px] font-bold sm:leading-[42px] py-6">Game Name</h2>
                    <p class="text-white  text-lg sm:text-[34px] sm:leading-10 font-medium">ffffff/15 gentle light,Where
                        dreams
                        dissolve,
                        and fears take flight.Whispers of the breeze, secrets
                        of the dawn,A symphony of life, a canvas yet drawn.</p>
                </div>
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