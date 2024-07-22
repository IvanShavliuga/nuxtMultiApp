<template>
  <ul class="postsList">
    <li v-for="p of posts" :key="p.id" class="item">
        <PostCard :post="p"/>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import type { Posts } from '@/types/news'
const props = defineProps({
    posts: Array as PropType<Posts>
})
</script>

<style scoped lang="less">
.postsList {
   display: flex;
   justify-content: flex-start;
   gap: 8px;
   flex-wrap: wrap;
   list-style: none;
   width: calc((320px + 2 * 16px) * 3 + 8px * 3);
   margin: 0 auto;
}
</style>