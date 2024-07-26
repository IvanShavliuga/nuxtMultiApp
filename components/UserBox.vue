<template>
  <div class="userBox">
    <p class="userBox__title">{{ title }}</p>
    <div class="userBox__badge">
        <img class="userBox__img" :src="user.avatar">
        <p class="userBox__username">{{ user.login }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, computed, toRefs } from 'vue'
import type { userBox } from './../types/socialStat'
const props = defineProps({  title: String, user: Object as PropType<userBox> })
</script>

<style scoped lang="less">
.userBox {
    &__badge {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
        background-color: rgba(silver, 0.2);
        border: 1px solid rgba(silver, 0.7);
        border-radius: 16px;
        min-width: 120px;
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