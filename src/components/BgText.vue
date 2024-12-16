<script setup lang="ts"></script>

<template>
  <div class="text-wrapper">
    <img class="text text__1" src="@/assets/images/bg-text-1.svg" alt="#">
    <img class="text text__1 copy" src="@/assets/images/bg-text-1.svg" alt="#">
    <img class="text text__2" src="@/assets/images/bg-text-2.svg" alt="#">
    <img class="text text__2 copy" src="@/assets/images/bg-text-2.svg" alt="#">
  </div>
</template>

<style scoped lang="scss">

.text {
  position: absolute;
  top: 50%;
  z-index: 1;
  animation-duration: 50s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 0;

  &__1 {
    transform: rotate(-31deg) translateY(-838%) translateX(-101%);
    animation-name: moveRightUp;
  }

  &__2 {
    transform: rotate(-31deg) translateY(-638%) translateX(101%);
    animation-name: moveLeftDown;
  }

  &.copy {
    animation-delay: 25s; 
  }
}

@keyframes moveRightUp {
  0% {
    transform: rotate(-31deg) translateY(-838%) translateX(-101%);
  }
  100% {
    transform: rotate(-31deg) translateY(-838%) translateX(101%);
  }
}

@keyframes moveLeftDown {
  0% {
    transform: rotate(-31deg) translateY(-638%) translateX(101%);
  }
  100% {
    transform: rotate(-31deg) translateY(-638%) translateX(-101%);
  }
}
</style>
