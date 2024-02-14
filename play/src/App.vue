<script setup lang="ts">
import { AddCircle } from "@vicons/ionicons5";
const hello = () => {
  console.log(123);
  alert("123");
};
</script>

<template>
  <div style="display: flex; margin-right: 10px; margin-top: 20px">
    <m-icon :size="20" :color="'red'">
      <AddCircle></AddCircle>
    </m-icon>
    <div style="margin-right: 10px">
      <m-button class="button" :color="'red'" type="primary" :size="'small'"
        >123</m-button
      >
    </div>
    <div>
      <m-button
        type="primary"
        :size="'large'"
        disabled
        @click="hello"
      ></m-button>
    </div>
  </div>
</template>

<style scoped>
.button {
  margin-bottom: 10px;
}
</style>
