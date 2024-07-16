import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from 'class-validator';

@InputType()
export class StaffMemberCreateInput {
  @Field()
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @Field({ nullable: true })
  @IsString({ message: 'First name is required' })
  @IsOptional()
  firstName?: string;

  @Field({ nullable: true })
  @IsString({ message: 'Last name is required' })
  @IsOptional()
  lastName?: string;

  @Field()
  @IsString({ message: 'Name must be a string' })
  @IsOptional()
  name?: string;

  @Field((type) => [String], { nullable: true })
  @Type(() => String)
  @IsArray({ message: 'Initials must be an array' })
  @IsOptional()
  initials?: string[];

  @Field({ nullable: true })
  @IsPhoneNumber(undefined, { message: 'Invalid phone number' })
  @IsNotEmpty({ message: 'Phone is required' })
  @IsOptional()
  phone?: string;

  @Field({ nullable: true })
  @IsUUID('4', { message: 'Invalid shop id' })
  @IsNotEmpty({ message: 'Shop id is required' })
  @IsOptional()
  shopId?: string;
}
