<script setup lang='ts'>
</script>
<template>
    <div class="what">
        <RouterLink class="what__link" :to="{name: 'some-page'}">what?</RouterLink>
    </div>
</template>
<style scoped lang='scss'>
.what {
    position: absolute;
    right: 19px;
    display: flex;
    justify-content: start;
    align-items: start;

    @media (max-width: 575px) {
        display: none;
    }

    &__link {
        display: inline-block;
        transform: rotate(90deg) translateY(-150%);
    }
}
</style>