<script setup lang="ts">
import { createNameSpace } from "@merikle-ui/utils/create";
import { computed } from "vue";
import { buttonProp } from "@merikle-ui/components/button/src/button";
import { useButton } from "@merikle-ui/components/button/src/useButton";
import { useButtonCustomStyle } from "@merikle-ui/components/button/src/button-custom";

const bem = createNameSpace("button");
defineOptions({
  name: "m-button",
  inheritAttrs: false,
});
const prop = defineProps(buttonProp);
const { _size, _type } = useButton(prop);
console.log(_type);

const style = useButtonCustomStyle(prop);
</script>

<template>
  <div>
    <button
      :class="[bem.b(), bem.m(_type as unknown as string)]"
      :style="style"
    >
      <slot></slot>
    </button>
  </div>
</template>

<style scoped></style>
