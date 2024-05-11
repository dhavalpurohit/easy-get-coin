<script lang="ts" setup>
import Profile from '../../assets/images/profile.png'
import Buttons from '../common/Buttons.vue'
import RollNumber from '../common/RollNumber.vue';
</script>
<template>
    <div class="bg-darkGray px-4 sm:pl-[30px] sm:pr-6 pt-7 rounded-30 pb-16 md:max-w-[1200px]  md:mx-auto">
        <div class="flex items-center mb-8 sm:mb-[54px] gap-6">
            <img :src="Profile" alt="profile" class="w-12 h-12 sm:w-[100px] sm:h-[100px] rounded-full" />
            <div class="text-platinum text-xl sm:text-3xl font-medium">History</div>
        </div>
        <div class="bg-black text-white px-[18px] pt-12 sm:pt-[86px] pb-10 rounded-30">
            <!-- count number content -->
            <RollNumber />
            <div class="flex items-center justify-between pt-[55px]">
                <img :src="Profile" alt="profile" class="w-8 h-8 sm:w-20 sm:h-20 rounded-full" />
                <div class="text-white text-sm sm:text-4xl font-medium">Game Name</div>
                <Buttons
                    class="dark-pink-to-blue !font-semibold sm:!rounded-30 normal-case text-xs !px-3 !py-2 sm:!py-3 sm:!px-6">
                    Play Now
                </Buttons>
            </div>
        </div>
    </div>
</template>