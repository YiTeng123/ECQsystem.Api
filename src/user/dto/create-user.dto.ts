
// dto管道验证
import {IsNotEmpty,IsString} from 'class-validator'
// export class CreatePDto {
//     @IsNotEmpty()//验证是否为空
//     @IsString() //是否为字符串
//     name:string;
 
//     @IsNotEmpty()
//     age:number   
// }

export class CreatePointDto {
    // @IsNotEmpty()
    
    gaintestPoint:string
    
    looktestPoint:string
   
    viocetsetPoint:string
   
    eegResult:string[]
 
    // @IsString() //是否为字符串
    totalityTestPoint:string

    gameReview?:string

    personID:string

    Addvice?:string

   
    }
    
    

