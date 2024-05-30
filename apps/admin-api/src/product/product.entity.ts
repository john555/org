import { ID, ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductVariant } from './product-variant.entity';

@Entity({ name: 'products' })
@ObjectType({ description: 'product' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({ nullable: true, type: 'text' })
  @Field(() => String)
  description?: string;

  @Column({ nullable: true, type: 'text' })
  @Field(() => String)
  descriptionHtml?: string;

  @Column({ nullable: true })
  @Field(() => String)
  handle: string;

  @Column({ nullable: true, type: 'boolean' })
  @Field(() => Boolean)
  hasOnlyDefaultVariant?: boolean;

  @Column({ nullable: true, type: 'boolean' })
  @Field(() => Boolean)
  isGiftCard?: boolean;

  @Column({ nullable: true })
  @Field(() => String)
  onlineStorePreviewUrl?: string;

  @Column({ nullable: true })
  @Field(() => String)
  onlineStoreUrl?: string;

  // TODO: Update the type
  @Column({ nullable: true })
  @Field(() => String)
  options?: string;

  // TODO Update the type to include minVariantPrice & maxVariantPrice
  @Column({ nullable: false })
  @Field(() => String)
  priceRangeV2?: string;

  @Column({ nullable: true })
  @Field(() => String)
  productType?: string;

  @Column({ nullable: true, type: 'datetime' })
  @Field(() => Date)
  publishedAt?: Date;

  // TODO: Update the type to include SEO title, & description
  @Column({ nullable: true })
  @Field(() => String)
  seo?: string;

  @Column()
  @Field(() => String)
  status?: string;

  @Column({ nullable: true, type: 'simple-array' })
  @Field(() => [String])
  tags?: string[];

  @Column({ nullable: false })
  @Field(() => String, { nullable: false })
  title: string;

  @Column({ nullable: true, type: 'boolean' })
  @Field(() => Int, { nullable: true })
  totalInventory?: number;

  @Column({ nullable: true })
  @Field(() => Boolean, { nullable: true })
  tracksInventory?: boolean;

  @Column({ nullable: true })
  @Field(() => String)
  vendor?: string;

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  updatedAt?: Date;

  // Relationships

  @OneToMany(() => ProductVariant, (variant) => variant.product)
  @Field(() => [ProductVariant], { nullable: false })
  variants?: string;

  // @Column({ nullable: true })
  // @Field(() => String)
  // category?: string;

  // @Column({ nullable: true })
  // @Field(() => String)
  // compareAtPriceRange?: string;

  // @Column({ nullable: true })
  // @Field(() => String)
  // contextualPricing?: string;

  // @Column({ nullable: true })
  // @Field(() => String)
  // featuredImage?: string;

  // @Column({ nullable: true })
  // @Field(() => String)
  // featuredMedia?: string;

  // @Column({ nullable: true })
  // @Field(() => String)
  // hasOutOfStockVariants?: string;

  // @Column({ nullable: true })
  // @Field(() => String)
  // hasVariantsThatRequiresComponents?: string;

  // @Column({ nullable: true })
  // @Field(() => String)
  // mediaCount?: string;

  // @Column({ nullable: true, type: 'boolean' })
  // @Field(() => Boolean)
  // inCollection?: boolean;

  // @Column({ nullable: true })
  // @Field(() => String)
  // collections?: string;

  // @Column({ nullable: true })
  // @Field(() => String)
  // images?: string;

  // @Column({ nullable: true })
  // @Field(() => String)
  // media?: string;
}
