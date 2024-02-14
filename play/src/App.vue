<script setup lang="ts">
import { AddCircle } from "@vicons/ionicons5";
</script>

<template>
  <div>
    <m-icon :size="20" :color="'red'">
      <AddCircle></AddCircle>
    </m-icon>
    <div>
      <m-button class="button" :color="'red'" type="primary" :size="'small'"
        >123</m-button
      >
    </div>

    <m-button :color="'red'" type="primary" :size="'large'"></m-button>
  </div>
</template>

<style scoped>
.button {
  margin-bottom: 10px;
}
</style>
