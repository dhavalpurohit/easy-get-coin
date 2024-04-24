<script lang="ts" setup>
import Profile from '../../assets/images/profile.png'
import Buttons from '../common/Buttons.vue'

</script>
<template>
    <div class="bg-darkGray pl-[30px] pr-6 pt-7 rounded-30 pb-16">
        <div class="flex items-center mb-[54px] gap-6">
            <img :src="Profile" alt="profile" class="w-[100px] h-[100px] rounded-full" />
            <div class="text-platinum text-3xl font-medium">History</div>
        </div>
        <div class="bg-black text-white px-[18px] pt-[86px] pb-10 rounded-30">
            <!-- count number content -->
            <div
                class="group scroll-container flex items-center w-fit mx-auto rounded-30 py-[15px] px-5 text-white text-[80px] leading-none dark-pink-to-blue font-medium">
                <div class="mountbatten-pink-to-purple rounded-lg p-0.5 mr-6 overflow-hidden min-w-[59px] text-center ease-in-out duration-300 group-hover:-translate-y-1"
                    ref="tensCurrent">
                    <div class="animate__animated animate__fadeInUp animate-flip-up">0
                    </div>
                </div>
                <div class="mountbatten-pink-to-purple rounded-lg p-0.5 overflow-hidden min-w-[59px]
                        text-center  ease-in-out duration-[500ms] group-hover:-translate-y-1" ref="onesCurrent">
                    <div class="animate__animated animate__fadeInUp animate-flip-up">0
                    </div>
                </div>
                <span class="mx-1">.</span>
                <div class="mountbatten-pink-to-purple rounded-lg p-0.5 mr-6 overflow-hidden min-w-[59px] text-center ease-in-out duration-[700ms] group-hover:-translate-y-1"
                    ref="tensNext">
                    <div class="animate__animated animate__fadeInUp animate-flip-up">0
                    </div>
                </div>
                <div class="mountbatten-pink-to-purple rounded-lg p-0.5 overflow-hidden min-w-[59px] text-center ease-in-out duration-[900ms] group-hover:-translate-y-1"
                    ref="onesNext">
                    <div class="animate__animated animate__fadeInUp animate-flip-up">0
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between pt-[55px]">
                <img :src="Profile" alt="profile" class="w-20 h-20 rounded-full" />
                <div class="text-white text-4xl font-medium">Game Name</div>
                <Buttons class="dark-pink-to-blue !font-semibold !rounded-30 normal-case !py-3">Play Now</Buttons>
            </div>
        </div>
    </div>
</template>