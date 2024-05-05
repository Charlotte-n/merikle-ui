<script lang="ts" setup>
import {InputEmit, InputProp} from "@merikle-ui/components/input/src/input";
import {createNameSpace} from "@merikle-ui/utils/create";
import {computed, nextTick, onMounted, ref, useAttrs, useSlots, watch} from "vue";

const bem = createNameSpace("input");
const props = defineProps(InputProp);
const emits = defineEmits(InputEmit);
const attrs = useAttrs()
//获取外部的插槽
const slots = useSlots();
defineOptions({
  name: "m-input",
  inheritAttrs: false,
})

//监控变化
watch(() => props.modelValue, () => {
  setNativeValue()
})
const inputRef = ref<HTMLInputElement | null>(null)

//重新进行赋值
const setNativeValue = () => {
  const inputEle = inputRef.value
  if (!inputRef) return
  inputEle!.value = String(props.modelValue)
}
onMounted(() => {
  setNativeValue()
})

//绑定input事件,实现双向绑定
const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emits('input', value)
  emits('update:modelValue', value)
}
const handleChange = (e: Event) => {
  emits('change', (e.target as HTMLInputElement).value)
}
const handleFocus = (e: FocusEvent) => {
  emits('focus', e)
}
const handleBlur = (e: FocusEvent) => {
  emits('blur', e)
}
//聚集焦点
const focus = async ()=>{
  await nextTick()
  inputRef.value!.focus()
}

//是否要显示密码
const passwordVisible = computed(()=>{
  return props.modelValue&&props.showPassword&&!props.disabled&&!props.readonly
})
const isShowPassword = ref(false)
const togglePassword = ()=>{
  isShowPassword.value = !isShowPassword.value
  focus()
}
//是否显示删除
const clearVisible = computed(()=>{
  return props.modelValue&&props.clearable&&!props.disabled&&!props.readonly
})
const isShowClear = ref(false)
const Clear  = ()=>{
  emits('change','')
  emits('update:modelValue','')
  emits('clear')
  focus()
}
</script>

<template>
  <div :class="[bem.b()]">
    <div :class="[bem.e('group')]">
      <!--    做input的组合,InputGroup-->
      <div v-if="slots.prepend" :class="[bem.be('group','prepend')]">
        <slot name="prepend"></slot>
      </div>

      <!--    做里面的input-->
      <div :class="[bem.e('wrapper')]">
        <!--      前缀图标-->
        <span v-if="slots.prefixIcon" :class="[bem.e('prefix')]">
        <slot name="prefixIcon"></slot>
      </span>
        <input
            ref="inputRef"
            :class="bem.e('inner')"
            :disabled="disabled"
            :placeholder="placeholder"
            :readonly="props.readonly"
            :type="props.showPassword?(isShowPassword?'text':'password'):type"
            v-bind="attrs"
            @blur="handleBlur"
            @change="handleChange"
            @focus="handleFocus"
            @input="handleInput">
        </input>
        <!--      后缀图标-->
        <span v-if="slots.suffixIcon" :class="[bem.e('suffix')]">
        <slot name="suffixIcon"></slot>
        <m-icon v-if="passwordVisible">
         <span @click="togglePassword" :style="{color:'red',cursor:'pointer'}"> x</span>
        </m-icon>
          <m-icon v-if="clearVisible">
         <span @click="Clear" :style="{color:'red',cursor:'pointer'}"> x</span>
        </m-icon>
      </span>
      </div>
      <div v-if="slots.append" :class="[bem.be('group','append')]">
        <slot name="append"></slot>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
