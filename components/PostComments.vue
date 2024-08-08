<template>
  <div>
    <template v-if="comments.length">
      <ul class="comment">
        <!--
        SwiperAutoplay,
        SwiperEffectCreative,
        SwiperPagination,
        SwiperMousewheel,
         :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
          :pagination="{
            el: '#mySwiperProgress',
            type: 'progressbar',
            enabled: true,
            horizontalClass: 'myProgressBar',
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
          :mousewheel="{
            invert: true,
          }"
        -->
        <Swiper :slides-per-view="1.05">
          <SwiperSlide v-for="c in comments" :key="c.id" style="height: auto">
            <li class="comment__item">
              <a class="comment__link" :href="`/users/${c.user.login}`">
                <BaseAvatar :avatar="c.user.avatar" size="mini" />
              </a>
              <div class="comment__info">
                <p class="comment__name">{{ c.user.name }}</p>
                <p class="comment__date">{{ c.date }} {{ c.time }}</p>
                <p class="comment__text">{{ c.text }}</p>
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
      </ul>
    </template>
    <template v-else>
      <div class="comment__not">
        <p class="comment__text">Пока нет комментариев</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { defineProps } from "vue";
import type { Comment } from "./../types/news";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
// import {
//   SwiperAutoplay,
//   SwiperEffectCreative,
//   SwiperPagination,
//   SwiperMousewheel,
// } from "swiper/modules";

defineProps({ comments: Array as PropType<Comment[]> });
</script>

<style scoped lang="less">
@import "./../assets/styles/global.less";
.comment {
  // display: flex;
  // justify-content: flex-start;
  // align-items: flex-start;
  list-style: none;
  max-height: 100px;
  &__item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    margin-right: 8px;
    padding: 8px;
    border: 1px solid @blockBorder;
    border-radius: 16px;
    // min-width: 320px;
    // &:not(.comment__item:first-child) {
    //   border-top: 1px solid @blockBorder;
    // }
  }
  &__name {
    font-size: 14px;
    color: @blockHeaderColor;
    font-weight: 700;
  }
  &__date {
    color: @blockLinkColor;
    font-weight: 700;
    font-size: 12px;
  }
  &__text {
    color: @blockTextColor;
    font-weight: 500;
    font-size: 14px;
  }
  &__not {
    height: 78px;
  }
}
</style>
