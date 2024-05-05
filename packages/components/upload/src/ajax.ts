import {RequestOption} from "@merikle-ui/components/upload/src/uploadContent";
import {UploadProgressEvent} from "@merikle-ui/components/upload/src/upload";


export function httpRequest(options: {
    headers: Headers | Record<string, any>;
    onProgress(e:any): void;
    file: File & { uid: number };
    onError(e:any): void;
    method: string;
    data: any;
    name: string;
    action: string;
    onSuccess(e:any): void
}){
    const xhr = new XMLHttpRequest()
    const action = options.action

    xhr.open(options.method,action,true)
    //监听进度
    xhr.upload.addEventListener('progress',function (e){
        const processEvents = e as any
        processEvents.percentage = e.total > 0 ?(e.loaded / e.total) * 100:0
        //调用上传进度的函数
        options.onProgress(processEvents)
    })

    const headers = options.headers
    //进行添加头部信息
    if(headers){
        for(const [key,value] of Object.entries(options.headers)){
            xhr.setRequestHeader(key,value)
        }
    }
    const formData = new FormData()
    if(options.data){
        for(const [key,value] of Object.entries(options.data)){
            formData.append(key,value as any)
        }
    }

    xhr.onload = function (){
        options.onSuccess(xhr.response)
    }

    xhr.addEventListener('error',function (err){
        options.onError(err)
    })

    xhr.send(formData)

}
