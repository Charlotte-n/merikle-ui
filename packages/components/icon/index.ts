//这个是用来整合组件，最后导出组件的

import _Icon from "./src/icon.vue";
import { withInstall } from "@merikle-ui/utils/withinstall";
//对组件进行注册
const Icon = withInstall(_Icon);
export default Icon;
export * from "@merikle-ui/components/icon/src/icon";

declare module "vue" {
  export interface GlobalComponents {
    MIcon: typeof Icon;
  }
}
