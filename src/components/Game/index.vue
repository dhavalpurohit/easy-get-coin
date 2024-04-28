<script setup lang="ts">
import { ref } from 'vue'
import Vue3Odometer from 'vue3-odometer'
import 'odometer/themes/odometer-theme-default.css'
const number = ref(99)
const num2 = ref(99)
function update() {
    number.value = Math.floor(Math.random() * 99)
    update1()
}
function update1() {
    num2.value = Math.floor(Math.random() * 100)
}

</script>
<template>
    <div class="greetings">
        <div class="justify-center flex items-center h-screen">
            <div class="text-4xl text-white">
                <Vue3Odometer :value="number" format="dd" />
                .
                <Vue3Odometer class="o-text" :value="num2" format="dd" />
                <button @click="update">update number</button>
            </div>
        </div>
    </div>
</template>
