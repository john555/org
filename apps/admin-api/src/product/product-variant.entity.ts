import { ID, ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'product_variants' })
@ObjectType({ description: 'productVariant' })
export class ProductVariant {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ nullable: true })
  @Field(() => Boolean)
  availableForSale?: boolean;

  @Column({ nullable: true })
  @Field(() => String)
  barcode?: string;

  @Column({ nullable: true })
  @Field(() => String)
  compareAtPrice?: string;

  @Column()
  @Field(() => String, { nullable: false })
  displayName: string;

  @Column({ nullable: true })
  @Field(() => Int)
  inventoryQuantity?: number;

  @Column()
  @Field(() => Int)
  position: number;

  @Column()
  @Field(() => Int, {
    nullable: false,
    description: 'The price of the product variant in cents',
  })
  price: number;

  // TODO: Update the type
  @Column()
  @Field(() => String, { nullable: false })
  selectedOptions: string;

  @Column({ nullable: true })
  @Field(() => String)
  sku?: string;

  @Column({ nullable: true })
  @Field(() => String)
  taxCode?: string;

  @Column({ nullable: true })
  @Field(() => Boolean)
  taxable?: boolean;

  @Column()
  @Field(() => String, { nullable: false })
  title: string;

  @UpdateDateColumn({ nullable: true })
  @Field(() => Date)
  updatedAt: Date;

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

  // Relationships

  @ManyToOne(() => Product, (product) => product.variants)
  @Field(() => Product)
  product: Product;

  //   @Column({ nullable: true })
  //   @Field(() => String)
  //   image?: string;

  //   @Column({ nullable: true })
  //   @Field(() => String)
  //   media?: string;
}
