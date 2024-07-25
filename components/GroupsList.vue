<template>
  <ul class="groupsList">
    <li v-for="g of groups" :key="g.id" class="item">
        <GroupCard :group="g"/>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import type { Group } from './../types/groups'
const props = defineProps({
    groups: Array as PropType<Group[]>
})
</script>

<style scoped lang="less">
.groupsList {
   display: flex;
   justify-content: flex-start;
   gap: 8px;
   flex-wrap: wrap;
   list-style: none;
}
</style>