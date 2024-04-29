<script setup lang="ts">
import { ref } from 'vue';
// import DiceRoll1 from '../../assets/images/dice/dice_roll_1.png';
// import DiceRoll2 from '../../assets/images/dice/dice_roll_2.png';
// import DiceRoll3 from '../../assets/images/dice/dice_roll_3.png';
// import DiceRoll4 from '../../assets/images/dice/dice_roll_4.png';
// import DiceRoll5 from '../../assets/images/dice/dice_roll_5.png';
// import DiceRoll6 from '../../assets/images/dice/dice_roll_6.png';

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
        cube.value.style.animation = 'animate 1.4s linear';

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
                <div class="container">
                    <div class="cube" ref="cube" @click="rollDice">
                        <!-- Your cube faces here -->
                        <div class="front" :class="{ '!bg-red-500': selectedNum == 1 }">
                            1
                        </div>
                        <div class="back" :class="{ '!bg-green-500': selectedNum == 6 }">
                            <!-- i use pre tag to align dots -->
                            <pre class="firstPre">1    1    1</pre>
                            <br>
                            <pre class="secondPre">1    1    1</pre>
                        </div>
                        <div class="top" :class="{ '!bg-blue-500': selectedNum == 2 }">
                            1
                            1
                        </div>
                        <div class="left" :class="{ '!bg-gray-500': selectedNum == 3 }">
                            1
                            1
                            1

                        </div>
                        <div class="right" :class="{ '!bg-pink-500': selectedNum == 5 }">
                            1
                            1
                            1
                            1
                            1

                        </div>
                        <div class="bottom" :class="{ '!bg-yellow-500': selectedNum == 4 }">
                            1
                            1
                            1
                            1

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.container {
    perspective: 1000px;
    perspective-origin: 50% 50%;
    /* font-family: 'fontawesome';
    height: 100vh; */
}

.container .cube {
    position: relative;
    left: 45%;
    top: 40%;
    height: 200px;
    width: 200px;
    transform-style: preserve-3d;
    cursor: pointer;
    transform: rotateX(135deg) rotateY(-217deg) rotateZ(-88deg);
}

.container .cube div {
    position: absolute;
    box-sizing: border-box;
    padding: 10px;
    height: 100%;
    width: 100%;
    border: 2px solid #eee;
    color: #fff;
}

.container .cube div span {
    font-size: 32px;
    font-family: 'fontawesome';
}

.container .cube .front {
    background: #3B2545;
    transform: translateZ(100px);
}

.container .cube .back {
    background: #3B2545;
    transform: translateZ(-100px) rotateY(180deg);
}

.container .cube .right {
    background: #3B2545;
    transform-origin: top right;
    transform: rotateY(-270deg) translateX(100px);
}

.container .cube .left {
    background: #3B2545;
    transform-origin: center left;
    transform: rotateY(270deg) translateX(-100px);
}

.container .cube .top {
    background: #3B2545;
    transform-origin: top center;
    transform: rotateX(-270deg) translateY(-100px);
}

.container .cube .bottom {
    background: #3B2545;
    transform-origin: bottom center;
    transform: rotateX(270deg) translateY(100px);
}

/*DOT ALIGNMENT */
.container .cube .front span,
.container .cube .left span:nth-child(1),
.container .cube .right span:nth-child(1) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.container .cube .top span:nth-child(1),
.container .cube .left span:nth-child(2),
.container .cube .right span:nth-child(2),
.container .cube .bottom span:nth-child(1) {
    position: absolute;
    top: 35px;
    left: 35px;
}

.container .cube .top span:nth-child(2),
.container .cube .left span:nth-child(3),
.container .cube .right span:nth-child(3),
.container .cube .bottom span:nth-child(2) {
    position: absolute;
    bottom: 35px;
    right: 35px;
}

.container .cube .right span:nth-child(4),
.container .cube .bottom span:nth-child(3) {
    position: absolute;
    top: 35px;
    right: 35px;
}

.container .cube .right span:nth-child(5),
.container .cube .bottom span:nth-child(4) {
    position: absolute;
    bottom: 35px;
    left: 35px;
}

.container .cube .back pre {
    font-size: 32px;
    font-family: 'fontawesome';
    margin: 0;
}

.container .cube .back .firstPre {
    position: absolute;
    top: 45px;
    left: 26px;
}

.container .cube .back .secondPre {
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