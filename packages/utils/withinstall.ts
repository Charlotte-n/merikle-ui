import { Plugin } from "vue";

export type SRCWithInstall<T> = T & Plugin;
export const withInstall = <T>(comp: T) => {
  (comp as SRCWithInstall<T>).install = (app: any) => {
    const { name } = comp as { name: string };
    app.component(name, comp);
  };
  return comp as SRCWithInstall<T>;
};
