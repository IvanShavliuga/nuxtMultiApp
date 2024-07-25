<template>
  <article class="groupCard">
    <h3>{{ group.name }}</h3>
    <p class="groupCard__cat">{{ group.category }}</p>
    <p class="groupCard__desc">{{ group.desc }}</p>
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
    &__desc {
        flex-grow: 2;
        color: silver;
        font-weight: 500;
        &::first-letter {
            color:black;
            font-weight: 700;
            font-size: 1.3em;
            padding-right: 2px;
            // float: left;
            // line-height: -2em;
        }
    }
    &__cat {
        color: rgba(blue, 0.4);
        font-weight: 700;
    }
}
</style>