<template>
  <main class="groupPage wrapper">
    <div class="groupPanel">
      <h2 class="groupPage__header">{{ groupView.name }}</h2>
      <p class="groupPanel__desc">{{ groupView.category }}</p>
      <p class="groupPanel__desc">{{ groupView.desc }}</p>
      <!-- <ul class="groupPanel__list">
          <li v-for="f in getUserAllData.userView.friends" :key="f.id">
            <UserShortCard
              :avatar="f.avatar"
              :login="f.login"
              :name="f.name"
              :spec="f.spec"
            />
          </li>
        </ul> -->
      <div class="groupStat">
        <p class="groupStat__text">
          Количество постов:
          <span class="groupStat__value"> 0</span>
        </p>
        <p class="groupStat__text">
          Количество лайков:
          <span class="groupStat__value"> 0</span>
        </p>
        <p class="groupStat__text">
          Количество репостов:
          <span class="groupStat__value"> 0</span>
        </p>
        <p class="groupStat__text">
          Количество комментариев:
          <span class="groupStat__value"> 0</span>
        </p>
        <p class="groupStat__text">
          Количество просмотров:
          <span class="groupStat__value"> 0</span>
        </p>
      </div>
      <div class="groupPanel__flexblock">
        <div>
          <p class="groupPanel__text">
            Подписчиков:<span class="groupPanel__value">
              {{ groupView.followers.length }}</span
            >
          </p>
          <AvaList :list="avatars" />
        </div>
        <div class="groupPanel__admin">
          <UserBox title="Админ" :user="groupView.admin" />
        </div>
      </div>
    </div>
    <PostsList :posts="postsForGroup" />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGroupsStore } from "../../stores/groups";
import { useRouter } from "vue-router";
import { useNewsStore } from "../../stores/news";
const { getAllData, addPostsForGroup } = useNewsStore();
const { getGroupsAllData, addGroupView } = useGroupsStore();
const { currentRoute } = useRouter();
const viewId: string = currentRoute.value.params.view as string;

await addGroupView(+viewId);
const { groupView } = getGroupsAllData;
await addPostsForGroup(+groupView.id);
const { postsForGroup } = getAllData;
const load = ref(false);

load.value = true;
const avatars = groupView.followers.map((f) => f.avatar);
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.wrapper {
  .pageWrapper();
}
.groupPage {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  margin: 16px auto;
  &__header {
    color: @blockHeaderColor;
    font-size: 18px;
  }
}
.groupPanel {
  display: flex;
  flex-direction: column;
  border: 1px solid @blockBorder;
  border-radius: 16px;
  padding: @blockPadding;
  background-color: @blockColor;
  width: 300px;
  @media screen and (max-width: 1111px) {
    width: 100%;
  }
  &__flexblock {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
    padding: 8px 0;
    border-top: 1px solid @blockBorder;
  }
  &__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    margin: 16px 0;
  }
  &__desc {
    color: @blockTextColor;
    font-size: 14px;
  }
  &__admin {
    width: 20ch;
  }
  &__text {
    color: @blockTextColor;
  }
  &__value {
    color: @blockValueColor;
    font-weight: 700;
  }
}
.groupStat {
  margin: 8px 0;
  padding: 8px 0;
  border-top: 1px solid @blockBorder;
  &__text {
    color: @blockTextColor;
  }
  &__value {
    color: @blockValueColor;
    font-weight: 700;
  }
}
</style>
