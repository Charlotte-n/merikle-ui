<script setup lang="ts">
import { createNameSpace } from "@merikle-ui/utils/create";
import {
  buttonEmits,
  buttonProp,
} from "@merikle-ui/components/button/src/button";
import { useButton } from "@merikle-ui/components/button/src/useButton";
import { useButtonCustomStyle } from "@merikle-ui/components/button/src/button-custom";

const bem = createNameSpace("button");
defineOptions({
  name: "m-button",
  inheritAttrs: false,
});
const prop = defineProps(buttonProp);
const emits = defineEmits(buttonEmits);
//单独弄出来一个hook来导出一些需要的属性
const { _size, _type, _class, _round, _circle, _ref, _disabled, handleClick } =
  useButton(prop, emits);

const style = useButtonCustomStyle(prop);
//暴露出去
defineExpose({
  /** @description button html element */
  //暴露出这个方法
  ref: _ref,
  /** @description button size */
  size: _size,
  /** @description button type */
  type: _type,
  /** @description button disabled */
  disabled: _disabled,
  /** @description whether adding space */
});
</script>

<template>
  <button
    ref="_ref"
    :class="[
      bem.b(),
      bem.m(_type as unknown as string),
      bem.m(_size),
      bem.is('round', _round),
      bem.is('circle', _circle),
      bem.is('disabled', _disabled),
      _class,
    ]"
    :style="style"
    :disabled="_disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
