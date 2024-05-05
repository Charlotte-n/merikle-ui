import _Button from "./src/button.vue";
import { withInstall } from "@merikle-ui/utils/withinstall";

export const MButton = withInstall(_Button);
export default MButton;
export * from "@merikle-ui/components/button/src/button";

declare module "vue" {
  export interface GlobalComponents {
    MButton: typeof MButton;
  }
}
