<script setup lang="ts">
import { AddCircle ,CloudUploadOutline} from "@vicons/ionicons5";
import { ref } from "vue";
import LayOut from  './components/layout/index.vue'
import Message from "./components/message/message.vue";
import Breadcrumb from "./components/breadcrumb/breadcrumb.vue";
const hello = () => {
  console.log(123);
  alert("123");
};
const inputValue = ref();
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
  <div style="display: flex; margin-right: 10px; margin-top: 20px">
    <!--------------------------------------------------------------->
    <div class="icon">
      <m-icon :size="20" :color="'red'">
        <AddCircle></AddCircle>
      </m-icon>
    <m-icon icon="alertCircle"></m-icon>

    </div>
    <!--------------------------------------------------------------->

    <div style="margin-right: 10px">
      <m-button class="button" :color="'red'" type="primary" :size="'small'"
        >123</m-button
      >
    </div>
    <div>
      <m-button type="primary" circle disabled @click="hello">
        123
        <AddCircle></AddCircle>
      </m-button>
    </div>
    <div>
      <m-button loading> </m-button>
    </div>
    <!------------------------------------------------------------------>
    <div>
      <m-input
        placeholder="请输入密码"
        :showPassword="true"
        v-model="inputValue"
        :clearable="true"
      >
        <template #prepend> Merikle </template>
        <template #prefixIcon>
          <m-icon :size="20" :color="'red'">
            <AddCircle></AddCircle>
          </m-icon>
        </template>
        <template #suffixIcon>
          <m-icon :size="20" :color="'red'">
            <AddCircle></AddCircle>
          </m-icon>
        </template>
        <template #append> Merikle </template>
      </m-input>
    </div>
    <!------------------------------------------------------------------->
<!-------------------------上传组件------------------------------------>
    <div>
      <m-upload :FileList="fileList">
        <m-button size="small" type="primary">Click to upload</m-button>
        <template #tip>
            <div class="m-upload__tip">
              jpg/png files with a size less than 500KB.
            </div>
        </template>
      </m-upload>
    </div>
<!--    上传头像组件-->
    <div>
      <m-upload :show-file-list="false"></m-upload>
    </div>

<!--    拖拽上传-->
    <div>
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
    </div>
    <!------------------------------------------------------------->
<!--基础布局-->
  </div>
  <div>
    <LayOut></LayOut>
  </div>
<!--  Message-->
  <Message></Message>
<!--  面包屑导航-->
<Breadcrumb></Breadcrumb>
</template>

<style scoped>
.button {
  margin-bottom: 10px;
}
</style>
