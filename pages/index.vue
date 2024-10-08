<template>
  <NuxtLayout name="home">
    <NuxtPage />
    <BaseBanner />
    <main class="wrapper">
      <h1 class="headerPage">Последние новости</h1>
      <!-- <BaseFormSlider /> -->
      <FilterPosts />
      <PostsList :posts="getNews" />
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useNewsStore } from "./../stores/news";
const { getNews, addPosts } = useNewsStore();

const load = ref(false);
// init()
addPosts().then(() => {
  load.value = true;
});
const r = await useFetch("/api/addnews", {
  method: "POST",
  body: {
    message: "<your-form-data>",
    name: "<your-form-data>",
  },
});
console.log(r);
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
