<template>
  <NuxtLayout name="home">
    <NuxtPage />
    <main class="wrapper">
      <h1 class="headerPage">{{ login }}</h1>
      <pre v-if="load">
        {{ getUserAllData.userView }}
      </pre>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useUsersStore } from "../../stores/users";
const { addUserView, getUserAllData } = useUsersStore();
const { currentRoute } = useRouter();
const login: string = currentRoute.value.params.login as string;
const load = ref(false);
// init()
addUserView(login).then(() => {
  load.value = true;
});
</script>

<style></style>
