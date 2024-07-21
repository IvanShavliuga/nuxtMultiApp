<template>
  <article class="postCard">
    <h3 class="postCard__title">{{ post.title}}</h3>
    <p class="postCard__categories">
        <div v-for="c in post.cat">
            {{ c }}
        </div>
    </p>
    <p class="postCard__desc">{{ post.desc }}</p>
    <p class="postCard__likes">
      <div>like: {{ post.like.length }}</div>
      <div>repost: {{ post.repost.length }}</div>
      <div>comments: {{ post.comments.length }}</div>
      <div>views: {{ post.views.length }}</div>
    </p>
    <!-- <pre>
        {{ post }}
    </pre> -->
  </article>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue'
import type { Post } from '@/types/news'
const props = defineProps({  post: Object as PropType<Post> })
</script>

<style scoped lang="less">
.postCard {
    border: 1px solid black;
    border-radius: 16px;
    width: 320px;
    min-height: 320px;
    padding: 16px;
    background-color: white;
    &__desc {
        color: silver;
    }
    &__categories {
        display: flex;
        justify-content: flex-start;
        gap: 8px;
    }
    &__likes {
        display: flex;
        justify-content: flex-start;
        gap: 8px;
    }
}
</style>