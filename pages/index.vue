<template>
  <NuxtLayout name="home">
    <NuxtPage/>
    <main class="wrapper">
      <h1 class="header">Последние новости</h1>
      <PostsList :posts="getNews"/>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNewsStore } from '@/stores/news'
const { getNews, addPosts } = useNewsStore()

const load = ref(false)
// init()
addPosts().then((r) => {
    console.log('then')
    load.value = true
    console.log(r)
    console.log('getNews')
    console.log(getNews)
    // posts.value = r
    // console.log(posts)
})

console.log(getNews)
</script>

<style scoped lang="less">
.wrapper {
  width: calc((320px + 2 * 16px) * 3 + 8px * 3);
  margin: 0 auto;
}
.header {
  color: purple;
  margin: 16px 0;
}
</style>