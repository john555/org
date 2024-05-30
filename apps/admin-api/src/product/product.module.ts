import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ProductVariant } from './product-variant.entity';

@Module({
  imports: [],
  providers: [
    ProductResolver,
    ProductService,
    {
      provide: 'PRODUCT_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
      inject: ['DATA_SOURCE'],
    },
    {
      provide: 'PRODUCT_VARIANT_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(ProductVariant),
      inject: ['DATA_SOURCE'],
    }
  ],
})
export class ProductModule {}
