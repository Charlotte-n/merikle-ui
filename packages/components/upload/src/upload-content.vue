<script setup lang="ts">
import {baseProps, getId, UploadFile, uploadProps, UploadRawFile} from "./upload";
import {ref} from "vue";
import {createNameSpace} from "@merikle-ui/utils/create";
import {uploadContentProps} from "@merikle-ui/components/upload/src/uploadContent";
import {httpRequest} from "@merikle-ui/components/upload/src/ajax";
import UploadDrag from "@element-plus/components/upload/src/upload-drag.vue";
const props = defineProps(uploadContentProps)
const bem = createNameSpace("upload-content.vue")
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
  console.log(files)
}
const handleClick=()=>{
  inputRef.value!.value = ''
  inputRef.value!.click()
}

</script>

<template>
<div @click="handleClick" :class="[bem.b()]">
  <template v-if="props.drag">
    <UploadDrag>
      <slot></slot>
    </UploadDrag>
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
</div>
</template>

<style scoped>

</style>
