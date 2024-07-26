<template>
  <div>
     <BaseHeader/>
     <NuxtPage />
     <BaseFooter/>
  </div>
</template>
<script setup lang="ts">
import { useHead } from "nuxt/app";

useHead({
  title: 'Web News Porfolio project'
})
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background-color: rgba(silver, 0.3);
}
</style>

