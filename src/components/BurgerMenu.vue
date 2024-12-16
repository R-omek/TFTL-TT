<script setup lang='ts'>
</script>
<template>
    <div class="burger">
        <input class="hidden" id="burgerInput" type="checkbox">
        <label for="burgerInput">
            <svg class="burger__icon" width="22" height="10" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect class="line-1" width="22" height="1" fill="black" />
                <rect class="line-2" y="9" width="22" height="1" fill="black" />
            </svg>
        </label>
        <nav class="nav">
            <ul class="burger__menu-list">
                <li class="burger__menu-item">
                    <RouterLink class="burger__link" :to="{name: 'some-page'}">Where?</RouterLink>
                </li>
                <li class="burger__menu-item">
                    <RouterLink class="burger__link" :to="{name: 'some-page'}">What?</RouterLink>
                </li>
                <li>
                    <RouterLink class="burger__link" :to="{name: 'some-page'}">Who?</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style scoped lang='scss'>
.burger {
    display: flex;
    align-items: center;

    &__icon {
        position: absolute;
        right: 19px;
        z-index: 4;
        cursor: pointer;
        display: none;

        @media (max-width: 575px) {
            display: block;
        }
    }

    &__menu-list {
        list-style: none;
        position: absolute;
        right: -100%;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #bebebe;
        z-index: 3;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        transition: all .4s;
    }
}

#burgerInput:checked ~ .nav .burger__menu-list {
    right: 0;
}
</style>