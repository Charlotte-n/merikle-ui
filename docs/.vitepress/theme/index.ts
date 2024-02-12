// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import MIcon from "@merikle-ui/components/icon";
import "@merikle-ui/theme-chalk/src/index.scss";

import {
  AntDesignContainer,
  ElementPlusContainer,
  NaiveUIContainer,
} from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import "uno.css";
import "./style.css";

console.log(MIcon);
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.use(MIcon);

    app.component("demo-preview", NaiveUIContainer);
  },
} satisfies Theme;
