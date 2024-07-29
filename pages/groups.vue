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
</script>

<style scoped lang="less">
@import './../assets/styles/global.less';
.wrapper {
  .pageWrapper();
}
</style>