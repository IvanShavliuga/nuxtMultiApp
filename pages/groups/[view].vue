<template>
  <main class="wrapper">
    <h1 class="headerPage">Группа {{ viewId }}</h1>
   <pre>
    {{getGroupsAllData}}
   </pre>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGroupsStore } from "../../stores/groups";
const { getGroupsAllData, addGroupView } = useGroupsStore();
import { useRouter } from "vue-router";
const { currentRoute } = useRouter();
const viewId: string = currentRoute.value.params.view as string;
const load = ref(false);
await addGroupView(+viewId)
load.value = true
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
