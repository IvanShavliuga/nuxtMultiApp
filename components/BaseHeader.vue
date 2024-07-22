<template>
  <header class="header">
    <nav class="header__nav">
        <div class="header__logo">
            <span class="header__logo-web">Web</span>
            <span class="header__logo-news">News</span>
        </div>
        <ul class="menu">
            <li v-for="link in listMenu" :key="link.href" class="menu__item">
                <a :href="link.href" class="menu__link">{{ link.label }}</a>
            </li> 
        </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
//import { defineProps, ref, toRefs, PropType } from 'vue'
import type { ListLinks } from '@/types/Lists'
const listMenu = ref<ListLinks>([
    { label: 'главная', href: '/'},
    { label: 'группы', href: '/groups'},
    { label: 'пользователи', href: '/users'}
])
</script>

<style scoped lang="less">
.header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: rgba(purple, 0.2);
    &__nav {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @media screen and (max-width: 750px) {
            flex-direction: column;
        }
    }
    &__logo {
        padding: 16px 8px;
        font-size: 18px;
        letter-spacing: 1px;
        font-weight: bold;
        &-web {
            color: blue;
            margin-right: 4px;
        }
        &-news {
            color: black;
        }
    }
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
}
.menu {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    list-style: none;
    margin: 0;
    padding: 0;
    &__link {
        display: block;
        color: purple;
        padding: 16px 8px;
        text-decoration: none;
        font-size: 18px;
        &::first-letter {
            text-transform: uppercase;
            color: red;
        }
    }
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
}
</style>