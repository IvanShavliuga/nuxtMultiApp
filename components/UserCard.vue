<template>
  <article class="userCard">
    <div class="userCard__box">
      <BaseAvatar :rang="user.rang" :avatar="user.avatar" />
      <div>
        <h2 class="userCard__name">
          <div>{{ user.name }}</div>
        </h2>
        <h3 class="userCard__spec">{{ user.spec }}</h3>
        <p class="userCard__spec">{{ user.age }} лет, {{ user.city }}</p>
      </div>
    </div>
    <div class="userCard__box">
      <p class="userCard__login">{{ user.login }}</p>
      <a class="userCard__link" :href="user.link" target="_blank">{{
        linkTitle
      }}</a>
    </div>
    <div class="userCard__skillbox">
      <BaseChips :list="user.skills" />
    </div>
    <ul class="userCard__contactsList">
      <li
        v-for="(contact, key) in user.contacts"
        :key="key"
        class="userCard__contactItem"
      >
        <p class="userCard__messager">{{ contact.messager }}</p>
        <p class="userCard__contact">{{ contact.contact }}</p>
      </li>
    </ul>
    <div class="userCard__friendsBox">
      <AvaList :list="avatars" />
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { defineProps, computed, toRefs } from "vue";
import type { User } from "./../types/users";
const props = defineProps({
  user: Object as PropType<User>,
});
const { user } = toRefs(props);
const linkTitle = computed(() => user.value.link.split("//")[1].split("/")[0]);
const avatars = computed(() => user.value.friends.map((f) => f.avatar));
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.userCard {
  .card();
  height: 320px;
  @media screen and (max-width: 450px) {
    width: 85vw;
    margin: 0 auto;
  }
  &__date {
    color: @blockLinkColor;
    font-weight: 700;
  }
  &__contactsList {
    flex-grow: 1;
    list-style: none;
  }
  &__contactItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin: 0;
  }
  &__contact {
    color: @blockLinkColor;
  }
  &__messager {
    color: @blockValueColor;
  }
  &__login {
    color: @chipsTextColor;
    background-color: @chipsColor;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 500;
    cursor: default;
    width: 48px;
    text-align: center;
    &:hover {
      background-color: @chipsHoverColor;
      color: @chipsHoverTextColor;
    }
    @media screen and (max-width: 350px) {
      width: auto;
    }
  }
  &__link {
    color: @blockLinkColor;
    font-size: 12px;
    font-weight: 500;
  }
  &__box {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
  }
  &__skillbox {
    border-top: 1px solid @blockBorder;
    border-bottom: 1px solid @blockBorder;
    margin: 16px 0;
    padding: 8px 0;
  }
  &__friendsBox {
    border-top: 1px solid @blockBorder;
    margin-top: 16px;
    padding-top: 8px;
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
  &__ageCity {
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
}
</style>
