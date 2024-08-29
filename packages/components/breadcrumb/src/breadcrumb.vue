<script setup lang="ts">
import {createNameSpace} from "@merikle-ui/utils";
import {PropType, provide, ref} from "vue";
import {breadcrumbKey} from "./constants";
import {MIcon} from "@merikle-ui/components";

defineOptions({
  name:'m-breadcrumb'
})
//
const props = defineProps({ separator: {
    type: String,
    default: '>',
  },
  separatorIcon: {
    type: Object as  PropType<typeof MIcon> || String,
  }})
const bem = createNameSpace('breadcrumb')
const breadcrumbRef = ref<HTMLDivElement>()
provide(breadcrumbKey,props)

</script>

<template>
<div ref="breadcrumbRef" :class="bem.b()">
  <slot></slot>
</div>
</template>

<style scoped>

</style>
