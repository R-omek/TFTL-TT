<template>
  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <div class="overlay"></div>
</template>

<script setup></script>

<style scoped>
#app {
  position: relative;
  overflow: hidden;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fcbf49;
  z-index: 9999;
  transform: translateX(-100%);
  transition: transform 0.4s ease;
  opacity: 0;
}

.overlay.active {
  transform: translateX(0);
  opacity: 1;
}

.overlay.active.hide {
  transform: translateX(100%);
  opacity: 1;
}
</style>
