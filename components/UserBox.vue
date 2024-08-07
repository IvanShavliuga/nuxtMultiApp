<template>
  <div class="userBox">
    <UserTooltip
      v-if="showTooltip"
      :name="user.name"
      :spec="user.spec"
      :city="user.city"
    />
    <p class="userBox__title">{{ title }}</p>
    <a
      class="userBox__badge"
      :href="`/users/${user.login}`"
      target="_blank"
      @mouseenter="handlerShowTooltip"
      @mouseleave="handlerHideTooltip"
    >
      <img class="userBox__img" :src="user.avatar" />
      <p class="userBox__username">{{ user.login }}</p>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { defineProps, ref } from "vue";
import type { userBox } from "./../types/socialStat";
defineProps({ title: String, user: Object as PropType<userBox> });
const showTooltip = ref(false);
function handlerShowTooltip() {
  showTooltip.value = true;
}
function handlerHideTooltip() {
  showTooltip.value = false;
}
</script>

<style scoped lang="less">
.userBox {
  position: relative;
  &__badge {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    background-color: rgba(silver, 0.2);
    border: 1px solid rgba(silver, 0.7);
    border-radius: 16px;
    min-width: 120px;
    cursor: default;
    padding: 2px;
    text-decoration: none;
  }
  &__img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  &__username {
    color: black;
    font-weight: 700;
  }
  &__title {
    color: silver;
  }
}
</style>
