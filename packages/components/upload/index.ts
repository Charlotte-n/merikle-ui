//这个是用来整合组件，最后导出组件的
import _Upload from "./src/upload-content.vue";
import { withInstall } from "@merikle-ui/utils/withinstall";

//对组件进行注册
export const MUpload = withInstall(_Upload);
export * from "@element-plus/components/upload/src/upload-content.vue";
export default MUpload;

declare module "vue" {
    export interface GlobalComponents {
        MUpload: typeof MUpload;
    }
}
