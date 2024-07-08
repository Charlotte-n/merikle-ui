<script setup lang="ts">
import {ColProps} from "@merikle-ui/components/col/src/col";
import {createNameSpace} from "@merikle-ui/utils/create";
import {computed, CSSProperties, inject} from "vue";
import {isNumber} from "@merikle-ui/utils/isNumber";
import {rowContextKey} from "@merikle-ui/components/row/src/constants";
defineOptions({
  name:'MCol'
})
const bem = createNameSpace("col");
const props = withDefaults(defineProps<ColProps>(),{
  span:24,
  offset:0,
  push:0,
  pull:0,
  tag:'div'
})

const ColCls = computed(()=>{
  const classes:string[] = []
  const pos = ['span','offset','push','pull'] as const
  pos.forEach((prop)=>{
    const size = props[prop]
    //添加classes
    if(isNumber(size)){
      if(prop === 'span')classes.push(bem.b(`${props[prop]}`))
      else if(size > 0)classes.push(bem.b(`${prop}-${props[prop]}`))
    }
    //添加gutter
    if(gutter.value){
      classes.push(bem.is('guttered',true))
    }
  })
  return [classes,bem.b()]
})
const {gutter} = inject(rowContextKey,{gutter:computed(()=>0)})
const style = computed(()=>{
  const styles:CSSProperties = {}
  if(gutter.value){
    styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`
  }
  return styles
})

</script>

<template>
<component :is="tag" :class="ColCls" :style="style">
  <slot></slot>
</component>
</template>

<style scoped>

</style>
