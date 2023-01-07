 /* app.module.ts */
 import { Module, Options } from '@nestjs/common';
 import { AppController } from './app.controller';
 import { AppService } from './app.service';
 // 我自己准备的 USER 模块
 import { UserModule } from './user/user.module';
 // 引入 Mongoose 
 import { MongooseModule } from '@nestjs/mongoose';
 @Module({
   // 用 forRoot 方法连接数据库AddressBook
  imports: [UserModule, MongooseModule.forRoot("mongodb://lin:is3CE9Qd73VukNS@ac-fspey7q-shard-00-00.aeg4aav.mongodb.net:27017,ac-fspey7q-shard-00-01.aeg4aav.mongodb.net:27017,ac-fspey7q-shard-00-02.aeg4aav.mongodb.net:27017/Users?ssl=true&replicaSet=atlas-l8jw6o-shard-0&authSource=admin&retryWrites=true&w=majority")],

   controllers: [AppController],
   providers: [AppService],
 })
 export class AppModule {}
 
