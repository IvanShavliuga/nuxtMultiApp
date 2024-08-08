<template>
  <div>
    <template v-if="comments.length">
      <ul class="comment">
        <li v-for="c in comments" :key="c.id" class="comment__item">
          <a class="comment__link" :href="`/users/${c.user.login}`">
            <BaseAvatar :avatar="c.user.avatar" size="mini" />
          </a>
          <div class="comment__info">
            <p class="comment__name">{{ c.user.name }}</p>
            <p class="comment__date">{{ c.date }} {{ c.time }}</p>
            <p class="comment__text">{{ c.text }}</p>
          </div>
        </li>
      </ul>
    </template>
    <template v-else>
      <p>Пока нет комментариев</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { defineProps } from "vue";
import type { Comment } from "./../types/news";
defineProps({ comments: Array as PropType<Comment[]> });
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.comment {
  // display: flex;
  // justify-content: flex-start;
  // align-items: flex-start;
  list-style: none;
  max-height: 85px;
  overflow-y: auto;
  &__item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    margin: 8px 0;
    padding: 8px 0;
    // min-width: 320px;
    &:not(.comment__item:first-child) {
      border-top: 1px solid @blockBorder;
    }
  }
  &__name {
    font-size: 14px;
    color: @blockHeaderColor;
    font-weight: 700;
  }
  &__date {
    color: @blockLinkColor;
    font-weight: 700;
    font-size: 12px;
  }
  &__text {
    color: @blockTextColor;
    font-weight: 500;
    font-size: 14px;
  }
}
</style>
