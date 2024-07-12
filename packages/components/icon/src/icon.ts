//写类型的
import { Component, ExtractPropTypes, PropType } from "vue";
export const iconPropType = [String, Object, Function];

export const IconProps = {
  size: [Number, String] as PropType<number | string>,
  color: String,
  style: Object,
  icon:String,
  customClass:String
} as const;
//设置为只读

export type iconProps = ExtractPropTypes<typeof IconProps>;
