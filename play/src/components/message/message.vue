<template>
  <m-button :plain="true" @click="open2">Success</m-button>
  <m-button :plain="true" @click="open3">Warning</m-button>
  <m-button :plain="true" @click="open1">Message</m-button>
  <m-button :plain="true" @click="open4">Error</m-button>
</template>

<script lang="ts" setup>
import  { MMessage } from '@merikle-ui/components/message'

const open1 = () => {
  MMessage('This is a message.')
}
const open2 = () => {
  MMessage({
    message: 'Congrats, this is a success message.',
    // type: 'success',
  })
}
const open3 = () => {
  MMessage({
    message: 'Warning, this is a warning message.',
    // type: 'warning',
  })
}
const open4 = () => {
  MMessage.error('Oops, this is a error message.')
}
</script>
