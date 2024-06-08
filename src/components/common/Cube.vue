<script setup lang="ts">
import { ref } from 'vue';

const angleX = ref(0);
const angleY = ref(0);
const angleZ = ref(45);
const delay = ref(0);
const canRoll = ref(true);
const rollMax = ref(50);
const result = ref(1);
const cube = ref<HTMLElement | null>(null);
const selectedNum = ref(0);

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

function rollDice() {
    selectedNum.value = 0
    canRoll.value = false;
    const xTurn = 4 + getRandomInt(rollMax.value);
    const yTurn = 4 + getRandomInt(rollMax.value);

    delay.value = Math.max(xTurn, yTurn) * 50;
    angleX.value += 90 * xTurn;
    angleY.value += 90 * yTurn;
    if (angleX.value % 180) {
        getRandomInt(3) > 1 && (angleX.value += 90)
    }
    if (cube.value) {
        cube.value.style.transform = "rotateX(" + angleX.value + "deg) rotateY(" + angleY.value + "deg)"
        cube.value.style.transitionDuration = delay.value + 'ms'
    }

    let x = angleX.value % 360,
        y = angleY.value % 360
    if (x === 0 || x === 180) {
        switch ((x + y) % 360) {
            case 0: result.value = 1
                break
            case 90: result.value = 5
                break
            case 180: result.value = 6
                break
            case 270: result.value = 2
                break
            default:
                console.error(123456);
        }
    }
    else if (x === 90) {
        result.value = 4
    }
    else if (x === 270) {
        result.value = 3
    }
    setTimeout(() => { canRoll.value = true, selectedNum.value = result.value }, delay.value)

    console.log('result:', result.value)

    // rotate Z
    switch (result.value) {
        case 0: angleZ.value = 45
            break
        case 1: angleZ.value = 45
            break
        default:
            angleZ.value = 0;
    }
    return (result)
}

defineExpose({
    rollDice
})
</script>

<template>
    <div class="parents">
        <div class="dice-container">
            <div ref="dice" class="dice"
                :style="{ transform: `rotateX(${angleX + 50}deg) rotateY(${angleY}deg) rotateZ(${angleZ}deg)`, transitionDuration: delay + 'ms' }">
                <div class="face face-1" data-id="1" :style="{ background: selectedNum === 1 ? '#E8B8FF' : '' }">
                    <div class="point point-middle point-center"></div>
                </div>
                <div class="face face-2" data-id="2" :style="{ background: selectedNum === 2 ? '#E8B8FF' : '' }">
                    <div class="point point-top point-right"></div>
                    <div class="point point-bottom point-left"></div>
                </div>
                <div class="face face-6" data-id="6" :style="{ background: selectedNum === 6 ? '#E8B8FF' : '' }">
                    <div class="point point-top point-right"></div>
                    <div class="point point-top point-left"></div>
                    <div class="point point-middle point-right"></div>
                    <div class="point point-middle point-left"></div>
                    <div class="point point-bottom point-right"></div>
                    <div class="point point-bottom point-left"></div>
                </div>
                <div class="face face-5" data-id="5" :style="{ background: selectedNum === 5 ? '#E8B8FF' : '' }">
                    <div class="point point-top point-right"></div>
                    <div class="point point-top point-left"></div>
                    <div class="point point-middle point-center"></div>
                    <div class="point point-bottom point-right"></div>
                    <div class="point point-bottom point-left"></div>
                </div>
                <div class="face face-3" data-id="3" :style="{ background: selectedNum === 3 ? '#E8B8FF' : '' }">
                    <div class="point point-top point-right"></div>
                    <div class="point point-middle point-center"></div>
                    <div class="point point-bottom point-left"></div>
                </div>
                <div class="face face-4" data-id="4" :style="{ background: selectedNum === 4 ? '#E8B8FF' : '' }">
                    <div class="point point-top point-right"></div>
                    <div class="point point-top point-left"></div>
                    <div class="point point-bottom point-right"></div>
                    <div class="point point-bottom point-left"></div>
                </div>
            </div>
        </div>
        <!-- <button class="roll-btn" @click="rollDice">ROLL</button> -->
    </div>
</template>


<style>
.parents {
    padding-top: 20px;
}

.dice-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    perspective: 1000px;
    perspective-origin: 50% 50%;
    width: 100%;
    aspect-ratio: 1;
    height: 100px;
}

.dice {
    /* @apply w-[65px] h-[65px] relative m-auto cursor-pointer; */
    position: relative;
    width: 65px;
    height: 65px;
    margin: auto;
    transform-style: preserve-3d;
    aspect-ratio: 1;
    transform-origin: 50% 50% calc(65px * -0.5);
    transform: rotateX(180deg) rotateY(180deg);
    transition: transform 2s ease-in-out;
}

.face {
    position: absolute;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border: 1px solid #24006D;
    color: #fff;
    border-radius: 5px;
    transform: rotateX(0deg) rotateY(180deg);
    transform-origin: 50% 50% calc(65px * -0.5);
    background: linear-gradient(90deg, #9440C7 0%, #6B38EC 48.23%, #77A3FA 100%);
}

/* .face:nth-child(1) {
    transform: rotateY(0deg);
    top: -4px;
}

.face:nth-child(2) {
    transform: rotateY(90deg);
    left: 4px;
}

.face:nth-child(3) {
    transform: rotateY(180deg);
    top: 4px;
}

.face:nth-child(4) {
    transform: rotateY(270deg);
    left: -4px;
}

.face:nth-child(5) {
    transform: rotateX(90deg);
    top: -4px;
}

.face:nth-child(6) {
    transform: rotateX(270deg);
    top: 4px;
} */
.face-1 {
    transform: rotateY(0deg);
    left: 0;
}

.face-6 {
    transform: rotateY(180deg);
    right: 0;
}

.face-5 {
    transform: rotateY(270deg);
    left: 0;
}

.face-3 {
    transform: rotateX(90deg);
    right: 0;
}

.face-2 {
    transform: rotateY(90deg);
    bottom: 0;
}

.face-4 {
    transform: rotateX(270deg);
    top: 0;
}

.point {
    position: absolute;
    width: 12px;
    aspect-ratio: 1;
    border-radius: 100%;
    background: #24006d;
}

.point-top {
    top: 10px;
}

.point-middle {
    top: calc((65px - 12px) / 2);
}

.point-bottom {
    bottom: 10px;
}

.point-left {
    left: 10px;
}

.point-center {
    left: calc((65px - 12px) / 2);
}

.point-right {
    right: 10px;
}

.roll-btn {
    padding: 10px 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bolder;
}
</style>
