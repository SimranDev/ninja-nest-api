import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreatePollDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(2)
  @IsString({ each: true })
  options: string[];

  @IsInt()
  userId: number;
}
