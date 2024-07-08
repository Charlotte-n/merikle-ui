<script setup lang="ts">
import { rowProps } from './row'
import {createNameSpace} from "@merikle-ui/utils/create";
import {computed, CSSProperties, provide} from "vue";
import {rowContextKey} from "@merikle-ui/components/row/src/constants";
const props = defineProps(rowProps)

defineOptions({
  name: 'MRow'
})
const bem = createNameSpace('row')
const gutter = computed(()=>props.gutter)
provide(rowContextKey,{
  gutter
})

const rowCls = computed(()=>[
    bem.b(),
    bem.is(`justify-${props.justify}`,props.justify !=='start'),
    //转化为布尔值
    bem.is(`align-${props.align}`,!!props.align)
])

const style = computed(()=>{
  const styles:CSSProperties = {}
  if(!props.gutter){
    return props
  }
  //在网格系统中，gutter 通常表示列之间的间距。如果直接设置列的外边距为正值，会导致列在容器中错位。通过设置负的外边距，可以将多余的间距移到容器的两侧，从而保持网格列之间的一致间距。
  styles.marginLeft = styles.marginRight = `-${props.gutter / 2}px`
  return styles
})

</script>

<template>
  <component :is="tag" :class="rowCls" :style="style">
    <slot></slot>
  </component>
</template>

<style scoped>

</style>
