<template>
  <article class="userHeadPanel">
    <div class="userHeadPanel__box userHeadPanel__borderBox">
      <BaseAvatar :rang="user.rang" :avatar="user.avatar" size="large" />
      <div>
        <h1 class="userHeadPanel__name">{{ user.name }}</h1>
        <p class="userHeadPanel__login">{{ user.login }}</p>
        <p class="userHeadPanel__spec">{{ user.spec }}</p>
        <a :href="user.link" class="userHeadPanel__link" target="_blank">{{ linkTitle }}</a>
        <p class="userHeadPanel__ageCity">{{ user.age }} лет, {{ user.city }}</p>
      </div>
    </div>
    <div class="userHeadPanel__borderBox">
      <BaseChips :list="user.skills" />
    </div>
    <ul class="userHeadPanel__contactsList userHeadPanel__borderBox">
      <li
        v-for="(contact, key) in user.contacts"
        :key="key"
        class="userHeadPanel__contactItem"
      >
        <p class="userHeadPanel__messager">{{ contact.messager }}</p>
        <p class="userHeadPanel__contact">{{ contact.contact }}</p>
      </li>
    </ul>
    <pre>{{ user }}</pre>
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
// const avatars = computed(() => user.value.friends.map((f) => f.avatar));
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.userHeadPanel {
  display: flex;
  flex-direction: column;
  border: 1px solid @blockBorder;
  border-radius: 16px;
  padding: @blockPadding;
  background-color: @blockColor;
  &__box {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
  }
  &__contactsList {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    list-style: none;
    gap: 8px;
  }
  &__borderBox {
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid @blockBorder;
  }
  &__contactItem {
    width: 300px;
    border: 1px solid @blockBorder;
    border-radius: 8px;
    padding: 8px;
  }
   &__contact {
    color: @blockLinkColor;
  }
  &__messager {
    color: @blockValueColor;
  }
  &__name {
    color: @headerPageColor;
    font-size: @headerPageSize;
  }
  &__link {
    color: @blockLinkColor;
    font-size: 14px;
    font-weight: 500;
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
  &__login {
    color: @chipsTextColor;
    background-color: @chipsColor;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 500;
    cursor: default;
    width: 48px;
    text-align: center;
    margin-bottom: 8px;
    &:hover {
      background-color: @chipsHoverColor;
      color: @chipsHoverTextColor;
    }
    @media screen and (max-width: 350px) {
      width: auto;
    }
  }
}
</style>
