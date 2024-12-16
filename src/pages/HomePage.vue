<script setup lang='ts'>
import BgText from '@/components/BgText.vue';
import LangFlags from '@/components/LangFlags.vue';
import LogoElement from '@/components/LogoElement.vue';
import MainTitle from '@/components/MainTitle.vue';
import RotatedText from '@/components/RotatedText.vue';
import WhatLink from '@/components/WhatLink.vue';
import WhereLink from '@/components/WhereLink.vue';
import WhoLink from '@/components/WhoLink.vue';
import YellowCircle from '@/components/YellowCircle.vue';

</script>
<template>
    <div class="home-page">
        <BgText />
        <YellowCircle />
        <RotatedText />
        <div class="home-page__content">
            <header class="flex">
                <LangFlags />
                <LogoElement class="w-full" />
            </header>
            <main class="flex-grow-1 flex flex-column justify-content-center">
                <MainTitle />
                <WhereLink />
                <WhatLink />
            </main>
            <footer class="flex justify-content-center">
                <WhoLink />
            </footer>
        </div>
    </div>
</template>
<style scoped lang='scss'>
    .home-page {
        background: #bebebe;
        position: relative;
        overflow: hidden;
        user-select: none;
        
        &__content {
            position: relative;
            width: calc(100vw - 38px);
            height: calc(100vh - 43px);
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 24px 19px 19px 19px;
        }
    }
</style>