<script setup lang="ts">
import { createNameSpace } from "@merikle-ui/utils/create";
import { buttonProp } from "@merikle-ui/components/button/src/button";
import { useButton } from "@merikle-ui/components/button/src/useButton";
import { useButtonCustomStyle } from "@merikle-ui/components/button/src/button-custom";

const bem = createNameSpace("button");
defineOptions({
  name: "m-button",
  inheritAttrs: false,
});
const prop = defineProps(buttonProp);
const { _size, _type, _class } = useButton(prop);

const style = useButtonCustomStyle(prop);
</script>

<template>
  <button
    :class="[bem.b(), bem.m(_type as unknown as string), bem.m(_size), _class]"
    :style="style"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
