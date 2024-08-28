import {ExtractPropTypes} from "vue";
export const breadcrumbItemProps ={
    to: {
        type: String,
        default: ''
    },
    replace: {
        type: Boolean,
        default: false,
    }
}
export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>
