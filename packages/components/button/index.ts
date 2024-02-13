import _Button from "./src/button.vue";
import { withInstall } from "@merikle-ui/utils/withinstall";

const Button = withInstall(_Button);

export default Button;
export * from "@merikle-ui/components/button/src/button";
declare module "vue" {
  export interface GlobalComponents {
    MButton: typeof Button;
  }
}
