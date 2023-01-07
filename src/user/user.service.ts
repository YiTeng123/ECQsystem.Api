import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// import { User, UserDocument } from 'src/blog/schemas/blog.schemas';
import { User, UserDocument } from 'src/user/entities/user.entity';
import { Point, PointDocument } from './entities/point.entity'

import { CreatePointDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
@Injectable()
export class UserService {
  // 注册Schema后，可以使用 @InjectModel() 装饰器将 User 模型注入到 UserService 中:
  // 这里的'Users'需要和user.module定义的数据库表名对上
  constructor(
    @InjectModel(User.name) private userTest: Model<UserDocument>,  
    @InjectModel(Point.name) private pointTest: Model<PointDocument>
  ) { }

// 查找全部的得分表
async getPoint(parmas):Promise<any>{
    if(!!parmas===false){
      // 查询全部 根据参数判断
      // git测试
      return  await this.pointTest.find({}).populate('personID').exec()
    }
    else{
      return await this.pointTest.find({_id:parmas}).populate('personID').exec()
    }

  
   
}
// async getPoint():Promise<any>{
//   let temp =   await this.pointTest.find({}).populate('personID').exec()
//   return temp
// }
// 查找
async getPointonly(personID: string): Promise<any> {
  
  const temp = await this.pointTest.find({ _id: personID}).populate('personID').exec();
  return temp;
}









  // 添加
  async create(createUserDto: CreatePointDto): Promise<Point> {
    console.log(createUserDto);
    
    const createUser = new this.pointTest(createUserDto);
    const temp = await createUser.save();
    return temp;
  }
  // 查找
  async findAll(): Promise<User[]> {
    // 这里是异步的
    const temp = await this.userTest.find().exec();
    return temp;
  }

  // 查找
  async findOne(personID: string): Promise<User[]> {
    // 这里是异步的
    // console.log(personID);
    
    const temp = await this.userTest.find({ _id: personID}).exec();
    return temp;
  }
  // 删除
  async delete(sid: number) {
    // 这里是异步的  remove 方法删除成功并返回相应的个数
    const temp = await this.userTest.deleteOne({ _id: sid });
    return temp;
  }
  // 修改
  async updateUser(sid: string, data: any) {
    // 这里是异步的  remove 方法删除成功并返回相应的个数
    const temp = await this.userTest.updateOne({ _id: sid }, { $set: data });
    return temp;
  }
}

