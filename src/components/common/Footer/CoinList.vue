<script lang="ts" setup>
const CoinList = [
    'USDCOIN',
    'BINANCOIN',
    'BNBCHAIN',
    'DAI',
    'ETHEREUM',
    'XRP',
    'BTICON',
    'PANCAKESWAP',
    'LITECOIN',
    'UNISWAP',
]
</script>
<template>
    <ul class="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-2 gap-y-4 sm:gap-8">
        <li class="flex items-center w-full" v-for="option in CoinList" :key="option">
            <div
                class="min-w-[25px] w-[25px] h-[25px] sm:min-w-[50px] sm:w-[50px] sm:h-[50px] rounded-full bg-white mr-2 sm:mr-[15px]">
            </div>
            <span class="font-medium text-sm sm:text-[22px] text-white">{{ option }}</span>
        </li>
    </ul>
</template>
