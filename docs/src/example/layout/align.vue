<script setup lang="ts">

</script>

<template>
  <m-row class="row-bg">
    <m-col :span="6"><div class="grid-content ep-bg-purple" style="background-color: #D3DCE6"/></m-col>
    <m-col :span="6"><div class="grid-content ep-bg-purple-light" style="background-color: #E5E9F2"/></m-col>
    <m-col :span="6"><div class="grid-content ep-bg-purple" style="background-color: #D3DCE6"/></m-col>
  </m-row>
  <m-row class="row-bg" justify="center">
    <m-col :span="6"><div class="grid-content ep-bg-purple" style="background-color: #D3DCE6"/></m-col>
    <m-col :span="6"><div class="grid-content ep-bg-purple-light" style="background-color: #E5E9F2"/></m-col>
    <m-col :span="6"><div class="grid-content ep-bg-purple" style="background-color: #D3DCE6"/></m-col>
  </m-row>
  <m-row class="row-bg" justify="end">
    <m-col :span="6"><div class="grid-content ep-bg-purple" style="background-color: #D3DCE6"/></m-col>
    <m-col :span="6"><div class="grid-content ep-bg-purple-light" style="background-color: #E5E9F2"/></m-col>
    <m-col :span="6"><div class="grid-content ep-bg-purple" style="background-color: #D3DCE6"/></m-col>
  </m-row>
  <m-row class="row-bg" justify="space-between">
    <m-col :span="6"><div class="grid-content ep-bg-purple" style="background-color: #D3DCE6"/></m-col>
    <m-col :span="6"><div class="grid-content ep-bg-purple-light" style="background-color: #E5E9F2"/></m-col>
    <m-col :span="6"><div class="grid-content ep-bg-purple" style="background-color: #D3DCE6"/></m-col>
  </m-row>
  <m-row class="row-bg" justify="space-around">
    <m-col :span="6"><div class="grid-content ep-bg-purple" style="background-color: #D3DCE6"/></m-col>
    <m-col :span="6"><div class="grid-content ep-bg-purple-light" style="background-color: #E5E9F2"/></m-col>
    <m-col :span="6"><div class="grid-content ep-bg-purple" style="background-color: #D3DCE6"/></m-col>
  </m-row>
  <m-row class="row-bg" justify="space-evenly">
    <m-col :span="6"><div class="grid-content ep-bg-purple" style="background-color: #D3DCE6"/></m-col>
    <m-col :span="6"><div class="grid-content ep-bg-purple-light" style="background-color: #E5E9F2"/></m-col>
    <m-col :span="6"><div class="grid-content ep-bg-purple" style="background-color: #D3DCE6" /></m-col>
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
