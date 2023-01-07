import { NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
interface data<T> {
    data: T;
}
export declare class Response<T = any> implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<data<T>>;
}
export {};
