<script setup lang="ts">
import { ref } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
const offset = ref({ x: 0, y: 0 });

const onMouseMove = (event: MouseEvent) => {
  offset.value.x = (event.clientX / width.value) * 10 - 5;
  offset.value.y = (event.clientY / window.innerHeight) * 10 - 5;
};

window.addEventListener("mousemove", onMouseMove);
</script>

<template>
  <h1
    class="main-title flex align-items-center justify-content-center h-full text-center"
    :style="{ transform: `translate(${offset.x}px, ${offset.y}px)` }"
  >
    FULL-CYCLE <br />
    EVENT <br v-if="width < 768" />
    AGENCY
  </h1>
</template>

<style scoped lang="scss">
.main-title {
  font-size: clamp(212.5%, 6vw, 512.5%);
  font-weight: bold;
  transition: transform 0.1s ease-out;
}
</style>
