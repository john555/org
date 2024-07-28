import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { TemplateModule } from './template-module.entity';
import { TemplateModuleService } from './template-module.service';
import {
  TemplateModuleCreateInput,
  TemplateModuleUpdateInput,
} from './template-module.dtos';

@Resolver(() => TemplateModule)
export class TemplateModuleResolver {
  constructor(private readonly templateModuleService: TemplateModuleService) {}

  @Query(() => TemplateModule)
  async module(@Args('id') id: string): Promise<TemplateModule> {
    const templateModule = await this.templateModuleService.findOneById(id);
    if (!templateModule) {
      throw new NotFoundException('TemplateModule not found');
    }
    return templateModule;
  }

  @Mutation(() => TemplateModule)
  async createTemplateModule(
    @Args('input') input: TemplateModuleCreateInput
  ): Promise<TemplateModule> {
    return this.templateModuleService.create(input);
  }

  @Mutation(() => TemplateModule)
  async updateTemplateModule(
    @Args('input') input: TemplateModuleUpdateInput
  ): Promise<TemplateModule> {
    const templateModule = await this.templateModuleService.update(input);

    if (!templateModule) {
      throw new NotFoundException(
        `TemplateModule with id=${input.id} not found`
      );
    }

    return templateModule;
  }
}
