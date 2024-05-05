<script setup lang="ts">
import { AddCircle } from "@vicons/ionicons5";
import { ref } from "vue";
const hello = () => {
  console.log(123);
  alert("123");
};
const inputValue = ref();
</script>

<template>
  <div style="display: flex; margin-right: 10px; margin-top: 20px">
    <!--------------------------------------------------------------->
    <div class="icon">
      <m-icon :size="20" :color="'red'">
        <AddCircle></AddCircle>
      </m-icon>
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
      <m-upload>
        <m-button>点击上传</m-button>
      </m-upload>
    </div>
    <!------------------------------------------------------------->


  </div>

</template>

<style scoped>
.button {
  margin-bottom: 10px;
}
</style>
