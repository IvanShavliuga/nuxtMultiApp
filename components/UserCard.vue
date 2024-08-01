<template>
  <article class="userCard">
    <div class="userCard__box">
      <div class="userCard__avabox">
        <img :src="user.avatar" class="userCard__avatar" />
        <!-- <p class="userCard__rang">{{ user.rang }}</p> -->
                    <img
          v-if="user.rang === 'Admin'"
            src="./../assets/icons/admin.svg"
            class="userCard__icon"
          />
           <img
          v-if="user.rang === 'Moderator'"
            src="./../assets/icons/moderator.svg"
            class="userCard__icon"
          />
           <img
          v-if="user.rang === 'User'"
            src="./../assets/icons/user.svg"
            class="userCard__icon"
          />
      </div>
      <div>
        <h2 class="userCard__name">

           <div> {{ user.name }}</div>
        </h2>
        <h3 class="userCard__spec">{{ user.spec }}</h3>
      </div>
    </div>
    <pre>{{ user }}</pre>
  </article>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { defineProps } from "vue";
import type { User } from "./../types/users";
defineProps({
  user: Object as PropType<User>,
});
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.userCard {
  .card();
  min-height: 350px;
  &__date {
    color: @blockLinkColor;
    font-weight: 700;
  }
  &__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  &__avabox {
    position: relative;
  }
  &__icon {
    position: absolute;
    bottom: -8px;
    right: -8px;
    display: block;
    width: 24px;
    height: 24px;
    padding: 2px;
    background-color: @iconRangColor;
  }
  &__box {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    gap: 8px;
  }
  &__name {
    // display: flex;
    // justify-content: flex-start;
    // align-items: center;
    // gap: 8px;
    color: @blockHeaderColor;
    font-size: 16px;
    font-weight: 700;
  }
  &__spec {
    color: @blockTextColor;
    font-size: 14px;
    font-weight: 500;
  }
  &__rang {
    color: @chipsTextColor;
    background-color: @chipsColor;
    font-size: 12px;
    text-align: center;
    padding: 0 4px;
    border-radius: 6px;
  }
  @media screen and (max-width: 450px) {
    width: auto;
    min-width: 230px;
    max-width: 90%;
  }
}
</style>
