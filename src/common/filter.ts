 
import { ExceptionFilter, Catch, ArgumentsHost,HttpException } from '@nestjs/common'
 
import {Request,Response} from 'express'
 
@Catch(HttpException)
export class HttpFilter implements ExceptionFilter {
    // 接收的第一个参数是异常类,第二个参数是主机上下文
    catch(exception:HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const request = ctx.getRequest<Request>()
        const response = ctx.getResponse<Response>()
 
        const status = exception.getStatus()
 
        response.status(status).json({
           data:exception,
           time:new Date().getTime(),
           success:false,
           path:request.url,
           status
        })
    }
}