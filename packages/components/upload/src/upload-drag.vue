<script setup lang="ts">
import {ref} from "vue";
import {createNameSpace} from "@merikle-ui/utils/create";
const isOver = ref(false)
const emits = defineEmits({})
const bem = createNameSpace('upload-drag')
const onDragover = ()=>{
  isOver.value = true
}
const onDrop = (e:DragEvent)=>{
  e.stopPropagation()
  emits('file',Array.from(e.dataTransfer!.files))
}

</script>

<template>
<div :class="bem.b('')" @dragover.prevent="onDragover" @dragleave.prevent="$event=>isOver = false" @drop.prevent="onDrop">
  <slot></slot>
</div>
</template>

<style scoped>

</style>
