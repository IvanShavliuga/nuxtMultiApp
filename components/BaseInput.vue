<template>
  <div>
    <label :for="idKey"> {{ label }}</label>
    <input :id="idKey" type="text" :name="idKey" @input="handlerInput" />
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

<style></style>
