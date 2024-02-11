//写类型的

import { ExtractPropTypes, PropType } from "vue";

export const IconProps = {
  size: [Number, String] as PropType<number | string>,
  color: String,
} as const;
//设置为只读

export type iconProps = ExtractPropTypes<typeof IconProps>;
