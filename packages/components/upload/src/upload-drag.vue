<script setup lang="ts">
import {ref} from "vue";
const isOver = ref(false)
const emits = defineEmits({})
const onDragover = ()=>{
  isOver.value = true
}
const onDrop = (e:DragEvent)=>{
  e.stopPropagation()
  emits('file',Array.from(e.dataTransfer.files))
}

</script>

<template>
<div @dragover.prevent="onDragover" @dragleave.prevent="$event=>isOver = false" @drop.prevent="onDrop">
  <slot></slot>
</div>
</template>

<style scoped>

</style>
