<script setup lang="ts">
import { Search, AddCircle } from "@vicons/ionicons5";
</script>

<template>
  <div class="flex justify-between mb-[20px]">
    <m-button type="default"> default </m-button>
    <m-button type="primary"> primary </m-button>
    <m-button type="success"> success </m-button>
    <m-button type="info"> info </m-button>
    <m-button type="warning"> warning </m-button>
    <m-button type="danger"> danger </m-button>
  </div>
  <div class="flex justify-between mb-[20px]">
    <m-button type="default" plain> default </m-button>
    <m-button type="primary" plain> primary </m-button>
    <m-button type="success" plain> success </m-button>
    <m-button type="info" plain> info </m-button>
    <m-button type="warning" plain> warning </m-button>
    <m-button type="danger" plain> danger </m-button>
  </div>
  <div class="flex justify-between mb-[20px]">
    <m-button type="default" round="true"> default </m-button>
    <m-button type="primary" round> primary </m-button>
    <m-button type="success" round> success </m-button>
    <m-button type="info" round> info </m-button>
    <m-button type="warning" round> warning </m-button>
    <m-button type="danger" round> danger </m-button>
  </div>

  <div class="flex">
    <m-button type="primary" circle="true" class="btn">
      <m-icon size="20" color="white">
        <Search></Search>
      </m-icon>
    </m-button>
    <m-button type="primary" circle="true">
      <m-icon size="20" color="white">
        <AddCircle></AddCircle>
      </m-icon>
    </m-button>
  </div>
</template>

<style scoped>
.btn {
  margin-right: 10px;
}
</style>
