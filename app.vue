<template>
  <div>
    <BaseHeader />
    <NuxtPage />
    <CookieControl locale="en" />
    <BaseFooter />
  </div>
</template>
<script setup lang="ts">
import { useHead } from "nuxt/app";
// import { watch } from 'vue'
// const {
//   cookiesEnabled,
//   cookiesEnabledIds,
//   isConsentGiven,
//   isModalActive,
//   moduleOptions,
// } = useCookieControl()
// watch(
//   () => cookiesEnabledIds.value,
//   (current, previous) => {
//     if (
//       !previous?.includes('google-analytics') &&
//       current?.includes('google-analytics')
//     ) {
//       // cookie with id `google-analytics` got added
//       window.location.reload() // placeholder for your custom change handler
//     }
//   },
//   { deep: true },
// )
useHead({
  title: "Web News Porfolio project",
});
console.log(
  "%cTest technology",
  `margin: 8px; padding: 8px; border: 2px solid yellow; background-color: plum; color: white; font-size: 16px; font-weight: 700;`,
);
</script>
<style lang="less">
@import "./assets/styles/global.less";
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background-color: @bodyColor;
}
</style>
