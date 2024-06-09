<script setup lang="ts">
import { ref } from 'vue';

const angleX = ref(0);
const angleY = ref(0);
const angleZ = ref(45);
const angle2X = ref(0);
const angle2Y = ref(0);
const angle2Z = ref(45);

const result = ref(1);
const result2 = ref(1);

const cube = ref<HTMLElement | null>(null);
const cube2 = ref<HTMLElement | null>(null);

const selectedNum = ref(0);
const selectedNum2 = ref(0);

const delay = ref(0);
// const delay2 = ref(0);
const canRoll = ref(true);
const rollMax = ref(50);

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}
function getRandomInt2(max: number): number {
    return Math.floor(Math.random() * max);
}

function rollDice() {
    selectedNum.value = 0
    selectedNum2.value = 0

    canRoll.value = false;
    const xTurn = 4 + getRandomInt(rollMax.value);
    const yTurn = 4 + getRandomInt(rollMax.value);

    const xTurn2 = 4 + getRandomInt2(rollMax.value);
    const yTurn2 = 4 + getRandomInt2(rollMax.value);

    delay.value = Math.max(xTurn, yTurn) * 50;
    angleX.value += 90 * xTurn;
    angleY.value += 90 * yTurn;

    angle2X.value += 90 * xTurn2;
    angle2Y.value += 90 * yTurn2;

    if (angleX.value % 180) {
        getRandomInt(3) > 1 && (angleX.value += 90)
    }

    if (angle2X.value % 180) {
        getRandomInt2(3) > 1 && (angle2X.value += 90)
    }
    if (cube.value) {
        cube.value.style.transform = "rotateX(" + angleX.value + "deg) rotateY(" + angleY.value + "deg)"
        cube.value.style.transitionDuration = delay.value + 'ms'
    }

    if (cube2.value) {
        cube2.value.style.transform = "rotateX(" + angle2X.value + "deg) rotateY(" + angle2Y.value + "deg)"
        cube2.value.style.transitionDuration = delay.value + 'ms'
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

    let x2 = angle2X.value % 360,
        y2 = angle2Y.value % 360
    if (x2 === 0 || x2 === 180) {
        switch ((x2 + y2) % 360) {
            case 0: result2.value = 1
                break
            case 90: result2.value = 5
                break
            case 180: result2.value = 6
                break
            case 270: result2.value = 2
                break
            default:
                console.error(123456);
        }
    }
    else if (x2 === 90) {
        result2.value = 4
    }
    else if (x2 === 270) {
        result2.value = 3
    }
    setTimeout(() => { canRoll.value = true, selectedNum.value = result.value }, delay.value)
    setTimeout(() => { canRoll.value = true, selectedNum2.value = result2.value }, delay.value)

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
    // rotate Z
    switch (result2.value) {
        case 0: angle2Z.value = 45
            break
        case 1: angle2Z.value = 45
            break
        default:
            angle2Z.value = 0;
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
        <div class="dice-container">
            <div ref="dice2" class="dice"
                :style="{ transform: `rotateX(${angle2X + 50}deg) rotateY(${angle2Y}deg) rotateZ(${angle2Z}deg)`, transitionDuration: delay + 'ms' }">
                <div class="face face-1" data-id="1" :style="{ background: selectedNum2 === 1 ? '#E8B8FF' : '' }">
                    <div class="point point-middle point-center"></div>
                </div>
                <div class="face face-2" data-id="2" :style="{ background: selectedNum2 === 2 ? '#E8B8FF' : '' }">
                    <div class="point point-top point-right"></div>
                    <div class="point point-bottom point-left"></div>
                </div>
                <div class="face face-6" data-id="6" :style="{ background: selectedNum2 === 6 ? '#E8B8FF' : '' }">
                    <div class="point point-top point-right"></div>
                    <div class="point point-top point-left"></div>
                    <div class="point point-middle point-right"></div>
                    <div class="point point-middle point-left"></div>
                    <div class="point point-bottom point-right"></div>
                    <div class="point point-bottom point-left"></div>
                </div>
                <div class="face face-5" data-id="5" :style="{ background: selectedNum2 === 5 ? '#E8B8FF' : '' }">
                    <div class="point point-top point-right"></div>
                    <div class="point point-top point-left"></div>
                    <div class="point point-middle point-center"></div>
                    <div class="point point-bottom point-right"></div>
                    <div class="point point-bottom point-left"></div>
                </div>
                <div class="face face-3" data-id="3" :style="{ background: selectedNum2 === 3 ? '#E8B8FF' : '' }">
                    <div class="point point-top point-right"></div>
                    <div class="point point-middle point-center"></div>
                    <div class="point point-bottom point-left"></div>
                </div>
                <div class="face face-4" data-id="4" :style="{ background: selectedNum2 === 4 ? '#E8B8FF' : '' }">
                    <div class="point point-top point-right"></div>
                    <div class="point point-top point-left"></div>
                    <div class="point point-bottom point-right"></div>
                    <div class="point point-bottom point-left"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.parents {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 20px;
}

.dice-container {
    perspective: 1000px;
    perspective-origin: 50% 50%;
    aspect-ratio: 1;
    height: 100px;
}

.dice {
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
