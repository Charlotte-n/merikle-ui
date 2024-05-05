// 定义按钮的类型

import { iconPropType } from "@merikle-ui/components/icon";
import { ExtractPropTypes, Component } from "vue";

export const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
] as const;

export const buttonSize = ["small", "middle", "large"] as const;

// 按钮传入的props

export const buttonProp = {
  type: {
    type: String,
    validator: (
      value: "default" | "primary" | "success" | "warning" | "info" | "danger"
    ) => buttonTypes.includes(value),
    default: "default",
  },
  size: {
    type: String,
    validator: (value: "small" | "middle" | "large") =>
      buttonSize.includes(value),
    default: "middle",
  },
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  disabled: Boolean,
  loading: Boolean,
  color: String,
  style: Object,
  class: String,
  icon: Object,
};
export type ButtonProps = ExtractPropTypes<typeof buttonProp>;

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
};
export type ButtonEmits = typeof buttonEmits;
