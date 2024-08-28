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
    children?:TreeOptions[],
    isLeaf?:boolean,
    [key:string]:unknown
}

export const treeProps = {
    data:{
        type:Array as PropType<TreeOptions[]>,
        required:true
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
    }
} as const
//可选加提取这个Props
export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>

