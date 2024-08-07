<template>
  <a class="userShort" :href="'/users/' + login">
    <BaseAvatar :rang="rang" :avatar="avatar" />
    <p class="userShort__name">{{ name }}</p>
  </a>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
// import type { PropType } from "vue";
// import type { UserRang } from "./../types/users";
defineProps({
  avatar: String,
  login: String,
  name: String,
  spec: String,
});
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.userShort {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  border: 1px solid @blockBorder;
  border-radius: 16px;
  width: 200px;
  //   height: 100px;
  text-decoration: none;
  padding: 8px;
  &__name {
    color: @blockHeaderColor;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
