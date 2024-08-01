<template>
  <ul class="usersList">
    <li v-for="u of users" :key="u.id" class="item">
      <UserCard :user="u" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { defineProps } from "vue";
import type { User } from "./../types/users";
defineProps({
  users: Array as PropType<User[]>,
});
</script>

<style scoped lang="less">
.usersList {
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  list-style: none;
}
</style>
