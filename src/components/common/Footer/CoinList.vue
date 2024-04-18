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
    <ul class="w-full grid grid-cols-3 gap-8">
        <li class="flex items-center w-full" v-for="option in CoinList" :key="option">
            <div class="min-w-[50px] w-[50px] h-[50px] rounded-full bg-white mr-[15px]"></div>
            <span class="font-medium text-[22px] text-white">{{ option }}</span>
        </li>
    </ul>
</template>
