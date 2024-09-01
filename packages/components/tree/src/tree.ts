import {ExtractPropTypes, PropType} from "vue";

type Key = string | number

export interface TreeNode extends Required<TreeOptions>{
    level:number,
    rawNode:TreeOptions,
    isLeaf:boolean
}
export interface  TreeOptions {
    label?:Key,
    key?:Key,
    children?:TreeNode[],
    isLeaf?:boolean,
    [key:string]:unknown
}

export const treeProps = {
    data:{
        type:Array as PropType<TreeOptions[]>,
        required:true,
        default:()=>[]
    },
    labelField:{
        type:String,
        default:'label'
    },
    KeyFiled:{
        type:String,
        default:'key'
    },
    childrenField:{
        type:String,
        default:'children'
    },
    defaultExpandedKeys:{
        type:Array as PropType<Key[]>,
        default:()=>[]
    }
} as const
//可选加提取这个Props
export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>

