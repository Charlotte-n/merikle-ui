import _Tree from  '@merikle-ui/components/tree/src/tree.vue'
import {withInstall} from "@merikle-ui/utils";


export  const MTree = withInstall(_Tree)

export * from '@merikle-ui/components/tree/src/tree'
declare module 'vue' {
    export interface GlobalComponents {
        MTree: typeof MTree
    }
}
