<script setup lang="ts">
import {ArrowForward} from "@vicons/ionicons5";
</script>

<template>
  <m-breadcrumb separator="/" :separator-icon="ArrowForward">
    <m-breadcrumb-item>homepage</m-breadcrumb-item>
    <m-breadcrumb-item :to="{ path: '/' }">homepage</m-breadcrumb-item>
    <m-breadcrumb-item>
      <a href="/">promotion management</a>
    </m-breadcrumb-item>
    <m-breadcrumb-item>promotion list</m-breadcrumb-item>
    <m-breadcrumb-item>promotion detail</m-breadcrumb-item>
  </m-breadcrumb>
</template>

<style scoped>

</style>
