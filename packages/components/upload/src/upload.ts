

//给每个文件进行包装,包装成一个全新的类型
import {ExtractPropTypes, Prop, PropType} from "vue";

export interface UploadFile{
    uid?:number,
    name:string,
    url?:string,
    percentage?:number,
    raw?:File,
    size?:number,
    status:string
}
export type UploadFiles = UploadFile[]

//定义props
export const baseProps = {
    FileList:{
        type:Array as PropType<UploadFiles>
    },
    action:{
        type:String,
        default:''
    },
    multiple:{
        type:Boolean,
        default:false
    },
    name:{
        type:String,
        default:'file'
    },
    accept:{
        type:String,
        default:''
    },
    method:{
        type:String,
        default:'post'
    },
    headers:{
        type:Object,
        default:()=>({})
    },
    data:{
        type:Object,
        default:()=>({})
    },
    drag:{
        type:Boolean,
        default:false
    }
} as const;



//定义其他的事件
export type UploadRawFile = File & {uid:number}
export type UploadProgressEvent = ProgressEvent & {percentage:number}
const NOOP = ()=>{}

export const uploadProps= {
    ...baseProps,
    onPreview:{
        type:Function as PropType<(file:UploadFile)=>void>,
        default:NOOP
    },
    beforeUpload:{
        type:Function as PropType<(file:UploadRawFile)=>Promise<boolean>  | boolean>,
        default:NOOP
    },
    onChange:{
        type:Function as PropType<(file:UploadFile)=>void>,
        default:NOOP
    },
    beforeRemove:{
        type:Function as PropType<(file:UploadFile,uploadFiles:UploadFiles)=>void>,
        default:NOOP
    },
    onRemove:{
        type:Function as PropType<(file:UploadFile,uploadFiles?:UploadFiles)=>void>,
        default:NOOP
    },
    onProgress:{
        type:Function as PropType<(file:UploadProgressEvent,uploadFile:UploadFile,uploadFiles:UploadFiles)=>void>,
        default:NOOP
    },
    onError:{
        type:Function as PropType<(err:any,uploadFile:UploadFile,uploadFiles:UploadFiles)=>void>,
        default:NOOP
    },
    onSuccess:{
        type:Function as PropType<(res:any,uploadFile:UploadFile,uploadFiles:UploadFiles)=>void>,
        default:NOOP
    }
} as const;
let id = 0
export const getId = ()=>id++
export type UploadProps = ExtractPropTypes<typeof uploadProps>


