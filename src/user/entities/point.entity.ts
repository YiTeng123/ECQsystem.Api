
// 实体类得分表
 import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
 // @Prop 装饰器接受一个可选的参数，通过这个，你可以指示这个属性是否是必须的，是否需要默认值，或者是标记它作为一个常量，下面是例子

 import { Document } from 'mongoose';

type Eegres={
    mood:string
    presure:string
    relax:string
    concentrate:string
    tired:string
}


//  每个Schema对应MongoDB中的一个collection。
 @Schema()
//  描述集合的字段
 export class Point extends Document {
   
//    name: string;
   // 设置值为必填
//    @Prop({ required: true })
//    age: number;
  
//    height: number;
  
   @Prop()
   gaintestPoint:string
   @Prop()
   looktestPoint:string[]
   @Prop()
   viocetsetPoint:string
   @Prop()
   eegResult:string[]

   @Prop()
   totalityTestPoint:string
   @Prop()
   gameReview?:string
   @Prop({required:true,ref:'User'})
   personID:string
   @Prop()
   Addvice?:string
 }
 export type PointDocument = Point & Document;
  // SchemaFactory 是 mongoose 内置的一个方法做用是读取模式文档 并创建 Schema 对象
 export const PointSchema = SchemaFactory.createForClass(Point);


