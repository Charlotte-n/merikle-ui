import message from "@merikle-ui/components/message/methods";
import { withInstallFunction} from "@merikle-ui/utils";

export * from './src/message'

export const MMessage = withInstallFunction(message,"$message")

declare module 'vue'{
    export interface GlobalComponents{
        MMessage:typeof MMessage
    }
}
