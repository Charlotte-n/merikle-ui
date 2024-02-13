import { ButtonProps } from "@merikle-ui/components/button/src/button";
import { InjectionKey } from "vue";

export interface ButtonGroupContext {
  size?: ButtonProps["size"];
  type?: ButtonProps["type"];
}
export const buttonGroupContextKey: InjectionKey<ButtonGroupContext> = Symbol(
  "buttonGroupContextKey",
);
