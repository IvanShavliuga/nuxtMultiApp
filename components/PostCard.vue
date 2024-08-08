<template>
  <article class="postCard">
    <h3 class="postCard__title">{{ post.title }}</h3>
    <p class="postCard__date">{{ post.date }} {{ post.time }}</p>
    <div class="postCard__categories">
      <BaseChips :list="post.cat" />
    </div>
    <p class="postCard__author">{{ post.group?.name ?? post.user.name }}</p>
    <p class="postCard__desc">{{ post.desc }}</p>
    <div class="postCard__comments">
      <PostComments :comments="post.comments" />
    </div>
    <BaseSocialStat
      :like="post.like.length"
      :repost="post.repost.length"
      :comments="post.comments.length"
      :views="post.views.length"
      :avatar="post.user.avatar"
      :name="post.user.name"
      :spec="post.user.spec"
      :city="post.user.city"
      :login="post.user.login"
    />
  </article>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { defineProps } from "vue";
import type { Post } from "./../types/news";
defineProps({ post: Object as PropType<Post> });
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.postCard {
  .card();
  min-height: 350px;
  &__date {
    color: @blockLinkColor;
    font-weight: 700;
    font-size: 12px;
  }
  &__likes {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
  }
  &__author {
    color: @blockHeaderColor;
    font-weight: 700;
    margin-bottom: 8px;
  }
  &__desc {
    height: 190px;
    border-bottom: 1px solid @blockBorder;
  }
  &__comments {
    margin: 8px 0;
  }
  @media screen and (max-width: 450px) {
    width: auto;
    min-width: 230px;
    max-width: 90%;
  }
}
</style>
