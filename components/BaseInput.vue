<template>
  <div class="inputBox">
    <label class="inputBox__label" :for="idKey"> {{ label }}</label>
    <input
      :id="idKey"
      class="inputBox__input"
      type="text"
      :name="idKey"
      @input="handlerInput"
    />
  </div>
</template>

<script setup lang="ts">
// import type { PropType } from "vue";
import { defineProps, /*toRefs,*/ defineEmits } from "vue";
// import type { Group } from "./../types/groups";
/*const props = */ defineProps({
  valueInput: String,
  label: String,
  idKey: String,
});
// const { valueInput } = toRefs(props);
const emit = defineEmits(["inputData"]);
function handlerInput({ target }) {
  emit("inputData", target.value);
  //   valueInput.value = target.value;
}
// const avatars = group.value.followers.map((f) => f.avatar);
</script>

<style lang="less" scoped>
@import "./assets/styles/global.less";
.inputBox {
  display: inline-block;
  border: 1px solid @blockColor;
  border-radius: @blockRadius;
  padding: @blockPadding;
  background-color: @blockColor;
  &__label {
    display: block;
    color: @blockTextColor;
    font-size: 16px;
    font-weight: 500;
  }
  &__input {
    border: 1px solid @blockTextColor;
    padding: 5px 7px;
    font-size: 16px;
    color: @blockTextColor;
    font-weight: 500;
    border-radius: 8px;
    outline: none;
  }
}
</style>
