<script setup lang="ts">
</script>

<template>
    <m-breadcrumb separator="/">
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
