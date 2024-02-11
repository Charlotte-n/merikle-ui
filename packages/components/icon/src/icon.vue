<script setup lang="ts">
import { createNameSpace } from "@merikle-ui/utils/create";
import { computed } from "vue";
import { IconProps } from "@merikle-ui/components/icon/src/icon";
defineOptions({
  name: "m-icon",
  inheritAttrs: false,
});
const bem = createNameSpace("icon");
const props = defineProps(IconProps);
//计算属性，来计算一个样式来进行处理
const style = computed(() => {
  if (!props.size && !props.color) return {};
  return {
    ...(props.size ? { "font-size": props.size + "px" } : {}),
    ...(props.color ? { color: props.color } : {}),
  };
});
</script>

<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<style scoped></style>
