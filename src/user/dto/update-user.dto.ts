import { PartialType } from '@nestjs/mapped-types';
import { CreatePointDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreatePointDto) {}
