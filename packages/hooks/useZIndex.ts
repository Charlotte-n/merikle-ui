import {computed, ref} from "vue";


const zIndex = ref(0)
export default function useZIndex(val:number){
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
