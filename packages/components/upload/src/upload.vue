<script setup lang="ts">
import UploadContent from './upload-content.vue'
import {UploadFile, uploadProps, UploadRawFile} from "@merikle-ui/components/upload/src/upload";
import {computed, ref} from "vue";
import {UploadContentProps} from "@merikle-ui/components/upload/src/uploadContent";
import UploadDrag from "@element-plus/components/upload/src/upload-drag.vue";
defineOptions({
  name: "m-upload",
  inheritAttrs: false,
});
const uploadFiles = ref([] as UploadFile[])
const findFile = (rawFile:UploadRawFile):UploadFile=>{
  return uploadFiles.value.find(res=>{
   return  res.uid === rawFile.uid
  } ) as UploadFile
}
//父组件接受uploadProps
const props = defineProps(uploadProps)
const uploadContentProps = computed<UploadContentProps>(()=>(
    {
      ...props,
      onStart:(rawFile)=>{
        //进行处理上传文件的信息
        const uploadFile:UploadFile = {
          uid:rawFile.uid,
          name:rawFile.name,
          percentage:0,
          raw:rawFile,
          size:rawFile.size,
          status:'start'
        }
        //进行文件预览,根据文件创建一个url来进行预览
        uploadFile.url = URL.createObjectURL(rawFile)
        uploadFiles.value = [...uploadFiles.value,uploadFile]
        props.onChange(uploadFile)
      },
      onProgress:(e,rawFile)=>{
        const uploadFile = findFile(rawFile)
        uploadFile.status = 'uploading'
        uploadFile.percentage = e.percentage
        props.onProgress(e,uploadFile,uploadFiles.value)
      },
      onRemove:async (rawFile)=>{
        const uploadFile = findFile(rawFile)
        const r = await props.beforeRemove(uploadFile,uploadFiles.value) as any
        if(r!==false){
          //说明可以删除
          const fileList = uploadFiles.value
          fileList.splice(fileList.indexOf(uploadFile),1)
          props.onRemove(uploadFile,uploadFiles.value)
        }
      },
      onError:(err,rawFile)=>{
        const uploadFile = findFile(rawFile)
        uploadFile.status = 'error'
        const fileList = uploadFiles.value
        fileList.splice(fileList.indexOf(uploadFile),1)
        props.onError(err,uploadFile,fileList)
      },
      onSuccess:(res,rawFile)=>{
        const uploadFile = findFile(rawFile)
        uploadFile.status = 'success'
        const fileList = uploadFiles.value
        props.onSuccess(res,uploadFile,fileList)
      }
    }
))
</script>

<template>
  <UploadContent v-bind="uploadContentProps">
    <slot></slot>
  </UploadContent>

</template>

<style scoped>

</style>
