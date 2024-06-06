<script setup lang="ts">
import { ref } from 'vue';

const angleX = ref(0);
const angleY = ref(0);
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
                :style="{ transform: `rotateX(${angleX}deg) rotateY(${angleY}deg)`, transitionDuration: delay + 'ms' }">
                <div class="face" data-id="1" :style="{ background: selectedNum === 1 ? '#E8B8FF' : '' }">
                    <div class="point point-middle point-center"></div>
                </div>
                <div class="face" data-id="2" :style="{ background: selectedNum === 2 ? '#E8B8FF' : '' }">
                    <div class="point point-top point-right"></div>
                    <div class="point point-bottom point-left"></div>
                </div>
                <div class="face" data-id="6" :style="{ background: selectedNum === 6 ? '#E8B8FF' : '' }">
                    <div class="point point-top point-right"></div>
                    <div class="point point-top point-left"></div>
                    <div class="point point-middle point-right"></div>
                    <div class="point point-middle point-left"></div>
                    <div class="point point-bottom point-right"></div>
                    <div class="point point-bottom point-left"></div>
                </div>
                <div class="face" data-id="5" :style="{ background: selectedNum === 5 ? '#E8B8FF' : '' }">
                    <div class="point point-top point-right"></div>
                    <div class="point point-top point-left"></div>
                    <div class="point point-middle point-center"></div>
                    <div class="point point-bottom point-right"></div>
                    <div class="point point-bottom point-left"></div>
                </div>
                <div class="face" data-id="3" :style="{ background: selectedNum === 3 ? '#E8B8FF' : '' }">
                    <div class="point point-top point-right"></div>
                    <div class="point point-middle point-center"></div>
                    <div class="point point-bottom point-left"></div>
                </div>
                <div class="face" data-id="4" :style="{ background: selectedNum === 4 ? '#E8B8FF' : '' }">
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 20px;
}

.dice-container {
    perspective: 1000px;
    perspective-origin: 50% 50%;
    width: 90px;
    aspect-ratio: 1;
    cursor: pointer;
    border-radius: 10px;
}

.dice {
    position: relative;
    width: 90px;
    aspect-ratio: 1;
    border-radius: 10px;
    transform-style: preserve-3d;
    transform-origin: 50% 50% calc(90px * -0.5);
    transform: rotateX(180deg) rotateY(180deg);
    transition: transform 2s ease-in-out;
}

.face {
    position: absolute;
    background: linear-gradient(90deg, #9440C7 0%, #6B38EC 48.23%, #77A3FA 100%);
    width: 90px;
    aspect-ratio: 1;
    border-radius: 10px;
    transform: rotateX(0deg) rotateY(180deg);
    transform-origin: 50% 50% calc(90px * -0.5);
}

.face:nth-child(1) {
    transform: rotateY(0deg);
}

.face:nth-child(2) {
    transform: rotateY(90deg);
}

.face:nth-child(3) {
    transform: rotateY(180deg);
}

.face:nth-child(4) {
    transform: rotateY(270deg);
}

.face:nth-child(5) {
    transform: rotateX(90deg);
}

.face:nth-child(6) {
    transform: rotateX(270deg);
}

.point {
    position: absolute;
    width: 12px;
    aspect-ratio: 1;
    border-radius: 100%;
    background: #24006d;
}

.point-top {
    top: 2vmin;
}

.point-middle {
    top: calc((90px - 12px) / 2);
}

.point-bottom {
    bottom: 2vmin;
}

.point-left {
    left: 2vmin;
}

.point-center {
    left: calc((90px - 12px) / 2);
}

.point-right {
    right: 2vmin;
}

.roll-btn {
    padding: 2vmin 2vmin;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bolder;
}
</style>
