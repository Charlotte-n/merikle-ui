import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import Icon from "@merikle-ui/components/icon/index.ts";
import "@merikle-ui/theme-chalk/src/index.scss";

const Plugin = [Icon];
const app = createApp(App);
Plugin.forEach((item) => {
  app.use(item);
});

app.mount("#app");
