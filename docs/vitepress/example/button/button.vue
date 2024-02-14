<script setup lang="ts"></script>

<template>
  <div class="flex justify-between mb-[20px]">
    <m-button type="default"> default </m-button>
    <m-button type="primary"> primary </m-button>
    <m-button type="success" color="#626aef"> success </m-button>
    <m-button type="info"> info </m-button>
    <m-button type="warning"> warning </m-button>
    <m-button type="danger"> danger </m-button>
  </div>
  <div class="flex justify-between mb-[20px]">
    <m-button type="default" round="true"> default </m-button>
    <m-button type="primary" round> primary </m-button>
    <m-button type="success" color="#626aef" round> success </m-button>
    <m-button type="info" round> info </m-button>
    <m-button type="warning" round> warning </m-button>
    <m-button type="danger" round> danger </m-button>
  </div>
  <div class="flex justify-between">
    <m-button type="default" circle="true"> default </m-button>
    <m-button type="primary" circle> primary </m-button>
    <m-button type="success" color="#626aef" circle> success </m-button>
    <m-button type="info" circle> info </m-button>
    <m-button type="warning" circle> warning </m-button>
    <m-button type="danger" circle> danger </m-button>
  </div>
</template>

<style scoped></style>
