<template>
  <div class="wrapperStat">
    <div v-if="showTooltip" class="wrapperStat__tooltip">
      <UserTooltip :name="name" :spec="spec" :city="city" />
    </div>
    <!-- <pre>{{ statsList }}</pre> -->
    <ul class="stat">
      <li
        v-for="stat in statsList"
        :key="stat.field"
        class="stat__item"
        @mouseenter="handlerShowHint(stat.field)"
        @mouseleave="handlerHideHint"
      >
        <BaseShortHint v-if="stat.field === statFieldHint" :hint="stat.hint" />
        <img :src="stat.icon" class="stat__icon" />{{ stat.value }}
      </li>
      <li
        class="stat__item"
        @mouseenter="handlerShowTooltip"
        @mouseleave="handlerHideTooltip"
      >
        <img :src="'' + avatar" class="stat__avatar" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { ComputedRef } from "vue";
import type { SocialStatList, SocialStatField } from "./../types/socialStat";
import { defineProps, ref, computed, toRefs } from "vue";
const props = defineProps({
  like: Number,
  repost: Number,
  comments: Number,
  views: Number,
  avatar: String,
  name: String,
  spec: String,
  city: String,
});
const { like, repost, comments, views } = toRefs(props);
const showTooltip = ref(false);
const statFieldHint = ref<SocialStatField | "">("");
function handlerShowTooltip() {
  showTooltip.value = true;
}
function handlerHideTooltip() {
  showTooltip.value = false;
}
function handlerShowHint(field: SocialStatField) {
  statFieldHint.value = field;
}
function handlerHideHint() {
  statFieldHint.value = "";
}
const statsList: ComputedRef<SocialStatList> = computed(() => {
  const statData = { like, repost, comments, views };
  const statFields: SocialStatField[] = ["like", "repost", "comments", "views"];
  const statHints = {
    like: "Лайки",
    repost: "Репосты",
    comments: "Комментарии",
    views: "Просмотры",
  };
  return statFields.map((field: SocialStatField) => {
    const value: number = statData[field].value;
    return {
      field,
      value,
      hint: `${statHints[field]}: ${value}`,
      icon: `/${field}.svg`,
    };
  });
});
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.wrapperStat {
  position: relative;
  &__tooltip {
    position: absolute;
    top: -22px;
    right: 100px;
  }
}
.stat {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  list-style: none;
  width: auto;
  padding: 8px;
  background-color: @blockPanelColor;
  border-radius: 16px;
  &__item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 48px;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
  &__icon {
    width: @iconSize;
    height: @iconSize;
  }
  &__avatar {
    width: @iconSize;
    height: @iconSize;
    border-radius: 50%;
    margin-left: auto;
  }
}
</style>
