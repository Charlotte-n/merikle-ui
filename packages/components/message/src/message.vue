<script setup lang="ts">
import {createNameSpace} from "@merikle-ui/utils/create";
import {MessageComInstance, MessageProps} from "@merikle-ui/components/message/src/message";
import {AddOutline,CheckmarkOutline,AlertCircle,CloseOutline} from "@vicons/ionicons5";
import {computed, onMounted, onUnmounted, ref, watch} from "vue";
import {getLastBottomOffset} from "@merikle-ui/components/message/methods";
import {useEventListener, useOffset} from "@merikle-ui/hooks";
import useZIndex from "@merikle-ui/hooks/useZIndex";
import {RenderVNode} from "@merikle-ui/utils";


defineOptions({
  name:'m-message'
})
const bem = createNameSpace('message')
const props = withDefaults(defineProps<MessageProps>(),{
  type:'info',
  duration:0,
  offset:10,
  transitionName:'fade-up'
})
const visible = ref(false)
const messageRef = ref<HTMLDivElement>()
let timer:null | number = null
const height = ref(0)


const LastBottom = computed(()=>getLastBottomOffset(props.id))
const topOffset = computed(()=>props.offset  + LastBottom.value)
const bottomOffset = computed(()=>topOffset.value  + height.value)

const {currentZIndex} = useZIndex()

const customStyle = computed(()=>({
  top:`${topOffset.value}px`,
  zIndex:currentZIndex.value
}))
function startTimer(){
  //这个计时不生效，永远不关闭
  if(props.duration === 0)return
  // timer = setTimeout(close,props.duration)as unknown as number
}
function clearTimer(){
  clearTimeout(timer as number)
}
function close(){
  visible.value = false
}
//添加监听,当点击esc就是退出
useEventListener(document,'keydown',(e: Event) => {
  const { code } = e as KeyboardEvent;
  if (code === "Escape") close();
})
onMounted(()=>{
  visible.value = true
  startTimer()
})

onUnmounted(()=>{
  messageRef.value?.removeEventListener('mouseenter',clearTimer)
  messageRef.value?.removeEventListener('mousedown',startTimer)
})
//监测消息的显示
watch(visible,(val)=>{
  if(!val)return height.value = -props.offset //让退出动画更加流畅
})

defineExpose<MessageComInstance>({
  close,
  height,
  bottomOffset,
  visible
})
</script>

<template>
  <transition :class="bem.b('fade')" @enter="height=messageRef!.getBoundingClientRect().height" @after-leave="onDestory()">
    <div v-show="visible" :id="id" ref="messageRef" :style="customStyle" :class="[
        bem.b(),
        bem.is('center',center!),
        bem.is('closeable',showClose!),
         bem.e(type),
        customClass!
    ]"
         @mouseenter="startTimer"
         @mouseleave="clearTimer">
<!--     icon根据类型判断-->
<!--      <m-icon :class="bem.e('icon')" v-if="type === 'success'">-->
<!--&lt;!&ndash;        成功&ndash;&gt;-->
<!--        <CheckmarkOutline></CheckmarkOutline>-->
<!--      </m-icon>-->
<!--      <m-icon :class="bem.e('icon')" v-if="type === 'warning'">-->
<!--&lt;!&ndash;        warning&ndash;&gt;-->
<!--        <AlertCircle></AlertCircle>-->
<!--      </m-icon>-->
<!--      <m-icon :class="bem.e('icon')" v-if="type==='error'">-->
<!--        <AddOutline></AddOutline>-->
<!--      </m-icon>-->

      <div :class="[
          bem.e('content'),

      ] ">
        <slot>
          <RenderVNode v-if="message" :vNode="message"></RenderVNode>
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
