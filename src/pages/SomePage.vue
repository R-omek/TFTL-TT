<script setup lang='ts'>
</script>
<template>
    <div class="some-page flex align-items-center justify-content-center h-screen" style="background: #bebebe;">
        <RouterLink class="some-page__link" :to="{path: '/'}">Back</RouterLink>
        <h2>Some page</h2>
    </div>
</template>
<style scoped lang='scss'>
.some-page {

    &__link {
        position: absolute;
        left: 20px;
        top: 20px;
    }
}
</style>