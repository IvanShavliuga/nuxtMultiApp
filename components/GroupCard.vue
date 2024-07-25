<template>
  <article class="groupCard">
     <h2>{{ group.name }}</h2>
     <p>{{ group.desc }}</p>
     <p>{{ group.category }}</p>
     <p>Постов: {{ group.idNews.length }}</p>
     <p>Подписчиков: {{ group.followers.length }}</p>
     <p>Админ: {{ group.admin.login }}</p>
  </article>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import type { Group } from './../types/groups'
const props = defineProps({  group: Object as PropType<Group> })
</script>

<style scoped lang="less">
.groupCard {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 16px;
    width: 320px;
    min-height: 250px;
    padding: 16px;
    background-color: white;
}
</style>