<template>
  <ul class="stat">
      <li class="stat__item"><img src="./../assets/icons/like.svg" class="stat__icon"/>{{ like }}</li>
      <li class="stat__item"><img src="./../assets/icons/repost.svg" class="stat__icon"/>  {{ repost }}</li>
      <li class="stat__item"><img src="./../assets/icons/comments.svg" class="stat__icon"/> {{ comments }}</li>
      <li class="stat__item"><img src="./../assets/icons/views.svg" class="stat__icon"/> {{ views }}</li>
    </ul>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
const props = defineProps({
    like: Number,
    repost: Number,
    comments: Number,
    views: Number,
})
</script>

<style scoped lang="less">
.stat {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    list-style: none;
    width: auto;
    padding: 8px;
    background-color: rgba(silver,0.15);
    border-radius: 16px;
    &__item {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 48px;
        opacity: 0.6;
        &:hover {
             opacity: 1;
        }
    }
    &__icon {
        width: 28px;
        height: 28px;
    }
}
</style>