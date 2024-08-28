import {SRCWithInstall, withInstall, withNoopInstall} from "@merikle-ui/utils";
import _Breadcrumb  from "@merikle-ui/components/breadcrumb/src/breadcrumb.vue";
import _BreadcrumbItem from "@merikle-ui/components/breadcrumb/src/breadcrumb-item.vue";

export const MBreadcrumb= withInstall(_Breadcrumb,{
    _BreadcrumbItem
})
export default MBreadcrumb
export const MBreadcrumbItem: SRCWithInstall<typeof _BreadcrumbItem> = withNoopInstall(_BreadcrumbItem)
export * from './src/breadcrumb'
export * from './src/breadcrumd-item'
export * from './src/constants'
export type {BreadcrumbItemInstance,BreadcrumbInstance} from './src/instance'

declare module 'vue' {
    export interface GlobalComponents {
        MBreadcrumb: typeof MBreadcrumb;
        MBreadcrumbItem: typeof MBreadcrumbItem;
    }
}


