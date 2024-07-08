import _Col from  './src/col.vue'
import {withInstall} from "@merikle-ui/utils/withinstall";

export const MCol = withInstall(_Col)
export  * from '@merikle-ui/components/col/src/col'

declare module "vue" {
    export interface GlobalComponents {
        MCol: typeof MCol;
    }
}
