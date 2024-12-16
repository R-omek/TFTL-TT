<script setup lang='ts'>
</script>
<template>
    <div class="where">
        <RouterLink class="where__link" :to="{name: 'some-page'}">where?</RouterLink>
    </div>
</template>
<style scoped lang='scss'>
.where {
    position: absolute;
    display: flex;
    justify-content: start;
    align-items: start;

    @media (max-width: 575px) {
        display: none;
    }

    &__link {
        display: inline-block;
        transform: rotate(-90deg) translateY(-200%);
    }
}
</style>