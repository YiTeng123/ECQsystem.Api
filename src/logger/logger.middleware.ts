

// 中间件
import { Injectable, NestMiddleware } from '@nestjs/common';

import {Request,Response,NextFunction} from 'express'
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('我是user模块的局部中间件,我来了hhhh');
    // 这里不会走后续的controller了
    // res.send('我被拦截了'),这里可以做些白名单的配置
    next();
  }
}
