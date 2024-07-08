<script setup lang="ts">

import {CloudUploadOutline} from "@vicons/ionicons5";
</script>

<template>
  <m-upload drag>
    <div>
      <m-icon :size="33">
        <CloudUploadOutline></CloudUploadOutline>
      </m-icon>
    </div>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="el-upload__tip" style="font-size: 10px">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </m-upload>
</template>

<style scoped>

</style>
