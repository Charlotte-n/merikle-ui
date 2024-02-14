import { computed } from "vue";
import {
  buttonProp,
  ButtonProps,
} from "@merikle-ui/components/button/src/button";

export const useButton = (props: ButtonProps) => {
  const _size = computed(() => props.size);
  const _type = computed(() => props.type);
  const _class = computed(() => props.class);

  return {
    _size,
    _type,
    _class,
  };
};
