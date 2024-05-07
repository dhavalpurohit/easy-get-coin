<script lang="ts" setup>

defineProps<{
    isActive?: Boolean | undefined;
}>();
</script>
<template>
    <button :class="{ 'pink-to-blue-gradient': isActive }"
        class="btn_hover rounded-xl sm:rounded-[25px] text-white font-bold sm:text-3xl uppercase bg-darkPurple py-3 sm:py-[18px] px-6 sm:px-11">
        <slot />
    </button>
</template>