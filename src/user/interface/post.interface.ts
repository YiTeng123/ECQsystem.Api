import { Document } from 'mongoose';
// 在这个文件中，我们已经成功地将 Post 类型的数据类型定义为字符串值。保存并退出文件。
export interface Post extends Document {
    readonly title: string;
    readonly description: string;
    readonly body: string;
    readonly author: string;
    readonly date_posted: string
}


