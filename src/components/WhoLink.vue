<script setup lang='ts'>
</script>
<template>
    <RouterLink class="who__link text-center" :to="{name: 'some-page'}">who?</RouterLink>
</template>
<style scoped lang='scss'>
.who__link {
    @media (max-width: 575px) {
        display: none;
    }
}
</style>