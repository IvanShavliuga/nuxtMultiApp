<template>
  <main class="wrapper">
    <h1 class="headerPage">Группы</h1>
    <GroupsList :groups="getGroups" />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGroupsStore } from "../../stores/groups";
const { getGroups, addGroups } = useGroupsStore();

const load = ref(false);
// init()
addGroups().then(() => {
  load.value = true;
});
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.wrapper {
  .pageWrapper();
}
.headerPage {
  color: @headerPageColor;
  font-size: @headerPageSize;
}
</style>
