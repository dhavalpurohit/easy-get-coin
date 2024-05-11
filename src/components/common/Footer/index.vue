<script setup lang="ts">
import CoinList from "./CoinList.vue";
import SocialLinks from "./SocialLinks.vue";
import Copyright from "./Copyright.vue"
</script>
<template>
    <footer class="w-full p-5 sm:p-[35px] pt-0 bg-transparent md:bg-black md:pl-[126px] md:pt-[84px]">
        <CoinList />
        <div class="flex justify-center items-center flex-col md:pt-12 md:flex-row-reverse md:gap-[100px]">
            <SocialLinks class="py-[100px] md:py-0" />
            <Copyright class="md:w-auto" />
        </div>
    </footer>
</template>