import { IsNotEmpty, IsString } from 'class-validator';

export class connectDto {
  @IsNotEmpty()
  @IsString()
  user_name: string;

  @IsNotEmpty()
  @IsString()
  chat_name: string;
}
