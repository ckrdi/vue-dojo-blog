<template>
  <!-- <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  /> -->
  <input type="text" v-model="message" />
</template>

<script>
import { computed } from "@vue/runtime-core";
// export default {
//   props: {
//     title: String,
//   },
//   emits: ["update:title"],
// };
export default {
  props: {
    modelValue: String,
  },
  setup(props, { emit }) {
    const message = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });

    return { message };
  },
};
</script>

<style></style>
