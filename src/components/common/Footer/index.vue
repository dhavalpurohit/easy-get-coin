<script setup lang="ts">
import CoinList from "./CoinList.vue";
import SocialLinks from "./SocialLinks.vue";
import Copyright from "./Copyright.vue"
</script>
<template>
    <footer class="w-full p-5 sm:p-[35px] pt-0">
        <CoinList />
        <SocialLinks class="py-[100px]" />
        <Copyright />
    </footer>
</template>