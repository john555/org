import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

@InputType()
export class TemplateModuleCreateInput {
  @Field({ nullable: true })
  @IsUUID(undefined, { message: 'Invalid id' })
  @IsOptional()
  id?: string;
}

@InputType()
export class TemplateModuleUpdateInput {
  @Field()
  @IsUUID(undefined, { message: 'Invalid id' })
  @IsNotEmpty()
  id: string;
}
