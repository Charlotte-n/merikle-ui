<script setup lang="ts">
import {ref} from "vue";

const fileList = ref<any>([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])

</script>

<template>
  <m-upload
      :FileList="fileList"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
  >
    <m-button size="small" type="primary">Click to upload</m-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </m-upload>
</template>

<style scoped>

</style>
