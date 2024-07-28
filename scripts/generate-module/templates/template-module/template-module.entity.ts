import { ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@Entity({ name: 'template_modules' })
@ObjectType({ description: 'templateModule' })
export class TemplateModule {}
