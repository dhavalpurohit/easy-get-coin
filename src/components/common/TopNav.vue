<script setup lang="ts">
import { ref } from 'vue'
import DropDown from "./Dropdown.vue";
import Profile from '../Profile/index.vue';

const isWalletConnected = ref(false)
</script>
<template>
    <div class="md:flex md:items-center">
        <DropDown />
        <Profile :isWalletConnected=isWalletConnected class="hidden md:flex" />
    </div>
</template>