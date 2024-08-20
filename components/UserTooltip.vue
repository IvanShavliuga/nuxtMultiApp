<template>
  <div class="userTooltip">
    <h3 class="userTooltip__name">{{ name }}</h3>
    <p class="userTooltip__spec">{{ spec }}</p>
    <p class="userTooltip__city">{{ city }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({ name: String, spec: String, city: String });
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.userTooltip {
  position: absolute;
  top: -60px;
  left: -90px;
  background-color: @blockColor;
  min-width: 180px;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid @blockBorder;
  z-index: 10;
  &::after {
    position: absolute;
    bottom: -9px;
    right: 22px;
    display: block;
    content: " ";
    background-color: @blockColor;
    border: solid @blockBorder;
    border-width: 0 1px 1px 0;
    padding: 8px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  &__name {
    font-size: 14px;
  }
  &__spec {
    color: @chipsTextColor;
    font-size: 12px;
  }
  &__city {
    color: @blockTextColor;
    font-size: 12px;
  }
}
</style>
