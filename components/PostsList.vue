<template>
  <ul class="postsList">
    <li v-for="p of posts" :key="p.id" class="item">
      <PostCard :post="p" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { defineProps } from "vue";
import type { Posts } from "./../types/news";
defineProps({
  posts: Array as PropType<Posts>,
});
</script>

<style scoped lang="less">
.postsList {
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  list-style: none;
}
</style>
