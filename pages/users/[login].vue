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
        <h2 class="userPage__header">Статистика</h2>
        <div class="userStat">
          <p class="userStat__text">
            Количество групп:
            <span class="userStat__value"> {{ groupsByUser.length }}</span>
          </p>
          <p class="userStat__text">
            Администратор групп:
            <span class="userStat__value"> {{ adminCount }} </span>
          </p>
          <p class="userStat__text">
            Количество лайков:
            <span class="userStat__value"> {{ likesCount }}</span>
          </p>
          <p class="userStat__text">
            Количество репостов:
            <span class="userStat__value"> {{ repostsCount }}</span>
          </p>
          <p class="userStat__text">
            Количество комментариев:
            <span class="userStat__value"> {{ commentsCount }}</span>
          </p>
          <p class="userStat__text">
            Количество просмотров:
            <span class="userStat__value"> {{ viewsCount }}</span>
          </p>
        </div>
      </div>
      <div class="userBoxPanel">
        <h2 class="userPage__header">Группы</h2>
        <ul class="userBoxPanel__list">
          <li v-for="g in groupsByUser" :key="g.id">
            <GroupShortCard :group="g" :admin-id="getUserAllData.userView.id" />
          </li>
        </ul>
      </div>

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
import { useNewsStore } from "../../stores/news";
import type { Group } from "../../types/groups";
// import type { Post } from "../../types/news";
const { addUserView, getUserAllData } = useUsersStore();
const { getGroupsAllData, addGroupsByUser } = useGroupsStore();
const { getAllData, addPostsForUser } = useNewsStore();
const { currentRoute } = useRouter();
const login: string = currentRoute.value.params.login as string;
const load = ref(false);
// init()
await addUserView(login);
await addGroupsByUser(getUserAllData.userView.id);
await addPostsForUser(getUserAllData.userView.id);
load.value = true;
const groupsByUser: ComputedRef<Group[]> = computed(
  () => getGroupsAllData.groupsByUser,
);
const adminCount = computed(
  () =>
    groupsByUser.value.filter((ga) => ga.idAdmin === getUserAllData.userView.id)
      .length,
);
const likesCount = computed(() => {
  let likes = 0;
  getAllData.postsForUser.forEach((element) => {
    likes += element.like.length;
  });
  return likes;
});
const repostsCount = computed(() => {
  let reposts = 0;
  getAllData.postsForUser.forEach((element) => {
    reposts += element.repost.length;
  });
  return reposts;
});
const commentsCount = computed(() => {
  let comments = 0;
  getAllData.postsForUser.forEach((element) => {
    comments += element.comments.length;
  });
  return comments;
});
const viewsCount = computed(() => {
  let views = 0;
  getAllData.postsForUser.forEach((element) => {
    views += element.views.length;
  });
  return views;
});
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
.userStat {
  margin: 8px 0;
  &__text {
    color: @blockTextColor;
  }
  &__value {
    color: @blockValueColor;
    font-weight: 700;
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
