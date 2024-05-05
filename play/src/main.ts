import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";

import "@merikle-ui/theme-chalk/src/index.scss";
import MerikleUi from "@merikle-ui/components";

const app = createApp(App);
app.use(MerikleUi as any);

app.mount("#app");
