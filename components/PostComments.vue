<template>
  <ul>
    <li v-for="c in comments" :key="c.id">
      <pre>{{ c }}</pre>
      <a :href="`/users/${c.user.login}`">
        <img :src="c.user.avatar" />
        <div>{{ c.user.name }}</div>
      </a>
      <div>{{ c.text }}</div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { defineProps } from "vue";
import type { Comment } from "./../types/news";
defineProps({ comments: Array as PropType<Comment[]> });
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
</style>
