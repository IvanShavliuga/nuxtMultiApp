<template>
  <div class="shortHint" :style="'width:' + hint.length + 'ch'">
    {{ hint }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({ hint: String, value: { type: Number, default: 0 } });
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.shortHint {
  position: absolute;
  top: -42px;
  left: -10px;
  z-index: 10;
  font-size: 14px;
  padding: 4px;
  border-radius: 6px;
  background-color: @blockColor;
  border: 1px solid @blockBorder;
  &::after {
    position: absolute;
    bottom: -9px;
    left: 22px;
    display: block;
    content: " ";
    background-color: @blockColor;
    border: solid @blockBorder;
    border-width: 0 1px 1px 0;
    padding: 8px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
}
</style>
