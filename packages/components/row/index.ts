import _Row from  './src/row.vue'
import {withInstall} from "@merikle-ui/utils/withinstall";

export const  MRow = withInstall(_Row)
export * from '@merikle-ui/components/row/src/row'


declare module 'vue' {
    export interface GlobalComponents {
        MRow: typeof MRow
    }
}

