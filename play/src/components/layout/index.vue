<script setup lang="ts">

</script>

<template>
  <m-row>
    <m-col :span="24"><div class="grid-content  bg-[black]" style="background-color: #99A9BF"/></m-col>
  </m-row>
  <m-row>
    <m-col :span="12">
      <div class="grid-content" style="background-color: #D3DCE6"></div>
    </m-col>
    <m-col :span="12">
      <div class="grid-content" style="background-color: #E5E9F2"></div>
    </m-col>
  </m-row>
  <m-row>
    <m-col :span="8">
      <div class="grid-content" style="background-color: #D3DCE6"></div>
    </m-col>
    <m-col :span="8">
      <div class="grid-content" style="background-color: #E5E9F2"></div>
    </m-col>
    <m-col :span="8">
      <div class="grid-content" style="background-color:#D3DCE6 "></div>
    </m-col>
  </m-row>
  <m-row>
    <m-col :span="6">
      <div class="grid-content" style="background-color: #D3DCE6"></div>
    </m-col>
    <m-col :span="6">
      <div class="grid-content" style="background-color: #E5E9F2"></div>
    </m-col>
    <m-col :span="6">
      <div class="grid-content" style="background-color:#D3DCE6 "></div>
    </m-col>
    <m-col :span="6">
      <div class="grid-content" style="background-color:#E5E9F2 "></div>
    </m-col>
  </m-row>
  <m-row>
    <m-col :span="4">
      <div class="grid-content" style="background-color: #D3DCE6"></div>
    </m-col>
    <m-col :span="4">
      <div class="grid-content" style="background-color: #E5E9F2"></div>
    </m-col>
    <m-col :span="4">
      <div class="grid-content" style="background-color:#D3DCE6 "></div>
    </m-col>
    <m-col :span="4">
      <div class="grid-content" style="background-color:#E5E9F2 "></div>
    </m-col>
    <m-col :span="4">
      <div class="grid-content" style="background-color:#D3DCE6 "></div>
    </m-col>
    <m-col :span="4">
      <div class="grid-content" style="background-color:#E5E9F2 "></div>
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
