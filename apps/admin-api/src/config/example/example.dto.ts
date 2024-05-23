import { IsString } from 'class-validator';

export class ExampleConfigDto {
  @IsString()
  env: string;
}
