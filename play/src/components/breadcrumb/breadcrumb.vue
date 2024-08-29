<script setup lang="ts">
import { AddCircle } from "@vicons/ionicons5";
</script>

<template>
  <m-breadcrumb separator="/" :separator-icon="AddCircle">
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
