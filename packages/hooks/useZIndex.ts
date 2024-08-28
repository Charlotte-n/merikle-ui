import {computed, ref} from "vue";


const zIndex = ref(0)
export default function useZIndex(val:number = 2000){
    const initialValue = ref(val)
    const currentZIndex = computed(()=>initialValue.value + zIndex.value)
   const nextZIndex = ()=>{
        zIndex.value++
        return  currentZIndex.value
   }
    return {
        currentZIndex,
        nextZIndex
    }
}
