<template>
  <article class="groupCard">
    <h2>
      <a
        class="groupCard__header"
        :href="`/groups/${group.id}`"
        target="_blank"
      >
        {{ group.name }}</a
      >
    </h2>
    <p class="groupCard__cat">{{ group.category }}</p>
    <p class="groupCard__desc">{{ group.desc }}</p>
    <p class="groupCard__text">
      Постов:<span class="groupCard__value">
        {{ group.idNews.length || "нет" }}</span
      >
    </p>
    <div class="groupCard__usersInfo">
      <div class="groupCard__followers">
        <p class="groupCard__text">
          Подписчиков:<span class="groupCard__value">
            {{ group.followers.length }}</span
          >
        </p>
        <AvaList :list="avatars" />
      </div>
      <div class="groupCard__admin">
        <UserBox title="Админ" :user="group.admin" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { defineProps, toRefs } from "vue";
import type { Group } from "./../types/groups";
const props = defineProps({ group: Object as PropType<Group> });
const { group } = toRefs(props);
const avatars = group.value.followers.map((f) => f.avatar);
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.groupCard {
  .card();
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
  &__header {
    font-size: 20px;
    text-decoration: none;
    color: @blockHeaderColor;
  }
}
</style>
