"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const response_1 = require("./common/response");
const filter_1 = require("./common/filter");
const common_1 = require("@nestjs/common");
const whiteList = ['/list'];
function middleWareAll(req, res, next) {
    console.log(req.originalUrl, '我是main.ts的全局中间件');
    next();
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(middleWareAll);
    app.enableCors({ "origin": "*",
        "credentials": true,
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new response_1.Response());
    app.useGlobalFilters(new filter_1.HttpFilter());
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map