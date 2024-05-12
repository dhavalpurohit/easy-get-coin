<script lang="ts" setup>
import { ref } from 'vue'
import Profile from '../../assets/images/profile.png'
import Buttons from '../common/Buttons.vue'
import RollNumber from '../common/RollNumber.vue';
import bitCoinIcon from '../../assets/images/bitcoin.png';
import assectIcon from '../../assets/images/assect.png'
import DownArrow from '../icons/DownArrow.vue'
import gameIcon from '../../assets/images/pattern-puzzle.png'
import Copy from '../icons/Copy.vue'

const isOpen = ref(false);
const selectedWalletOption = ref({ id: 1, name: 'Fairness 1', img: gameIcon });
const walletList = [
    { id: 1, name: 'Fairness 1', img: gameIcon },
    { id: 2, name: 'Fairness 2', img: gameIcon },
    { id: 3, name: 'Fairness 3', img: gameIcon },
];

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const selectWalletOption = (option: any) => {
    selectedWalletOption.value = option;
    isOpen.value = false;
};
</script>
<template>
    <div class="bg-darkGray px-4 sm:pl-[30px] sm:pr-6 pt-7 rounded-30 pb-16 md:max-w-[1200px]  md:mx-auto">
        <div class="flex items-center mb-8 sm:mb-[54px] gap-6">
            <img :src="Profile" alt="profile" class="w-12 h-12 sm:w-[100px] sm:h-[100px] rounded-full" />
            <div class="text-platinum text-xl sm:text-3xl font-medium">History</div>
        </div>
        <div class="bg-black text-white px-[18px] pt-12 sm:pt-[86px] pb-10 rounded-30">
            <!-- count number content -->
            <RollNumber />
            <div class="flex items-center justify-between pt-[55px]">
                <img :src="Profile" alt="profile" class="w-8 h-8 sm:w-20 sm:h-20 rounded-full" />
                <div class="text-white text-sm sm:text-4xl font-medium">Game Name</div>
                <Buttons
                    class="dark-pink-to-blue !font-semibold sm:!rounded-30 normal-case text-xs !px-3 !py-2 sm:!py-3 sm:!px-6">
                    Play Now
                </Buttons>
            </div>
        </div>
        <div class="bg-black text-white px-6 sm:px-12 py-10 rounded-30 my-12 w-full">
            <ul class="w-full text-xl sm:text-4xl text-white">
                <li class="flex items-center justify-between w-full pb-5">
                    <span>Bet</span>
                    <div class="flex items-center gap-2 sm:gap-4">
                        <img :src="bitCoinIcon" alt="coin-icon" class="w-5 h-5 sm:h-[50px] sm:w-[50px] rounded-full">
                        <span>0.02</span>
                    </div>
                </li>
                <li class="flex items-center justify-between w-full pb-5">
                    <span>Payout</span>
                    <div class="flex items-center gap-2 sm:gap-4">
                        <img :src="bitCoinIcon" alt="coin-icon" class="w-5 h-5 sm:h-[50px] sm:w-[50px] rounded-full">
                        <span>0.02</span>
                    </div>
                </li>
                <li class="flex items-center justify-between w-full pb-5">
                    <span>Multiplier</span>
                    <div class="flex items-center gap-2 sm:gap-4">
                        <span>x1.2</span>
                    </div>
                </li>
                <li class="flex items-center justify-between w-full pb-5">
                    <span>Total Multiplier</span>
                    <div class="flex items-center gap-2 sm:gap-4">
                        <span>x1.2</span>
                    </div>
                </li>
                <li class="flex items-center justify-between w-full pb-5">
                    <span>Wagered</span>
                    <div class="flex items-center gap-2 sm:gap-4">
                        <img :src="assectIcon" alt="assect-icon" class="w-5 h-5 sm:h-[50px] sm:w-[50px] rounded-full">
                        <span>1400</span>
                    </div>
                </li>
                <li class="flex items-center justify-between w-full">
                    <span>Roll</span>
                    <div class="flex items-center gap-2 sm:gap-4">
                        <span>Over</span>
                        <span>66.66</span>
                    </div>
                </li>
            </ul>
        </div>

        <!-- dropdown -->
        <div class="relative inline-block w-full">
            <div @click="toggleDropdown"
                class="flex items-center cursor-pointer bg-black py-4 px-[18px] rounded-3xl sm:rounded-30 gap-3 sm:gap-6"
                :class="{
                    '!rounded-b-none': isOpen
                }">
                <img :src='selectedWalletOption.img' class="w-[26px] h-[26px] sm:w-[80px] sm:h-[80px] rounded-full"
                    alt="Select Icon">
                <span class="text-white font-medium text-md sm:text-3xl">{{ selectedWalletOption.name }}</span>
                <DownArrow class="stroke-white !w-6 !h-6 sm:!w-12 sm:!h-12 rounded-full ml-auto bg-veronicaLight" />
            </div>
            <transition name="fade">
                <ul v-if="isOpen" class="absolute w-full py-1 bg-black rounded-3xl sm:rounded-30 !rounded-t-none" :class="{
                    'rounded-t-none': isOpen
                }">
                    <li v-for=" option  in  walletList " :key="option.id" @click="selectWalletOption(option)"
                        class="flex items-center gap-3 sm:gap-6 py-3 px-[18px] last:rounded-b-3xl sm:last:rounded-b-30 cursor-pointer hover:bg-veronica">
                        <img :src=option.img class="w-[26px] h-[26px] sm:w-[80px] sm:h-[80px] rounded-full"
                            alt="Select Icon">
                        <span class="text-white font-medium text-md sm:text-3xl">{{ option.name }}</span>
                    </li>
                </ul>
            </transition>
        </div>

        <!-- seeds -->
        <div class="pt-[54px]">
            <div class="text-white font-medium text-2xl sm:text-[34px] leading-[42px] mb-2 sm:mb-6">Server Seed</div>
            <div
                class="w-full mx-auto bg-black text-white font-medium text-lg sm:text-2xl sm:leading-[42px] rounded-2xl sm:rounded-30 py-3 sm:py-5 px-5 sm:px-11 overflow-x-auto">
                The user needs to randomixe to Reveal the server seed.
                <button
                    class="btn_hover rounded-2xl sm:rounded-30 text-white font-medium text-base sm:text-2xl bg-veronica py-1 sm:px-[62px] px-8 ml-auto block">
                    Randomize
                </button>
            </div>
        </div>
        <div class="pt-[54px]">
            <div class="text-white font-medium text-2xl sm:text-[34px] leading-[42px] mb-2 sm:mb-6">Server seed(Hash)</div>
            <div
                class="w-full flex items-center justify-between mx-auto bg-black text-white font-medium text-base sm:text-2xl sm:text-[34px] sm:leading-[42px] rounded-2xl sm:rounded-30 py-3 sm:py-5  px-5 sm:px-11 overflow-x-auto">
                <span>sefhiachliwhclwihlawclahwhv</span>
                <Copy class="stroke-white w-4 sm:w-[30px]" />
            </div>
        </div>
        <div class="pt-[54px]">
            <div class="text-white font-medium text-2xl sm:text-[34px] leading-[42px] mb-2 sm:mb-6">Cilend Seed</div>
            <div
                class="w-full flex items-center justify-between mx-auto bg-black text-white font-medium text-base sm:text-2xl sm:text-[34px] sm:leading-[42px] rounded-2xl sm:rounded-30 py-3 sm:py-5  px-5 sm:px-11 overflow-x-auto">
                <span>sefhiachliwhclwihlawclahwhv</span>
                <Copy class="stroke-white w-4 sm:w-[30px]" />
            </div>
        </div>
        <div class="pt-[54px]">
            <div class="text-white font-medium text-2xl sm:text-[34px] leading-[42px] mb-2 sm:mb-6">Nonce</div>
            <div
                class="w-full flex items-center justify-between mx-auto bg-black text-white font-medium text-base sm:text-2xl sm:text-[34px] sm:leading-[42px] rounded-2xl sm:rounded-30 py-3 sm:py-5  px-5 sm:px-11 overflow-x-auto">
                <span>150</span>
                <Copy class="stroke-white w-4 sm:w-[30px]" />
            </div>
        </div>
        <button
            class="block mt-[100px] uppercase text-white text-2xl sm:text-[45px] sm:leading-[54px] font-medium text-center pink-to-blue-gradient py-2.5 w-full max-w-[508px] rounded-full mx-auto">VERIFY</button>
    </div>
</template>