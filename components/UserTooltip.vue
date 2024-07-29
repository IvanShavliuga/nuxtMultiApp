<template>
  <div class="userTooltip">
    <h3 class="userTooltip__name">{{ name }}</h3>
    <p class="userTooltip__spec">{{ spec }}</p>
    <p class="userTooltip__city">{{ city }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, computed, toRefs } from 'vue'
const props = defineProps({  name: String, spec: String, city: String})

</script>

<style scoped lang="less">
.userTooltip {
    position: absolute;
    top: -60px;
    left: -90px;
    background-color: white;
    min-width: 180px;
    padding: 8px;
    border-radius: 10px;
    border: 1px solid silver;
    &::after {
      position: absolute;
      bottom: -9px;
      right: 22px;
      display: block;
      content: ' ';
      background-color: white;
      border: solid silver;
      border-width: 0 1px 1px 0;
      padding: 8px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
    &__name {
        font-size: 14px;
    }
    &__spec {
        color: blue;
        font-size: 12px;
    }
    &__city {
        color: silver;
        font-size: 12px;
    }
}
</style>