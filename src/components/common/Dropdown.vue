<script setup lang="ts">
import { ref } from 'vue';
import Moneyicon from '../../assets/images/moneyicon.png';
import DownArrow from '../icons/DownArrow.vue'

const isOpen = ref(false);
const selectedWalletOption = ref({ id: 1, address: '10000EGC', img: Moneyicon });
const walletList = [
    { id: 1, address: '10000EGA', img: Moneyicon },
    { id: 2, address: '10000EGB', img: Moneyicon },
    { id: 3, address: '10000EGC', img: Moneyicon },
];

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const selectWalletOption = (option) => {
    selectedWalletOption.value = option;
    isOpen.value = false;
};
</script>
<template>
    <div class="relative inline-block">
        <div @click="toggleDropdown" class="flex items-center cursor-pointer bg-jet py-1.5 px-1 rounded-30 gap-2" :class="{
            'rounded-b-none': isOpen
        }">
            <img :src='selectedWalletOption.img' class="w-[46px] h-[46px] rounded-full" alt="Select Icon">
            <span class="text-white font-medium text-3xl">{{ selectedWalletOption.address }}</span>
            <DownArrow class="stroke-white" />
        </div>
        <transition name="fade">
            <ul v-if="isOpen" class="absolute w-full py-1 bg-jet rounded-30" :class="{
                'rounded-t-none': isOpen
            }">
                <li v-for=" option  in  walletList " :key="option.id" @click="selectWalletOption(option)"
                    class="flex items-center gap-2 py-3 px-2 last:rounded-b-30 cursor-pointer hover:bg-veronica">
                    <img :src=option.img class="w-[46px] h-[46px] rounded-full" alt="Select Icon">
                    <span class="text-white font-medium text-3xl">{{ option.address }}</span>
                </li>
            </ul>
        </transition>
    </div>
</template>