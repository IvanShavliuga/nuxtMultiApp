<template>
  <div class="avabox" :title="rang">
    <img
      :src="avatar"
      :class="size === 'default' ? 'avabox__avatar' : 'avabox__avatar-' + size"
    />
    <!-- <p class="avabox__rang">{{ user.rang }}</p> -->
    <img
      v-if="rang === 'Admin'"
      src="./../assets/icons/admin.svg"
      class="avabox__icon"
    />
    <img
      v-if="rang === 'Moderator'"
      src="./../assets/icons/moderator.svg"
      class="avabox__icon"
    />
    <img
      v-if="rang === 'User'"
      src="./../assets/icons/user.svg"
      class="avabox__icon"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { PropType } from "vue";
import type { UserRang } from "./../types/users";
defineProps({
  avatar: String,
  rang: String as PropType<UserRang>,
  size: { type: String, default: "default" },
});
</script>

<style lang="less" scoped>
@import "./../assets/styles/global.less";
.avabox {
  position: relative;
  &__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    &-large {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }
  &__icon {
    position: absolute;
    bottom: -4px;
    right: -6px;
    display: block;
    width: 20px;
    height: 20px;
    padding: 3px;
    background-color: @iconRangColor;
    border: 1px solid @iconRangBordeer;
    border-radius: 3px;
  }
}
</style>
