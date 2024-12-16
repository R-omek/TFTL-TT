<script setup lang='ts'>
</script>

<template>
    <div class="flex gap-3 align-items-center absolute">
        <img class="lang-img" src="@/assets/images/lang.png" alt="#">
        <span class="cursor-pointer lang-item lang-item__1">EN</span>
        <span class="cursor-pointer lang-item lang-item__2">UA</span>
    </div>
</template>

<style scoped lang='scss'>
    .lang-img {
        max-width: 38px;
        max-height: 38px;

        &:hover ~ .lang-item {
            opacity: 1;

            &__1 {
                transition-delay: 0.2s;
            }

            &__2 {
                transition-delay: 0.5s;
            }
        }
    }

    .lang-item {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
</style>
