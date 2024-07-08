<script setup lang="ts">
import {baseProps, getId, UploadFile, uploadProps, UploadRawFile} from "./upload";
import {onMounted, ref} from "vue";
import {createNameSpace} from "@merikle-ui/utils/create";
import {uploadContentProps} from "@merikle-ui/components/upload/src/uploadContent";
import {httpRequest} from "@merikle-ui/components/upload/src/ajax";
import UploadDrag from "@merikle-ui/components/upload/src/upload-drag.vue";
import UploadAvatar from "@merikle-ui/components/upload/src/upload-avatar.vue";
const props = defineProps(uploadContentProps)
const bem = createNameSpace("upload")
const inputRef = ref<HTMLInputElement>()
const upload = async (rawFile:UploadRawFile)=>{
  //先清空输入框
  inputRef.value!.value = ''
  let result = await props.beforeUpload(rawFile)
  if(result === false)return props.onRemove(rawFile as any)
  //进行上传文件
  const {method,action,name,headers,data} = props
  httpRequest({
    method,
    name,
    file:rawFile,
    action,
    headers,
    data,
    onError(e) {

    },
    onSuccess(e) {

    },
    onProgress(e) {

    },
  })
}
const handleChange = (e:Event)=>{
  const files = (e.target as HTMLInputElement).files as any
  for(let i = 0;i < files.length;i++){
    const rawFile = (e.target as HTMLInputElement).files as any
    rawFile.uid = getId()
    //上传之前
    props.onStart(rawFile)
    upload(rawFile)
  }
}
const handleClick=()=>{
  inputRef.value!.value = ''
  inputRef.value!.click()
}

//获取插槽
const slots = defineSlots()

</script>

<template>
<div @click="handleClick" :class="[bem.b()]">
  <template v-if="props.drag">
    <UploadDrag>
      <slot></slot>
    </UploadDrag>
  </template>
  <template v-else-if="!(props.showFileList)">
<!--    显示上传头像组件-->
<!--    是否显示头像上传组件-->
    <div style="width: 30px;height: 30px">
      <slot name="img"></slot>
    </div>
    <UploadAvatar v-if="!slots.img"></UploadAvatar>
  </template>
  <template v-else>
    <slot></slot>
  </template>
  <input
    type="file"
    :name="props.name"
    :accept="props.accept"
    :method="props.method"
    :multiple="props.multiple"
    @change="handleChange"
    ref="inputRef"
  >
  </input>
<!--  显示提示文字-->
    <slot name="tip"></slot>
  <!--  显示上传的文件列表-->
  <div>
    <div v-for="item in props.FileList" :key="item.uid" :class="[bem.e('file')]">
      {{item.name}}
    </div>
  </div>
</div>
</template>

<style scoped>

</style>
