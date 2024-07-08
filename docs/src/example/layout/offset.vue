<script setup lang="ts">

</script>

<template>
  <m-row :gutter="20">
    <m-col :span="6"><div class="grid-content ep-bg-purple" style="background-color: #D3DCE6"/></m-col>
    <m-col :span="6" :offset="6">
      <div class="grid-content ep-bg-purple"  style="background-color: #D3DCE6"/>
    </m-col>
  </m-row>
  <m-row :gutter="20">
    <m-col :span="6" :offset="6">
      <div class="grid-content ep-bg-purple"  style="background-color: #D3DCE6"/>
    </m-col>
    <m-col :span="6" :offset="6">
      <div class="grid-content ep-bg-purple"  style="background-color: #D3DCE6"/>
    </m-col>
  </m-row>
  <m-row :gutter="20">
    <m-col :span="12" :offset="6">
      <div class="grid-content ep-bg-purple"  style="background-color: #D3DCE6"/>
    </m-col>
  </m-row>
</template>

<style scoped>
.m-row {
  margin-bottom: 20px;
}
.m-row:last-child {
  margin-bottom: 0;
}
.m-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
