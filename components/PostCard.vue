<template>
  <article class="postCard">
    <h3 class="postCard__title">{{ post.title}}</h3>
    <div class="postCard__categories">
        <BaseChips :list="post.cat"/>
    </div>
    <p class="postCard__desc">{{ post.desc }}</p>
    <BaseSocialStat
      :like="post.like.length"
      :repost="post.repost.length"
      :comments="post.comments.length"
      :views="post.views.length"
    />
    <!-- <pre>
        {{ post }}
    </pre> -->
  </article>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import type { Post } from '@/types/news'
const props = defineProps({  post: Object as PropType<Post> })
</script>

<style scoped lang="less">
.postCard {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 16px;
    width: 320px;
    min-height: 320px;
    padding: 16px;
    background-color: white;
    &__desc {
        flex-grow: 2;
        color: silver;
    }
    &__likes {
        display: flex;
        justify-content: flex-start;
        gap: 8px;
    }
    // @media screen and (max-width: 450px) {
    //     width: auto;
    // }
}
</style>