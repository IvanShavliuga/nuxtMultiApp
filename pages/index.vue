<template>
  <NuxtLayout name="home">
    <NuxtPage/>
    <h1>Последние новости</h1>
    <PostsList :posts="getNews"/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useNewsStore } from '@/stores/news'
const { getNews, addPosts, init } = useNewsStore()

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

<style>

</style>