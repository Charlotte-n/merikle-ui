import _MToolTip from './src/tooltip.vue'
import {SRCWithInstall, withInstall} from "@merikle-ui/utils";

const MToolTip:SRCWithInstall<typeof _MToolTip> = withInstall(_MToolTip)
export * from './src/tooltip.ts'


declare module 'vue' {
    export interface GlobalComponents {
        MToolTip: typeof MToolTip
    }
}
