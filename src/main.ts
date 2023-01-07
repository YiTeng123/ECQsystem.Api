// 守卫:在中间件之后,在拦截器,管道之前,可以做些鉴权,token判断的业务逻辑

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Response} from 'src/common/response'
import {HttpFilter} from 'src/common/filter'
import { ValidationPipe} from '@nestjs/common'
const whiteList = ['/list']
 
// 全局中间件
function middleWareAll  (req,res,next) {
   
     console.log(req.originalUrl,'我是main.ts的全局中间件')
    //  if(whiteList.includes(req.originalUrl)){
    //      next()
    //  }else{
    //      res.send('小黑子露出鸡脚了吧')
    //  }
     next()
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(middleWareAll)

  app.enableCors(
     {"origin": "*",
     "credentials": true,
 
     // "allowedHeaders":['Authorization','content-type'],
     
     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  
     "preflightContinue": false,
  
     "optionsSuccessStatus": 204
  
  }
 
  );
  app.useGlobalPipes( new ValidationPipe())
  app.useGlobalInterceptors(new Response())
  app.useGlobalFilters(new HttpFilter())
  await app.listen(3001);
}
bootstrap();
