<script setup lang="ts">
import {createNameSpace} from "@merikle-ui/utils/create";
import {MessageProps} from "@element-plus/components/message/src/message";
import {AddOutline,CheckmarkOutline,AlertCircle,CloseOutline} from "@vicons/ionicons5";
import {onMounted, ref} from "vue";


defineOptions({
  name:'m-message'
})
const bem = createNameSpace('message')
const props = withDefaults(defineProps<MessageProps>(),{
  type:'info',
  duration:3000,
  offset:10,
  transitionName:'fade-up'
})
const visible = ref(false)
const messageRef = ref<HTMLDivElement>()
let timer:null | number = null
function startTimer(){
  //这个计时不生效，永远不关闭
  if(props.duration === 0)return
  timer = setTimeout(close,props.duration)as unknown as number
}
function clearTimer(){
  clearTimeout(timer as number)
}
function close(){
  visible.value = false
}
onMounted(()=>{
  visible.value = true
  startTimer()
})

defineExpose({
  close
})
</script>

<template>
  <transition :class="bem.b('fade')" @before-leave="" @after-leave="onDestory()">
    <div v-show="visible" :id="id" ref="messageRef" :class="[
        bem.b(),
        bem.is('center',center!),
        bem.is('closeable',showClose!),
        customClass!
    ]"
         @mouseenter="startTimer"
         @mouseleave="clearTimer">
<!--     icon根据类型判断-->
      <m-icon :class="bem.e('icon')" v-if="type === 'success'">
<!--        成功-->
        <CheckmarkOutline></CheckmarkOutline>
      </m-icon>
      <m-icon :class="bem.e('icon')" v-if="type === 'warning'">
<!--        warning-->
        <AlertCircle></AlertCircle>
      </m-icon>
      <m-icon :class="bem.e('icon')" v-if="type==='error'">
        <AddOutline></AddOutline>
      </m-icon>

      <div :class="bem.e('content')">
        <slot>
          <render-vnode v-if="message" :vNode="message"></render-vnode>
        </slot>
      </div>
      <div :class="bem.e('close')" v-if="showClose" @click="close">
        <m-icon>
         <CloseOutline></CloseOutline>
        </m-icon>
      </div>
    </div>
  </transition>
</template>

<style scoped>

</style>
