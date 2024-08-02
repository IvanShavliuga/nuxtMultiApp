<template>
  <NuxtLayout name="home">
    <NuxtPage />
    <main class="wrapper">
      <h1 class="headerPage">{{ login }}</h1>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const { currentRoute } = useRouter();
const login = currentRoute.value.params.login;
</script>

<style></style>
