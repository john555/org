import { InputType } from '@nestjs/graphql';

@InputType()
export class TemplateModuleCreateInput {}

@InputType()
export class TemplateModuleUpdateInput {
  id: string;
}
