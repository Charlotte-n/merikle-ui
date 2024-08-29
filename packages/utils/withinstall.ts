import { Plugin } from "vue";
import { NOOP } from '@vue/shared'
export type SRCWithInstall<T> = T & Plugin;
export const withInstall = <T,E extends Record<string,any>>(comp: T,extra?:E) => {
  (comp as SRCWithInstall<T>).install = (app: any) => {
    const { name } = comp as { name: string };
    app.component(name, comp);
  };

  if(extra){
    for(const [key,value] of Object.entries(extra)){
      (comp as any)[key] = value
    }
  }
  return comp as SRCWithInstall<T>;
};


export const withInstallFunction = <T>(fn:T,name:string)=>{
  (fn as SRCWithInstall<T>).install = (app:any)=>{
    app.config.globalProperties[name] = fn
  }
  return fn as SRCWithInstall<T>
}


export const withNoopInstall = <T>(component: T) => {
  ;(component as SRCWithInstall<T>).install = NOOP
  console.log(component)
  return component as SRCWithInstall<T>
}
