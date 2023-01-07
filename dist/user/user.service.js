"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const user_entity_1 = require("./entities/user.entity");
const point_entity_1 = require("./entities/point.entity");
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor(userTest, pointTest) {
        this.userTest = userTest;
        this.pointTest = pointTest;
    }
    async getPoint(parmas) {
        if (!!parmas === false) {
            return await this.pointTest.find({}).populate('personID').exec();
        }
        else {
            return await this.pointTest.find({ _id: parmas }).populate('personID').exec();
        }
    }
    async getPointonly(personID) {
        const temp = await this.pointTest.find({ _id: personID }).populate('personID').exec();
        return temp;
    }
    async create(createUserDto) {
        console.log(createUserDto);
        const createUser = new this.pointTest(createUserDto);
        const temp = await createUser.save();
        return temp;
    }
    async findAll() {
        const temp = await this.userTest.find().exec();
        return temp;
    }
    async findOne(personID) {
        const temp = await this.userTest.find({ _id: personID }).exec();
        return temp;
    }
    async delete(sid) {
        const temp = await this.userTest.deleteOne({ _id: sid });
        return temp;
    }
    async updateUser(sid, data) {
        const temp = await this.userTest.updateOne({ _id: sid }, { $set: data });
        return temp;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_entity_1.User.name)),
    __param(1, (0, mongoose_2.InjectModel)(point_entity_1.Point.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map