<template>
  <div class="filters">
    <BaseInput
      label="Категория"
      id-key="filters"
      @input-data="handerCategory"
    />
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from "vue";
const filterKey = ref({
  category: "all",
});
const emit = defineEmits(["apply"]);
function handerCategory(value) {
  filterKey.value.category = value;
  emit("apply", filterKey.value);
  console.log(filterKey.value);
}
</script>

<style lang="less" scoped>
.filters {
  margin: 16px 0;
}
</style>
