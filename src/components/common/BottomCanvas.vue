<script lang="ts" setup>
import ConnectWallet from './ConnectWallet.vue';
import Bitcoin from '../../assets/images/bitcoin.png';
import DownArrow from '../icons/DownArrow.vue'
import { ref } from 'vue'

defineProps<{
    callToggleDropUp: (payload: MouseEvent) => void;
    isBottomCanvas: Boolean;
}>();

const isWalletConnected = ref(false)
const selectedWalletOption = ref({ id: 1, amount: '0.0000002', img: Bitcoin, coin: 'btc' });
const walletList = [
    { id: 1, amount: '0.0000002', img: Bitcoin, coin: 'btc' },
    { id: 2, amount: '0.0000003', img: Bitcoin, coin: 'btc' },
    { id: 3, amount: '0.0000004', img: Bitcoin, coin: 'btc' },
    { id: 4, amount: '0.0000005', img: Bitcoin, coin: 'btc' },
    { id: 5, amount: '0.0000006', img: Bitcoin, coin: 'btc' },
];

const selectWalletOption = (option: any) => {
    selectedWalletOption.value = option;
};

</script>
<template>
    <div class="bg-black p-[50px] w-full overflow-hidden fixed bottom-0 inset-x-0 rounded-t-[96px] transition-all duration-1000 ease-in-out"
        :class="{ '!h-[750px] !overflow-auto': isBottomCanvas, '!h-[0] !p-0 ': !isBottomCanvas }">
        <div class="flex items-center cursor-pointer bg-jet p-5 rounded-30 gap-2 text-white">
            <img :src=selectedWalletOption.img class="w-[50px] h-[50px] rounded-full" alt="Select Icon">
            <span class="mx-auto font-medium text-3xl">{{ selectedWalletOption.amount }}</span>
            <span class="ml-auto text-3xl font-medium mr-6">{{ selectedWalletOption.coin }}</span>
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-veronicaLight mr-3.5"
                @click="callToggleDropUp">
                <DownArrow class="stroke-white" />
            </div>
        </div>
        <div class="mt-[38px] mb-[52px] border-[5px] border-veronicaLight"></div>
        <ul class="w-full py-1 rounded-30 overflow-auto" :class="{ 'max-h-[254px]': !isWalletConnected }">
            <li v-for="option  in  walletList" :key="option.id" @click="selectWalletOption(option), callToggleDropUp()"
                class="flex items-center gap-2 px-2 py-1 text-white cursor-pointer mb-9 rounded-lg last:mb-0 hover:bg-veronica">
                <img :src=option.img class="w-[50px] h-[50px] rounded-full" alt="Select Icon">
                <span class="mx-auto font-medium text-3xl">{{ option.amount }}</span>
                <span class="ml-auto text-3xl font-medium mr-6">{{ option.coin }}</span>
            </li>
        </ul>
        <div v-if="!isWalletConnected" class="absolute inset-x-0 w-full text-center h-52 pt-16">
            <ConnectWallet />
        </div>
    </div>
</template>