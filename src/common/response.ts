import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common'
import { map } from 'rxjs/operators'
import {Observable} from 'rxjs'
 
 
//  全局响应拦截器
interface data<T>{
    data:T,
   
}
// interface data{
//     data:any
//     status:number
//     success:boolean
//     message:string
// } 

// 别忘了这里需要提供依赖注入
@Injectable()
export class Response<T = any> implements NestInterceptor {
    // 返回一个可观察的物件
    intercept(context:ExecutionContext, next: CallHandler):Observable<data<T>> {
        // 返回一个可观察的物件后,再调用它的管道符对数据进行format
        // return next.handle()
        const a = next.handle().pipe(map(data => {
            return {
               data,
               status:0,
               success:true,
               message:"牛逼"
            }
        }))
        console.log(a);
        
        return a
    }
}