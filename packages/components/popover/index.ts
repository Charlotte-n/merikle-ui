import _MPopOver from './src/popover.vue'
import {SRCWithInstall, withInstall} from "@merikle-ui/utils";

const MPopOver:SRCWithInstall<typeof _MPopOver> = withInstall(_MPopOver)

export * from './src/popover.ts'
declare module 'vue' {
    export interface GlobalComponents {
        MPopOver: typeof MPopOver
    }
}
