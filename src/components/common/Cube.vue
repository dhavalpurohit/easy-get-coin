<script setup lang="ts">
import { ref } from 'vue';

const angleArray: number[][] = [
    [0, 0, 0],
    [-310, -362, -38],
    [-400, -320, -2],
    [135, -217, -88],
    [-224, -317, 5],
    [-47, -219, -81],
    [-133, -360, -53]
];
const cube = ref<HTMLElement | null>(null);
const selectedNum = ref(0);
const rollDice = (): void => {
    console.log("parent call")
    if (cube.value) {
        cube.value.style.animation = 'animate 2s linear';

        const randomAngle = Math.floor(Math.random() * 6) + 1;
        cube.value.style.transform = `rotateX(${angleArray[randomAngle][0]}deg) rotateY(${angleArray[randomAngle][1]}deg) rotateZ(${angleArray[randomAngle][2]}deg)`;
        cube.value.style.transition = '2s linear';

        cube.value.addEventListener('animationend', () => {
            if (cube.value) {
                selectedNum.value = randomAngle
                console.log("randomAngle", selectedNum.value)
                console.log("cube", cube.value)
                cube.value.style.animation = '';
            }
        });
    }
}

defineExpose({
    rollDice
})
</script>
<template>
    <div class="containers">
        <div class="cube" ref="cube" @click="rollDice">
            <!-- Your cube faces here -->
            <div class="front" :style="{ background: selectedNum === 1 ? '#E8B8FF' : '' }">
                <span></span>
            </div>
            <div class="back" :style="{ background: selectedNum === 6 ? '#E8B8FF' : '' }">
                <!-- i use pre tag to align dots -->
                <pre class="firstPre"><span></span>   <span></span>    <span></span></pre>
                <br>
                <pre class="secondPre"><span></span>   <span></span>    <span></span></pre>
            </div>
            <div class="top" :style="{ background: selectedNum === 2 ? '#E8B8FF' : '' }">
                <span></span>
                <span></span>
            </div>
            <div class=" left" :style="{ background: selectedNum === 3 ? '#E8B8FF' : '' }">
                <span></span>
                <span></span>
                <span></span>

            </div>
            <div class="right" :style="{ background: selectedNum === 5 ? '#E8B8FF' : '' }">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="bottom" :style="{ background: selectedNum === 4 ? '#E8B8FF' : '' }">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>
<style>
.containers {
    perspective: 1000px;
    perspective-origin: 50% 50%;
    height: 300px;
    width: 100%;
    /* font-family: 'fontawesome';
    height: 100vh; */
}

.containers .cube {
    position: absolute;
    inset: 0;
    margin: auto;
    height: 65px;
    width: 65px;
    transform-style: preserve-3d;
    cursor: pointer;
    transform: rotateX(135deg) rotateY(-217deg) rotateZ(-88deg);
}

.containers .cube div {
    position: absolute;
    box-sizing: border-box;
    padding: 1px;
    height: 100%;
    width: 100%;
    border: 1px solid #24006D;
    color: #fff;
    border-radius: 5px;
}

.containers .cube div span {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #24006D;
}

.containers .cube .front {
    background: linear-gradient(90deg, #9440C7 0%, #6B38EC 48.23%, #77A3FA 100%);
    transform: translateZ(-34px);
    left: 0;
}

.containers .cube .back {
    background: linear-gradient(90deg, #9440C7 0%, #6B38EC 48.23%, #77A3FA 100%);
    transform: translateZ(-100px) rotateY(180deg);
    right: 4px;
}

.containers .cube .right {
    background: linear-gradient(90deg, #9440C7 0%, #6B38EC 48.23%, #77A3FA 100%);
    transform-origin: top right;
    transform: rotateY(-270deg) translateX(100px);
    left: 4px;
}

.containers .cube .left {
    background: linear-gradient(90deg, #9440C7 0%, #6B38EC 48.23%, #77A3FA 100%);
    transform-origin: center left;
    transform: rotateY(270deg) translateX(-100px);
    right: 4px;
}

.containers .cube .top {
    background: linear-gradient(90deg, #9440C7 0%, #6B38EC 48.23%, #77A3FA 100%);
    transform-origin: top center;
    transform: rotateX(-270deg) translateY(-100px);
    bottom: 4px;
}

.containers .cube .bottom {
    background: linear-gradient(90deg, #9440C7 0%, #6B38EC 48.23%, #77A3FA 100%);
    transform-origin: bottom center;
    transform: rotateX(270deg) translateY(100px);
    top: 4px;
}

/*DOT ALIGNMENT */
.containers .cube .front span,
.containers .cube .left span:nth-child(1),
.containers .cube .right span:nth-child(1) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.containers .cube .top span:nth-child(1),
.containers .cube .left span:nth-child(2),
.containers .cube .right span:nth-child(2),
.containers .cube .bottom span:nth-child(1) {
    position: absolute;
    top: 35px;
    left: 35px;
}

.containers .cube .top span:nth-child(2),
.containers .cube .left span:nth-child(3),
.containers .cube .right span:nth-child(3),
.containers .cube .bottom span:nth-child(2) {
    position: absolute;
    bottom: 35px;
    right: 35px;
}

.containers .cube .right span:nth-child(4),
.containers .cube .bottom span:nth-child(3) {
    position: absolute;
    top: 35px;
    right: 35px;
}

.containers .cube .right span:nth-child(5),
.containers .cube .bottom span:nth-child(4) {
    position: absolute;
    bottom: 35px;
    left: 35px;
}

.containers .cube .back pre {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #24006D;
    margin: 0;
}

.containers .cube .back .firstPre {
    position: absolute;
    top: 45px;
    left: 26px;
}

.containers .cube .back .secondPre {
    position: absolute;
    bottom: 45px;
    right: 26px;
}

@keyframes animate {
    25% {
        transform: rotateX(45deg) rotateY(65deg) rotateZ(35deg);
        top: 0%;
    }

    50% {
        transform: rotateX(145deg) rotateY(165deg) rotateZ(135deg);
        top: 30%;
    }

    75% {
        transform: rotateX(276deg) rotateY(256deg) rotateZ(246deg);
        top: 45%;
    }

    100% {
        transform: rotateX(376deg) rotateY(356deg) rotateZ(346deg);
        top: 60%;
    }
}
</style>