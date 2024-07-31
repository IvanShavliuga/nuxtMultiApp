<template>
  <ul class="chips">
    <li v-for="cat in list" :key="cat" class="chips__items">
      {{ cat }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { defineProps } from "vue";
// import type { Post } from '@/types/news'
defineProps({ list: Array as PropType<string[]> });
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.chips {
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  list-style: none;
  padding: 8px 0;
  flex-wrap: wrap;
  &__items {
    color: @chipsTextColor;
    background-color: @chipsColor;
    padding: 0 8px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 500;
    cursor: default;
    &:hover {
      background-color: @chipsHoverColor;
      color: @chipsHoverTextColor;
    }
    @media screen and (max-width: 350px) {
      width: auto;
    }
  }
}
</style>
