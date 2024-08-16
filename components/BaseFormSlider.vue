<template>
  <div class="sliderComponent">
    <div class="sliderComponent__box">
      <div class="sliderComponent__box-item">{{ value[0] }}</div>
      <div class="sliderComponent__box-item">{{ value[1] }}</div>
    </div>
    <div class="sliderComponent__slider">
      <Slider v-model="value" :tooltips="false" />
    </div>
  </div>
</template>
<script>
//https://www.npmjs.com/package/@vueform/slider
import Slider from "@vueform/slider";
export default {
  components: {
    Slider,
  },
  data() {
    return {
      value: [30, 50],
    };
  },
};
</script>
<style lang="less">
@import "@vueform/slider/themes/default.css";
@import "./../assets/styles/global.less";
.sliderComponent {
  padding: 16px 0;
  margin: 16px 0;
  &__box {
    display: flex;
    justify-content: space-between;
    border: 1px solid @blockBorder;
    margin-bottom: 8px;
    &-item {
      flex-grow: 1;
      padding: 8px;
      &:first-child {
        border-right: 1px solid @blockBorder;
      }
    }
  }
  &__slider {
    padding-bottom: 8px;
  }
}
</style>
