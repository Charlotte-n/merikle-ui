<script setup lang="ts">
import {ref} from "vue";

const imageUrl = ref('')
</script>

<template>
  <m-upload :show-file-list="false">
    <img v-if="imageUrl" :src="imageUrl" class="avatar"  alt=""/>
  </m-upload>
</template>

<style scoped>

</style>
