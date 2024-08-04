<template>
  <NuxtLayout name="home">
    <NuxtPage />
    <main class="wrapper">
      <h1 class="headerPage">Пользователи</h1>
      <UsersList :users="getUsers" />
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUsersStore } from "../../stores/users";
const { getUsers, addUsers } = useUsersStore();

const load = ref(false);
// init()
addUsers().then(() => {
  load.value = true;
});
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
