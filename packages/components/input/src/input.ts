import { ExtractPropTypes } from "vue";

export const InputProp = {
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: String,
    default: "",
  },
  maxlength: {
    type: String || Number,
  },
  minlength: {
    type: String || Number,
  },
  placeholder: {
    type: String,
    default: "",
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
} as const;
export type InputProps = ExtractPropTypes<typeof InputProp>;
const isString = (value: any) => {
  return typeof value === "string";
};

//绑定的事件
export const InputEmit = {
  "update:modelValue": (value: string) => String(value),
  change: (value: string) => isString(value),
  input: (value: string) => isString(value),
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  clear: () => true,
};

export type InputEmits = typeof InputEmit;
