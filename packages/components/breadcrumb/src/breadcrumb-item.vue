<script setup lang="ts">
import {createNameSpace} from "@merikle-ui/utils";
import {getCurrentInstance, inject, onMounted, ref} from "vue";
import {Router} from "vue-router";
import {breadcrumbKey} from "@merikle-ui/components/breadcrumb/src/constants";
import {breadcrumbItemProps} from "@merikle-ui/components/breadcrumb/src/breadcrumd-item";

defineOptions({
  name: 'm-breadcrumb-item'
})
const props = defineProps(breadcrumbItemProps)
const bem = createNameSpace('breadcrumb-item')
const breadcrumbContext = inject(breadcrumbKey)
const link = ref<HTMLSpanElement>()

const instance = getCurrentInstance()!
const router = instance.appContext.config.globalProperties.$router as Router
function handleClick(){
  if(!props.to || !props.replace)return
  props.replace?router.replace(props.to):router.push(props.to)
}
onMounted(()=>{
  console.log(breadcrumbContext,"我的值为")
})
</script>

<template>
<span :class="bem.e('item')">
  <span ref="link" :class="[bem.e('inner')]" @click="handleClick">
    <slot></slot>
  </span>
  <template v-if="breadcrumbContext!.separator" :class="bem.e('separator')">
    <m-icon >
    <component :is="breadcrumbContext!.separatorIcon"></component>
  </m-icon>
  </template>
  <span v-else :class="bem.e('separator')">
    {{breadcrumbContext?.separator}}
  </span>
</span>
</template>

<style scoped>

</style>
