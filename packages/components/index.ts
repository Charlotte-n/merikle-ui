import { App } from "vue";
import * as components from "./component";

//进行全局注册
const install = function (app: App) {
  Object.entries(components).forEach(([key, value]) => {
    console.log(key);
    app.component(key, value);
  });
};
export default install;
export * from "./component";
