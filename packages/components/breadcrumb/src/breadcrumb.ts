import {MIcon} from "@merikle-ui/components";
import {ExtractPropTypes, PropType} from "vue";

export const breadcrumbProp = {
    separator: {
        type: String,
        default: '/',

    },
    separatorIcon: {
        type:Object as PropType<typeof MIcon> || String,
        default: '',
    }
} as const

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProp>
