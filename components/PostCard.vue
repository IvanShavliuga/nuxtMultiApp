<template>
  <article style="border: 1px solid red">
    <h6>post card</h6>
    <pre>
        {{ post }}
    </pre>
  </article>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue'
import type { Post } from '@/types/news'
const props = defineProps({  post: Object as PropType<Post> })
</script>

<style>

</style>