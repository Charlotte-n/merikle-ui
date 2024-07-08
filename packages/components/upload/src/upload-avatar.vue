<script setup lang="ts">
import {createNameSpace} from "@merikle-ui/utils/create";
import {AddCircle,AddOutline} from "@vicons/ionicons5";

const bem = createNameSpace("upload-avatar")

</script>

<template>
  <div>
    <div :class="bem.b()">
<!--      中间放置一个加号-->
      <m-icon name="add" :size="18" color="#8C939D">
        <AddOutline></AddOutline>
      </m-icon>
    </div>
  </div>
</template>

<style scoped>

</style>
