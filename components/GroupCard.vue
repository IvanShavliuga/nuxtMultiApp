<template>
  <article class="groupCard">
    <h3>{{ group.name }}</h3>
    <p class="groupCard__cat">{{ group.category }}</p>
    <p class="groupCard__desc">{{ group.desc }}</p>
    <p class="groupCard__text">Постов:<span class="groupCard__value"> {{ group.idNews.length || 'нет' }}</span></p>
    <div class="groupCard__usersInfo">
      <div class="groupCard__followers">
        <p class="groupCard__text">Подписчиков:<span class="groupCard__value"> {{ group.followers.length }}</span></p>
        <AvaList :list="avatars"/>
      </div>
      <div class="groupCard__admin">
        <UserBox title="Админ" :user="group.admin"/>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { defineProps, PropType, toRefs } from 'vue'
import type { Group } from './../types/groups'
const props = defineProps({  group: Object as PropType<Group> })
const { group } = toRefs(props)
const avatars = group.value.followers.map((f) => f.avatar)
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
    // @media screen and (max-width: 400px) {
    //   width: 100%;
    // }
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
    // &__followers {
     
    // }
    &__cat {
        color: rgba(blue, 0.4);
        font-weight: 700;
    }
    &__text {
        color: silver;
    }
    &__value {
        color: black;
        font-weight: 700;
    }
    &__usersInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
      // @media screen and (max-width: 400px) {
      //   flex-direction: column;
      //   align-items: flex-start;
      // }
    }
}
</style>