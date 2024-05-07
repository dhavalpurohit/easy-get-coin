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
const angleArray2: number[][] = [
    [0, 0, 0],
    [-310, -362, -38],
    [-400, -320, -2],
    [135, -217, -88],
    [-224, -317, 5],
    [-47, -219, -81],
    [-133, -360, -53]
];

const cube = ref<HTMLElement | null>(null);
const cube2 = ref<HTMLElement | null>(null);

const selectedNum = ref(0);
const selectedNum2 = ref(0);

const rollDice = (): void => {
    selectedNum.value = 0
    selectedNum2.value = 0

    if (cube.value && cube2.value) {
        cube.value.style.animation = 'animate 1s linear';
        cube2.value.style.animation = 'animate 1s linear';

        const randomAngle = Math.floor(Math.random() * 6) + 1;
        const randomAngle2 = Math.floor(Math.random() * 6) + 1;

        cube.value.style.transform = `rotateX(${angleArray[randomAngle][0]}deg) rotateY(${angleArray[randomAngle][1]}deg) rotateZ(${angleArray[randomAngle][2]}deg)`;
        cube.value.style.transition = '1s linear';

        cube2.value.style.transform = `rotateX(${angleArray2[randomAngle2][0]}deg) rotateY(${angleArray2[randomAngle2][1]}deg) rotateZ(${angleArray2[randomAngle2][2]}deg)`;
        cube2.value.style.transition = '1s linear';

        cube.value.addEventListener('animationend', () => {
            if (cube.value) {
                cube.value.style.animation = '';
            }
        });

        cube2.value.addEventListener('animationend', () => {
            if (cube2.value) {
                cube2.value.style.animation = '';
            }
        });

        setTimeout(() => {
            selectedNum.value = randomAngle
            selectedNum2.value = randomAngle2
        }, 1000);

    }

}

defineExpose({
    rollDice
})
</script>
<template>
    <div class="containers h-[200px] sm:h-[300px]">
        <div class="cube" ref="cube">
            <!-- Your cube faces here -->
            <div class="front" :style="{ background: selectedNum === 1 ? '#E8B8FF' : '' }">
                <span></span>
            </div>
            <div class="back" :style="{ background: selectedNum === 6 ? '#E8B8FF' : '' }">
                <!-- i use pre tag to align dots -->
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
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
        <div class="cube !left-[200px]" ref="cube2">
            <!-- Your cube faces here -->
            <div class="front" :style="{ background: selectedNum2 === 1 ? '#E8B8FF' : '' }">
                <span></span>
            </div>
            <div class="back" :style="{ background: selectedNum2 === 6 ? '#E8B8FF' : '' }">
                <!-- i use pre tag to align dots -->
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <!-- <pre class="firstPre"><span></span>   <span></span>    <span></span></pre>
                <br>
                <pre class="secondPre"><span></span>   <span></span>    <span></span></pre> -->
            </div>
            <div class="top" :style="{ background: selectedNum2 === 2 ? '#E8B8FF' : '' }">
                <span></span>
                <span></span>
            </div>
            <div class=" left" :style="{ background: selectedNum2 === 3 ? '#E8B8FF' : '' }">
                <span></span>
                <span></span>
                <span></span>

            </div>
            <div class="right" :style="{ background: selectedNum2 === 5 ? '#E8B8FF' : '' }">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="bottom" :style="{ background: selectedNum2 === 4 ? '#E8B8FF' : '' }">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.containers {
    perspective: 1000px;
    perspective-origin: 50% 50%;
    width: 100%;
    /* font-family: 'fontawesome';
    height: 100vh; */
}

.containers .cube {
    @apply w-[65px] h-[65px] absolute inset-0 m-auto cursor-pointer;
    transform-style: preserve-3d;
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
    right: 2px;
}

.containers .cube .right {
    background: linear-gradient(90deg, #9440C7 0%, #6B38EC 48.23%, #77A3FA 100%);
    transform-origin: top right;
    transform: rotateY(-270deg) translateX(100px);
    left: 2px;
}

.containers .cube .left {
    background: linear-gradient(90deg, #9440C7 0%, #6B38EC 48.23%, #77A3FA 100%);
    transform-origin: center left;
    transform: rotateY(270deg) translateX(-100px);
    right: 2px;
}

.containers .cube .top {
    background: linear-gradient(90deg, #9440C7 0%, #6B38EC 48.23%, #77A3FA 100%);
    transform-origin: top center;
    transform: rotateX(-270deg) translateY(-100px);
    bottom: 2px;
}

.containers .cube .bottom {
    background: linear-gradient(90deg, #9440C7 0%, #6B38EC 48.23%, #77A3FA 100%);
    transform-origin: bottom center;
    transform: rotateX(270deg) translateY(100px);
    top: 2px;
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

/* .containers .cube .back pre {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #24006D;
    margin: 0;
} */

.containers .cube .back span {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #24006D;
}

.containers .cube .back span:nth-child(1) {
    position: absolute;
    bottom: 40px;
    left: 35px;
}

.containers .cube .back span:nth-child(2) {
    position: absolute;
    bottom: 25px;
    left: 35px;
}

.containers .cube .back span:nth-child(3) {
    position: absolute;
    bottom: 10px;
    left: 35px;
}

.containers .cube .back span:nth-child(4) {
    position: absolute;
    top: 11px;
    left: 20px;
}

.containers .cube .back span:nth-child(5) {
    position: absolute;
    bottom: 25px;
    left: 20px;
}


.containers .cube .back span:nth-child(6) {
    position: absolute;
    bottom: 10px;
    left: 20px;
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

/* media query */
@media (max-width:640px) {
    .containers .cube {
        @apply w-[40px] h-[40px];
    }

    .containers .cube div span {
        width: 6px !important;
        height: 6px !important;
    }

    .containers .cube .front {
        transform: translateZ(-60px);
    }

    .containers .cube .top span:nth-child(1),
    .containers .cube .left span:nth-child(2),
    .containers .cube .right span:nth-child(2),
    .containers .cube .bottom span:nth-child(1) {
        top: 6px;
        left: 6px;
    }

    .containers .cube .top span:nth-child(2),
    .containers .cube .left span:nth-child(3),
    .containers .cube .right span:nth-child(3),
    .containers .cube .bottom span:nth-child(2) {
        top: 25px;
        left: 25px;
    }

    .containers .cube .right span:nth-child(4),
    .containers .cube .bottom span:nth-child(3) {
        top: 25px;
        right: 25px;
    }

    .containers .cube .right span:nth-child(5),
    .containers .cube .bottom span:nth-child(4) {
        bottom: 24px;
        left: 24px;
    }

    .containers .cube .back span:nth-child(6) {
        bottom: 8px;
        left: 8px;
    }

    .containers .cube .back span:nth-child(3) {
        bottom: 8px;
        left: 19px;
    }

    .containers .cube .back span:nth-child(4) {
        top: 12px;
        left: 6px;
    }

    .containers .cube .back span:nth-child(5) {
        bottom: 19px;
        left: 17px;
    }

    .containers .cube .back span:nth-child(1) {
        bottom: 18px;
        left: 28px;
    }

    .containers .cube .back span:nth-child(2) {
        bottom: 8px;
        left: 29px;
    }

}

@keyframes animate {
    25% {
        transform: rotateX(45deg) rotateY(65deg) rotateZ(35deg);
        top: -0%;
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
</style>