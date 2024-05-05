<script lang="ts" setup>
import Telegram from '../../../assets/images/telegram.png'
import Twitter from '../../../assets/images/twitter.png'
import Discord from '../../../assets/images/discord.png'

</script>
<template>
    <div class="flex items-center justify-center gap-2.5">
        <span class="text-white uppercase text-lg sm:text-2xl font-medium">Team</span>
        <ul class="flex items-center gap-6">
            <li>
                <a href="http://" target="_blank">
                    <img :src=Telegram alt="Telegram" class="w-10 sm:w-14">
                </a>
            </li>
            <li>
                <a href="http://" target="_blank">
                    <img :src=Discord alt="Discord" class="w-10 sm:w-14">
                </a>
            </li>
            <li>
                <a href="http://" target="_blank">
                    <img :src=Twitter alt="Twitter" class="w-10 sm:w-14">
                </a>
            </li>
        </ul>



    </div>
</template>