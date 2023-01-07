import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/entities/user.entity';
import { Point, PointDocument } from './entities/point.entity';
import { CreatePointDto } from './dto/create-user.dto';
export declare class UserService {
    private userTest;
    private pointTest;
    constructor(userTest: Model<UserDocument>, pointTest: Model<PointDocument>);
    getPoint(parmas: any): Promise<any>;
    getPointonly(personID: string): Promise<any>;
    create(createUserDto: CreatePointDto): Promise<Point>;
    findAll(): Promise<User[]>;
    findOne(personID: string): Promise<User[]>;
    delete(sid: number): Promise<import("mongodb").DeleteResult>;
    updateUser(sid: string, data: any): Promise<import("mongodb").UpdateResult>;
}
