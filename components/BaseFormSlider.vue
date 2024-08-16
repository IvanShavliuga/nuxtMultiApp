<template>
  <div>
    <Slider v-model="value" />
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
<style src="@vueform/slider/themes/default.css"></style>
