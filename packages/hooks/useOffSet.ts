import {computed, ComputedRef, type Ref} from "vue";

interface OffsetOptions {
    offset:number;
    height:Ref<number>;
    getLastBottomOffset:()=>number;
}
interface OffsetResult{
    topOffset:Ref<number>;
    bottomOffset:Ref<number>;
}
export function useOffset(options:OffsetOptions):OffsetResult{
    const LastBottom = computed(()=>options.getLastBottomOffset())
    const topOffset = computed(()=>options.offset  + LastBottom.value)
    const bottomOffset = computed(()=>topOffset.value  + options.height.value)
    return  {
        topOffset,
        bottomOffset
    }
}
export default useOffset
