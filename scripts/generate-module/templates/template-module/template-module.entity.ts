import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'template_modules' })
@ObjectType({ description: 'templateModule' })
export class TemplateModule {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @UpdateDateColumn()
  @Field(() => Date, {
    description: 'Date the TemplateModule was last updated',
  })
  updatedAt: Date;

  @CreateDateColumn()
  @Field(() => Date, { description: 'Date the TemplateModule was created' })
  createdAt: Date;
}
