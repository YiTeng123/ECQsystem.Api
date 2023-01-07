// export class User {}


 /* user.schema.ts 数据库字段映射,相当于实体类*/
 import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
 // @Prop 装饰器接受一个可选的参数，通过这个，你可以指示这个属性是否是必须的，是否需要默认值，或者是标记它作为一个常量，下面是例子

 import { Document } from 'mongoose';

//  每个Schema对应MongoDB中的一个collection。
 @Schema()
//  描述集合的字段
 export class User extends Document {
   
//    name: string;
   // 设置值为必填
//    @Prop({ required: true })
//    age: number;
  
//    height: number;
   @Prop()
   age:string
   @Prop()
   identifier:string
   @Prop()
   name:string
   @Prop()
   nation:string
   @Prop()
   grade:string
   @Prop()
   schemeNum:string
   @Prop()
   organ:string
   @Prop()  
   sex:number
 }
 export type UserDocument = User & Document;
  // SchemaFactory 是 mongoose 内置的一个方法做用是读取模式文档 并创建 Schema 对象
 export const UserSchema = SchemaFactory.createForClass(User);


