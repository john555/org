import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TemplateModuleResolver } from './template-module.resolver';
import { TemplateModuleService } from './template-module.service';
import { TemplateModule } from './template-module.entity';

@Module({
  imports: [],
  providers: [
    TemplateModuleResolver,
    TemplateModuleService,
    {
      provide: 'TEMPLATE_MODULE_REPOSITORY',
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(TemplateModule),
      inject: ['DATA_SOURCE'],
    },
  ],
  exports: [TemplateModuleService],
})
export class TemplateModuleModule {}
