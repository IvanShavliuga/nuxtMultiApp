<template>
  <NuxtLayout name="home">
    <NuxtPage/>
    <BaseBanner/>
    <main class="wrapper">
      <h1 class="header">Последние новости</h1>
      <PostsList :posts="getNews"/>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNewsStore } from './../stores/news'
const { getNews, addPosts } = useNewsStore()

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