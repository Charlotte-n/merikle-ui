<script setup lang="ts">
import {
  AddCircle,
  Search,
  Share,
  Alert,
  CloudDownloadSharp,
  CloudUploadSharp,
} from "@vicons/ionicons5";
</script>

<template>
  <div class="flex justify-between">
    <m-button size="small" :icon="Search" type="primary"> </m-button>
    <m-button size="small" :icon="Share" type="primary"> </m-button>
    <m-button size="small" :icon="Alert" type="primary"> </m-button>
    <m-button size="small" type="primary">
      <div style="margin-right: 5px">
        <m-icon>
          <CloudDownloadSharp></CloudDownloadSharp>
        </m-icon>
      </div>
      下载
    </m-button>
    <m-button size="small" type="primary">
      上传
      <div style="margin-left: 5px">
        <m-icon>
          <CloudUploadSharp></CloudUploadSharp>
        </m-icon>
      </div>
    </m-button>
  </div>
</template>

<style lang="scss" scoped></style>
