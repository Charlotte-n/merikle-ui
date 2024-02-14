// 定义按钮的类型

import { ExtractPropTypes } from "vue";

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
  color: String,
  style: Object,
  class: String,
};
export type ButtonProps = ExtractPropTypes<typeof buttonProp>;
