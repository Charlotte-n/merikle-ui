import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Icon from "@merikle-ui/components/icon/index.ts";

const Plugin = [Icon];
const app = createApp(App);
Plugin.forEach((item) => {
  app.use(item);
});

app.mount("#app");
