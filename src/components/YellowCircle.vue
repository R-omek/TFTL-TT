<script setup lang="ts"></script>
<template>
  <svg
    class="circle"
    width="730"
    height="730"
    viewBox="0 0 730 730"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_0_40)">
      <circle cx="365" cy="365" r="289" fill="#FFCB46" />
    </g>
    <defs>
      <filter
        id="filter0_f_0_40"
        x="0"
        y="0"
        width="730"
        height="730"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="38"
          result="effect1_foregroundBlur_0_40"
        />
      </filter>
    </defs>
  </svg>
</template>
<style scoped lang="scss">
.circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
}
</style>
