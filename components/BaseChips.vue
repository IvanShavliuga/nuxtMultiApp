<template>
  <ul class="chips">
    <li v-for="cat in list" :key="cat" class="chips__items">
        {{ cat }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
// import type { Post } from '@/types/news'
const props = defineProps({  list: Array as PropType<string[]> })

</script>

<style scoped lang="less">
.chips {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    list-style: none;
    padding: 8px 0;
    flex-wrap: wrap;
    &__items {
        color: blue;
        background-color: rgba(blue, 0.2);
        padding: 0 8px;
        border-radius: 16px;
        font-size: 12px;
        cursor: default;
        &:hover {
            background-color: blue;
            color: white;
        }
         @media screen and (max-width: 350px) {
           width: auto;
        }
    }
}
</style>