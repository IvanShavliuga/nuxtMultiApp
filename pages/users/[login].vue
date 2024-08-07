<template>
  <NuxtLayout name="home">
    <NuxtPage />
    <main v-if="load" class="userPage wrapper">
      <UserHeadPanel :user="getUserAllData.userView" />
      <div class="userBoxPanel">
        <h2 class="userPage__header">Подписчики</h2>
        <ul class="userBoxPanel__list">
          <li v-for="f in getUserAllData.userView.friends" :key="f.id">
            <UserShortCard
              :avatar="f.avatar"
              :login="f.login"
              :name="f.name"
              :spec="f.spec"
            />
          </li>
        </ul>
      </div>
      <div class="userBoxPanel">
        <h2 class="userPage__header">Группы</h2>
        <ul class="userBoxPanel__list">
          <li v-for="g in groupsByUser" :key="g.id">
            <GroupShortCard :group="g" :admin-id="getUserAllData.userView.id" />
          </li>
        </ul>
      </div>
      <!-- <div class="userBoxPanel">
        <h2 class="userPage__header">Посты</h2>
        <PostsList :posts="getAllData.postsForUser" />
      </div> -->
            <PostsList :posts="getAllData.postsForUser" />
      <!-- <pre>
        {{ getAllData }}
      </pre> -->
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import type { ComputedRef } from "vue";
import { useUsersStore } from "../../stores/users";
import { useGroupsStore } from "../../stores/groups";
import { useNewsStore } from '../../stores/news'
import type { Group } from "../../types/groups";
// import type { Post } from "../../types/news";
const { addUserView, getUserAllData } = useUsersStore();
const { getGroupsAllData, addGroupsAllData } = useGroupsStore();
const { getAllData, addPostsForUser } = useNewsStore()
const { currentRoute } = useRouter();
const login: string = currentRoute.value.params.login as string;
const load = ref(false);
// init()
await addUserView(login);
await addGroupsAllData(getUserAllData.userView.id);
await addPostsForUser(getUserAllData.userView.id)
load.value = true;
const groupsByUser: ComputedRef<Group[]> = computed(
  () => getGroupsAllData.groupsByUser,
);
console.log(groupsByUser);
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.wrapper {
  .pageWrapper();
  // width: @widthDetailPageWrapper;
  margin: 16px auto;
  @media screen and (max-width: 930px) {
    width: calc(100% - 32px);
    margin: 16px;
  }
}
.userPage {
  &__header {
    color: @blockHeaderColor;
    font-size: 18px;
  }
}
.userBoxPanel {
  display: flex;
  flex-direction: column;
  border: 1px solid @blockBorder;
  border-radius: 16px;
  padding: @blockPadding;
  background-color: @blockColor;
  margin: 16px 0;
  &__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    margin: 16px 0;
  }
}
</style>
