<template>
  <div class="wrapperStat">
    <div v-if="showTooltip" class="wrapperStat__tooltip">
      <UserTooltip :name="name" :spec="spec" :city="city" />
    </div>
    <ul class="stat">
      <li class="stat__item">
        <img src="./../assets/icons/like.svg" class="stat__icon" />{{ like }}
      </li>
      <li class="stat__item">
        <img src="./../assets/icons/repost.svg" class="stat__icon" />
        {{ repost }}
      </li>
      <li class="stat__item">
        <img src="./../assets/icons/comments.svg" class="stat__icon" />
        {{ comments }}
      </li>
      <li class="stat__item">
        <img src="./../assets/icons/views.svg" class="stat__icon" /> {{ views }}
      </li>
      <li
        class="stat__item"
        @mouseenter="handlerShowTooltip"
        @mouseleave="handlerHideTooltip"
      >
        <img :src="'.' + avatar" class="stat__avatar" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
defineProps({
  like: Number,
  repost: Number,
  comments: Number,
  views: Number,
  avatar: String,
  name: String,
  spec: String,
  city: String,
});
const showTooltip = ref(false);
function handlerShowTooltip() {
  showTooltip.value = true;
}
function handlerHideTooltip() {
  showTooltip.value = false;
}
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.wrapperStat {
  position: relative;
  &__tooltip {
    position: absolute;
    top: -22px;
    right: 100px;
  }
}
.stat {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  list-style: none;
  width: auto;
  padding: 8px;
  background-color: @blockPanelColor;
  border-radius: 16px;
  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 48px;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
  &__icon {
    width: @iconSize;
    height: @iconSize;
  }
  &__avatar {
    width: @iconSize;
    height: @iconSize;
    border-radius: 50%;
    margin-left: auto;
  }
}
</style>
