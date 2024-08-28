import {isRef, MaybeRef, onBeforeMount, onBeforeUnmount, onMounted, unref, watch} from "vue";

export function useEventListener(target:MaybeRef<EventTarget | HTMLElement | void>,event:string,handler:(e:Event)=>any){
    if(isRef(target)){
        watch(target,(val,oldVal)=>{
            oldVal?.removeEventListener(event,handler)
            val?.addEventListener(event,handler)
        })
    }else {
        onMounted(() => target?.addEventListener(event, handler));
    }
    onBeforeUnmount(()=>unref(target)?.removeEventListener(event, handler))

}

export default useEventListener
