import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import Icon from "@merikle-ui/components/icon/index.ts";
import "@merikle-ui/theme-chalk/src/index.scss";
import Button from "@merikle-ui/components/button/index.ts";

const Plugin = [Icon, Button];
const app = createApp(App);
Plugin.forEach((item) => {
  app.use(item);
});

app.mount("#app");
