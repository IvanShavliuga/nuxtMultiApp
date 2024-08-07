<template>
  <a class="groupShort" :href="'/groups/' + group.id">
    <div>
      <p class="groupShort__name">{{ group.name }}</p>
      <p class="groupShort__role">
        {{ group.idAdmin === adminId ? "Админ" : "Читатель" }}
      </p>
    </div>
    <AvaList :list="avatars" :count-display="2" />
  </a>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { defineProps, toRefs } from "vue";
import type { Group } from "./../types/groups";
const props = defineProps({
  group: Object as PropType<Group>,
  adminId: Number,
});
const { group } = toRefs(props);
const avatars = group.value.followers.map((f) => f.avatar);
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.groupShort {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border: 1px solid @blockBorder;
  border-radius: 16px;
  width: 200px;
  //   height: 100px;
  text-decoration: none;
  padding: 8px;
  &__role {
    color: @blockHeaderColor;
    font-size: 14px;
    font-weight: 500;
  }
  &__name {
    color: @blockHeaderColor;
    font-size: 16px;
    font-weight: 700;
  }
}
</style>
