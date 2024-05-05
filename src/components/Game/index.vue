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
    if (cube.value) {
        cube.value.style.animation = 'animate 1s linear';

        const randomAngle = Math.floor(Math.random() * 6) + 1;
        cube.value.style.transform = `rotateX(${angleArray[randomAngle][0]}deg) rotateY(${angleArray[randomAngle][1]}deg) rotateZ(${angleArray[randomAngle][2]}deg)`;
        cube.value.style.transition = '1s linear';

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
</script>
<template>
    <div class="greetings">
        <div class="justify-center flex items-center h-screen">
            <div class="text-4xl text-white">
                <div class="containers">
                    <div class="cube" ref="cube" @click="rollDice">
                        <!-- Your cube faces here -->
                        <div class="front">
                            <img src="/src/assets/images/dice/dice1.png" alt="">
                        </div>
                        <div class="back">
                            <!-- i use pre tag to align dots -->
                            <img src="/src/assets/images/dice/dice6.png" alt="">
                        </div>
                        <div class="top">
                            <img src="/src/assets/images/dice/dice2.png" alt="">
                        </div>
                        <div class=" left">
                            <img src="/src/assets/images/dice/dice3.png" alt="">

                        </div>
                        <div class="right">
                            <img src="/src/assets/images/dice/dice5.png" alt="">
                        </div>
                        <div class="bottom">
                            <img src="/src/assets/images/dice/dice4.png" alt="">
                        </div>
                    </div>
                    <!-- <div class="cube" ref="cube" @click="rollDice">
                        <img src="/src/assets/images/dice/dice1.png" alt="" class="front">
                        <img src="/src/assets/images/dice/dice2.png" alt="" class="back">
                        <img src="/src/assets/images/dice/dice3.png" alt="" class="top">
                        <img src="/src/assets/images/dice/dice4.png" alt="" class="left">
                        <img src="/src/assets/images/dice/dice5.png" alt="" class="right">
                        <img src="/src/assets/images/dice/dice6.png" alt="" class="bottom">
                    </div> -->
                    <!-- <img v-if="selectedNum === 0" src="/src/assets/images/dice/dice_roll_1.png" alt="" > -->
                    <!-- <img v-if="selectedNum === 1" src="/src/assets/images/dice/dice_roll_1.png" alt="" class="finalCube"
                        ref="cube" @click="rollDice">
                    <img v-if="selectedNum === 2" src="/src/assets/images/dice/dice_roll_2.png" alt="" class="finalCube"
                        ref="cube" @click="rollDice">
                    <img v-if="selectedNum === 3" src="/src/assets/images/dice/dice_roll_3.png" alt="" class="finalCube"
                        ref="cube" @click="rollDice">
                    <img v-if="selectedNum === 4" src="/src/assets/images/dice/dice_roll_4.png" alt="" class="finalCube"
                        ref="cube" @click="rollDice">
                    <img v-if="selectedNum === 5" src="/src/assets/images/dice/dice_roll_5.png" alt="" class="finalCube"
                        ref="cube" @click="rollDice">
                    <img v-if="selectedNum === 6" src="/src/assets/images/dice/dice_roll_6.png" alt="" class="finalCube"
                        ref="cube" @click="rollDice"> -->

                </div>
            </div>
        </div>
    </div>
</template>

<!-- <style>
.containers {
    perspective: 1000px;
    perspective-origin: 50% 50%;
    width: 300px;
    /* height: 100vh; */
}

.containers .cube {
    position: absolute;
    inset: 0;
    height: 65px;
    width: 65px;
    transform-style: preserve-3d;
    cursor: pointer;
    transform: rotateX(135deg) rotateY(-217deg) rotateZ(-88deg);
}

.finalCube {
    position: absolute;
    inset: 0;
    height: auto;
    width: 65px;
    cursor: pointer;
    transform: none;
    margin: auto;
}

.containers .cube div {
    position: absolute;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border-radius: 5px;
}

.containers .cube div img {
    width: 100%;
    height: 100%;
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
        top: -30%;
    }

    75% {
        transform: rotateX(276deg) rotateY(256deg) rotateZ(246deg);
        top: -45%;
    }

    100% {
        transform: rotateX(376deg) rotateY(356deg) rotateZ(346deg);
        top: -60%;
    }
}
</style> -->
