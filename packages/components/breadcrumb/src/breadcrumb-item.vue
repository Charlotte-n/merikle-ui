<script setup lang="ts">
import {createNameSpace} from "@merikle-ui/utils";
import {computed, getCurrentInstance, inject, nextTick, onMounted, ref} from "vue";
import {breadcrumbKey} from "@merikle-ui/components/breadcrumb/src/constants";
import {breadcrumbItemProps} from "@merikle-ui/components/breadcrumb/src/breadcrumd-item";
import {useRouter,Router} from "vue-router";

defineOptions({
  name: 'm-breadcrumb-item'
})
const props = defineProps(breadcrumbItemProps)
const bem = createNameSpace('breadcrumb-item')
const breadcrumbContext = inject(breadcrumbKey)
const link = ref<HTMLSpanElement>()
const instance = getCurrentInstance()!
const router = instance.appContext.config.globalProperties.$router as Router
const breadcrumbItemRef = ref<HTMLElement>()
function handleClick(){
  if(!props.to&&!props.replace)return
  props.replace?router.replace(props.to):router.push(props.to)
}
const element = ref()
const isLasted = computed(()=>{
 return element.value && (element.value as HTMLElement).nextElementSibling === null
})
onMounted(async ()=>{
 await nextTick(()=>{
   element.value = breadcrumbItemRef.value
  })
})
</script>

<template>
<span :class="bem.e('item')" ref="breadcrumbItemRef">
  <span ref="link" :class="[bem.e('inner')]" @click="handleClick">
    <slot></slot>
  </span>
  <span  :class="bem.e('separator')" v-if="breadcrumbContext!.separatorIcon&&!isLasted">
    <m-icon>
    <component :is="breadcrumbContext!.separatorIcon"></component>
  </m-icon>
  </span>
  <span v-else :class="bem.e('separator')">
    {{!isLasted?breadcrumbContext?.separator:''}}
  </span>
</span>
</template>

<style scoped>

</style>
