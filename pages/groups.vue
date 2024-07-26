<template>
    <main class="wrapper">
        <h1 class="header">Группы</h1>
        <GroupsList :groups="getGroups"/>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGroupsStore } from './../stores/groups'
const { getGroups, addPosts } = useGroupsStore()

const load = ref(false)
// init()
addPosts().then((r) => {
    load.value = true
})

console.log(getGroups)
</script>

<style scoped lang="less">
.wrapper {
  width: calc((320px + 2 * 16px) * 3 + 8px * 3);
  margin: 0 auto;
  @media screen and (max-width: 1110px) {
    width: calc((320px + 2 * 16px) * 2 + 8px * 2);
  }
  @media screen and (max-width: 750px) {
    width: calc(320px + 16px + 8px);
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
}
.header {
  color: black;
  margin: 16px 0;
}
</style>