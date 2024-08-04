<template>
  <NuxtLayout name="home">
    <NuxtPage />
    <main v-if="load" class="wrapper">
      <UserHeadPanel :user="getUserAllData.userView" />
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

<style scoped lang="less">
@import "./../assets/styles/global.less";
.wrapper {
  width: @widthDetailPageWrapper;
  margin: 16px auto;
  @media screen and (max-width: 930px) {
    width: calc(100% - 32px);
    margin: 16px;
  }
}
</style>
