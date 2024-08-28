import {
    CreateMessageProps,
    Message,
    MessageFn, MessageHandler,
    MessageInstance,
    MessageParams,
    messageType,
    MessageType
} from "@merikle-ui/components/message/src/message";
import {findIndex, isString, set} from "lodash";
import { h, isVNode, render} from "vue";
import MessageConstructor from './src/message.vue'
import useZIndex from "@merikle-ui/hooks/useZIndex"
import {isFunction} from "lodash-es";

const {nextZIndex} = useZIndex(0)
let seed = 1
const instances:MessageInstance[] = []//实例的数量
const messageDefault = {
    type:'info',
    duration:3000,
    offset:10,
    transitionName:'fade-up'
} as const
/**
 * 将这个传入的MessageParams转化为CreateMessageProps形式
 * @param options
 */
const normalizeOption = (options:MessageParams):CreateMessageProps=>{
    const result = !options || isString(options) || isVNode(options) || isFunction(options)?{
        message:options
    }:options

    return  {
        ...messageDefault,
        ...result
    } as CreateMessageProps
}


/**
 * 总结来说，createMessage 函数的作用是动态地创建一个消息组件，并将其渲染到指定的 DOM 元素中。该函数通过处理传入的参数和选项，生成一个可交互的消息提示，包括自定义的关闭行为和销毁逻辑，以防止内存泄漏。
 * @param options
 */
const createMessage = (options:CreateMessageProps):MessageInstance=>{
    const id = `message_${seed++}`
    const container = document.createElement('div')
    const destory = ()=>{
        const index = findIndex(instances,{id})
        if(index === -1)return
        instances.splice(index,1)
        render(null,container)
    }
    const props= {
        ...options,
        id,
        onDestory:destory,
        zIndex:nextZIndex() as number
    }
    //创建节点
    const vnode = h(MessageConstructor,props)
    render(vnode, container)
    //显示在页面上
    document.body.appendChild(container.firstElementChild!);
    //这个 TypeScript 函数的作用是获取一个虚拟节点 (vnode) 的组件实例 (vm)。
    const vm = vnode.component!
    // 这样，父组件或者其他可以访问到这个组件的地方，就可以通过 vm.exposed.close 来调用这个方法了。在 Vue 3 中，vm 实例是组件的公共实例，而 exposed 属性就是这个实例上的一个属性，它保存了 setup 函数中通过 defineExpose 明确暴露出来的东西。
    const handler: MessageHandler = {
        close: () => vm.exposed!.close()
    };
    const instance:MessageInstance = {
        id,
        vnode,
        vm,
        props:(vnode.component as any).props,
        handler
    }
    instances.push(instance)
    return instance
}

export const message:MessageFn & Partial<Message> = (opts)=>{
    const normalize = normalizeOption(opts)
    const Message = createMessage(normalize)
    return Message.handler
}

export const closeAll = (type?:MessageType)=>{
    for(let instance of instances){
        if(!type || type === instance.props.type){
            instance.handler.close()
        }
    }
}

//实现message.error(),message.success()
/**
 * messageTypes.forEach((type) => {
 *   message[type] = (options = {}, appContext) => {
 *     const normalized = normalizeOptions(options)
 *     return message({ ...normalized, type }, appContext)
 *   }
 * })
 */
for(let type of messageType){

    set(message,type,(options:MessageParams)=>{
        const normalized = normalizeOption(options)
        return message({...normalized,type})
    })
}

//TODO:出错了，查找
export const getLastBottomOffset = (id:string)=>{
    const idx = instances.findIndex((instance) => {
        return instance.id == id
    })
    let prev:any
    if (idx > 0) {
        prev = instances[idx - 1]
    }
    if (!prev) return 0
    return prev.vm.exposed!.bottom.value
}
message.closeAll = closeAll
export default message as Message
