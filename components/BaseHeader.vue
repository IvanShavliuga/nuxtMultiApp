<template>
  <header>
    <ul>
        <li v-for="link in listMenu" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
        </li> 
    </ul>
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

<style>

</style>