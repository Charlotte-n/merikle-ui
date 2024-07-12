import {describe,test,expect} from "vitest";
import {nextTick} from "vue";
import {message,closeAll} from '../methods'


//控制异步操作
// 这意味着在两次重绘或回流之后，Promise才会被解决,等待动画帧：调用 await rAF(); 等待两个动画帧和一个 DOM 更新周期。
const rAF  = async ()=>{
    return new Promise(res=>{
        requestAnimationFrame(()=>{
            requestAnimationFrame(async ()=>{
                res(null)
                await nextTick()
            })
        })
    })
}

describe('Message',async ()=>{
    //测试用例一close
    test('test message close',async ()=>{
        const handler = message({message:'测试关闭',duration:0})
        await rAF()
        expect(document.querySelector('.m-message')).toBeTruthy()
        handler.close()
        expect(document.querySelector('.m-message')).toBeFalsy()
    })
    //第二个测试用例
    test('test message closeAll',async()=>{
        message({message:'msg1',duration:0})
        message({message:'msg2',duration:0})
        await rAF()
        expect(document.querySelectorAll('.m-message').length).toBe(2)
        closeAll()
        await rAF()
        expect(document.querySelector('.m-message')).toBeFalsy()
    })
})


