import { ButtonProps } from "@merikle-ui/components/button/src/button";
import { computed } from "vue";

export const useButtonCustomStyle = (props: ButtonProps) => {
  return computed(() => {
    //查一下什么意思
    let styles: Record<string, string> = {};
    const buttonColor = props.color;
    if (buttonColor) {
      //有按钮颜色
      styles["backgroundColor"] = buttonColor;
    }
    console.log(styles);

    return styles;
  });
};
