<template>
  <ul>
    <li v-for="p of posts" :key="p.id">
        <PostCard :post="p"/>
    </li>
  </ul>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue'
import type { Posts } from '@/types/news'
const props = defineProps({
    posts: Array as PropType<Posts>
})
</script>

<style>

</style>