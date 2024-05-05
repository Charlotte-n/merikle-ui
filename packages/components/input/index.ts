import _Input from "./src/input.vue";
import { withInstall } from "@merikle-ui/utils/withinstall";
export * from "@merikle-ui/components/input/src/input";
export const MInput = withInstall(_Input);

declare module "vue" {
  export interface GlobalComponents {
    MInput: typeof MInput;
  }
}
