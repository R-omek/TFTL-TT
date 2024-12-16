<script setup lang='ts'>
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
</script>
<template>
    <h1 class="main-title flex align-items-center justify-content-center h-full text-center">FULL-CYCLE <br> EVENT <br v-if="width < 768"> AGENCY
    </h1>
</template>
<style scoped lang='scss'>
.main-title {
    font-size: clamp(212.5% ,6vw , 512.5%);
    font-weight: bold;
}
</style>