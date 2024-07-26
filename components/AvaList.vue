<template>
  <ul class="avaList">
    <li v-for="(l, key) in displayList" :key="key" class="avaList__item">
        <img :src="l" class="avaList__img"/>
    </li>
    <li v-if=isMore class="avaList__more">
        <div class="avaList__text">+{{ list.length - 5 }}</div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, PropType, computed, toRefs } from 'vue'
const props = defineProps({  list: Array as PropType<String[]> })
const { list } = toRefs(props)
const displayList = computed(() => {
    if(list.value.length >= 5) {
        return list.value.slice(0, 5)
    } else {
        return list.value
    }
})
const isMore = computed(() => list.value.length >= 5)
</script>

<style scoped lang="less">
.avaList {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    &__item {
        width: 32px;
        height: 32px;
        margin: 0;
        padding: 0;
        margin-left: -16px;
        &:first-child {
            margin-left: 0;
        }
    }
    &__img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid white;
    }
    &__more {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: silver;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        margin: 0;
        padding: 0;
        margin-left: -16px;
    }
    &__text {
        margin: auto;
        line-height: 0;
        color: black;
        font-size: 10px;
    }
}
</style>