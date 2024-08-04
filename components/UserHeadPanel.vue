<template>
  <article class="userHeadPanel">
    <div class="userHeadPanel__box">
      <BaseAvatar :rang="user.rang" :avatar="user.avatar" size="large" />
      <div>
        <h1 class="userHeadPanel__name">{{ user.name }}</h1>
        <p class="userHeadPanel__spec">{{ user.spec }}</p>
        <a :href="user.link" class="userHeadPanel__link" target="_blank">{{ linkTitle }}</a>
      </div>
    </div>
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
    gap: 16px;
  }
  &__name {
    color: @headerPageColor;
    font-size: @headerPageSize;
  }
}
</style>
