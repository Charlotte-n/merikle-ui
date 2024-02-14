import { computed, ref, SetupContext } from "vue";
import {
  ButtonEmits,
  ButtonProps,
} from "@merikle-ui/components/button/src/button";

//查一下这个类型
export const useButton = (
  props: ButtonProps,
  emit: SetupContext<ButtonEmits>["emit"],
) => {
  const _size = computed(() => props.size);
  const _type = computed(() => props.type);
  const _class = computed(() => props.class);
  const _round = computed(() => props.round);
  const _circle = computed(() => props.circle);
  const _disabled = computed(() => props.disabled);
  const _ref = ref<HTMLButtonElement>();

  const handleClick = (evt: MouseEvent) => {
    emit("click", evt);
  };

  return {
    _size,
    _type,
    _class,
    _round,
    _circle,
    _disabled,
    _ref,
    handleClick,
  };
};
