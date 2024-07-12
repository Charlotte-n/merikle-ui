import {ComponentInternalInstance, VNode} from "vue";

export const messageType = [
    'info',
    'success',
    'warning',
    'danger',
    'error'
] as const;
//这里使用 as const 将数组转换为只读的枚举类型，这样 TypeScript 才能推断出每个元素的确切类型，而不是将整个数组视为 string[] 类型。
//然后 [number] 部分表示我们想要获取这个数组类型中所有元素的联合类型。换句话说，MessageType 是一个联合类型，包含了 messageType 数组中的所有可能值：
//type MessageType = 'info' | 'success' | 'warning' | 'danger' | 'error';
export type MessageType = (typeof messageType)[number];

export interface MessageHandler{
    close:()=>void
}
export type MessageFn = {
    (props:MessageParams):MessageHandler,
    closeAll(type?:MessageType):void
}
export  type MessageTypeFn = (props:MessageParams)=>void

export interface Message extends  MessageFn{
    success:MessageTypeFn,
    warning:MessageTypeFn,
    info:MessageTypeFn,
    error:MessageTypeFn,
    danger:MessageTypeFn
}

export interface MessageProps{
    id:string;
    message?:string | VNode;
    duration?:number;
    type?:string;
    center?:boolean;
    showClose?:boolean;
    offset?:number;
    zIndex:number;
    transitionName?:string;
    onDestory():void;
    customClass?:string;
}
//Partial对象的属性弄成可选，Omit是剔除MessageProps中的id属性。
export type MessageOptions = Partial<Omit<MessageProps, "id">>
export type MessageParams = string | VNode | MessageOptions

export  interface MessageInstance{
    id:string;
    vnode:VNode;
    props:MessageProps;
    vm:ComponentInternalInstance;
    handler:MessageHandler;
}
export type CreateMessageProps = Omit<MessageProps, "onDestory"|"id" | "zIndex">
