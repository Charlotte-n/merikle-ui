import {ExtractPropTypes} from "vue";
import type Row from './row.vue'
export const RowJustify = [
    'start',
    'center',
    'end',
    'space-between',
    'space-around',
    'space-evenly'
] as const
export const RowAlign = [
    'top',
    'middle',
    'bottom'
] as const
export const rowProps = {
    gutter:{
        type:Number,
        default:0
    },
    tag:{
        type:String,
        default: 'div',

    },
    justify:{
        type:String,
        default:'start',
        values:RowJustify,
    },
    align:{
        type:String,
        values:RowAlign
    }
} as const
export type  RowProps = ExtractPropTypes<typeof rowProps>
export  type RowInstance = InstanceType<typeof Row>
