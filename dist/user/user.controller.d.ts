import { UserService } from './user.service';
import { CreatePointDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getPoints(query: any): Promise<any>;
    createPoint(body: CreatePointDto): Promise<import("./entities/point.entity").Point>;
    createUser(body: CreatePointDto): Promise<import("./entities/point.entity").Point>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(query: any): Promise<import("./entities/user.entity").User[]>;
    deleteUser(param: any): Promise<import("mongodb").DeleteResult>;
    updateUser(body: any, param: any): Promise<import("mongodb").UpdateResult>;
}
