<script lang="ts" setup>

defineProps<{
    isActive?: Boolean | undefined;
}>();
</script>
<template>
    <button :class="{ 'pink-to-blue-gradient': isActive }"
        class="btn_hover rounded-[25px] text-white font-bold text-3xl uppercase bg-darkPurple py-[18px] px-11">
        <slot />
    </button>
</template>