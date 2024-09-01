<script setup lang="ts">
import {onMounted, ref} from "vue";

function createData(level = 4,parentKey=''):any{
  if(!level)return []
  const arr = new Array(6 - level).fill(0)
  return arr.map((_,index)=>{
    const key = parentKey + level + index
    return {
      key,
      label:createLabel(level),
      children:createData(level - 1,key)
    }
  })
}
function createLabel(level:number):string{
  if(level === 4)return '道生一'
  if(level === 3)return '一生二'
  if(level === 2)return '二生三'
  if(level === 1)return '三生万物'
  return ''
}
const data = ref(createData(4))
onMounted(()=>{
  console.log(data)
})
</script>

<template>
<m-tree :data="data" label-field="label" key-field="key" children-field="children" :defaultExpandedKeys="['40']"></m-tree>
</template>

<style scoped>

</style>
