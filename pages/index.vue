<template>
  <NuxtLayout name="home">
    <NuxtPage/>
    <h1>Последние новости</h1>
    <pre>
        {{ posts }}
    </pre>
  </NuxtLayout>
</template>

<script setup lang="ts">
const posts = ref([])
const r =  useFetch('/api/news')
if (r.status.value === 'success') {
    posts.value = r.data.value.posts
}
</script>

<style>

</style>