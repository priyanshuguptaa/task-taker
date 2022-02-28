/* eslint-disable prettier/prettier */
import {
 
  IsNotEmpty,

  MaxLength,
} from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @MaxLength(100, { message: 'Max length is 15 characters.' })
  title: string;
  @IsNotEmpty()
  description: string;
}
