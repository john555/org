import { Inject } from '@nestjs/common';
import { TemplateModule } from './template-module.entity';
import { Repository } from 'typeorm';
import {
  TemplateModuleCreateInput,
  TemplateModuleUpdateInput,
} from './template-module.dtos';
import { EventEmitter2 } from '@nestjs/event-emitter';

export class TemplateModuleService {
  constructor(
    @Inject('TEMPLATE_MODULE_REPOSITORY')
    private readonly templateModuleRepository: Repository<TemplateModule>,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async findOneById(id: string) {
    return this.templateModuleRepository.findOne({
      where: { id },
    });
  }

  async create(input: TemplateModuleCreateInput) {
    const templateModule = this.templateModuleRepository.create({
      ...input
    });
    const createdTemplateModule = await this.templateModuleRepository.save(templateModule);
    // this.eventEmitter.emit(TEMPLATE_MODULE_CREATED, createdTemplateModule);
    return createdTemplateModule;
  }

  async update(input: TemplateModuleUpdateInput) {
    await this.templateModuleRepository.update(input.id, {
      ...input,
    });
    return this.templateModuleRepository.findOne({ where: { id: input.id } });
  }
}
