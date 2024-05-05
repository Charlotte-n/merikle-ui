//这个是用来整合组件，最后导出组件的
import _Icon from "./src/icon.vue";
import { withInstall } from "@merikle-ui/utils/withinstall";

//对组件进行注册
export const MIcon = withInstall(_Icon);
export default MIcon;
export * from "@merikle-ui/components/icon/src/icon";

declare module "vue" {
  export interface GlobalComponents {
    MIcon: typeof MIcon;
  }
}
