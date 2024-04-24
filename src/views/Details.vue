<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import BackArrow from '@/components/icons/BackArrow.vue';
import BottomCanvas from '@/components/common/BottomCanvas.vue';
import HomeIcon from '@/components/icons/HomeIcon.vue'
import ShieldStarIcon from '@/components/icons/ShieldStar.vue'
import ProfileIcon from '@/components/icons/ProfileIcon.vue'

const router = useRouter();
const isBottomCanvas = ref(false);

const toggleDropUp = () => {
    isBottomCanvas.value = !isBottomCanvas.value;
};

</script>
<template>
    <div class="relative default-gradient pt-[106px] px-[46px] pb-16">
        <div class="flex items-center text-white mb-[98px]">
            <BackArrow class="cursor-pointer" @click="router.push('/home');" />
            <div class="text-5xl font-bold mx-auto">{{ router.currentRoute.value.name }}</div>
        </div>
        <div class="mb-[112px]">
            <router-view></router-view>
        </div>
        <transition name="fade">
            <BottomCanvas :isBottomCanvas="isBottomCanvas" :callToggleDropUp="toggleDropUp" />
        </transition>
        <div class="bg-jet w-full flex items-center fixed inset-x-0 bottom-0 justify-around">
            <HomeIcon class="w-7 h-7 cursor-pointer hover:scale-105" />
            <ShieldStarIcon class="w-11 h-11 relative top-0.5 cursor-pointer hover:scale-105" @click="toggleDropUp" />
            <ProfileIcon class="w-7 h-7 cursor-pointer hover:scale-105" />
        </div>
    </div>
</template>