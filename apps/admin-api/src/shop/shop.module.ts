import { Module, forwardRef } from '@nestjs/common';
import { ShopResolver } from './shop.resolver';
import { ShopService } from './shop.service';
import { Shop } from './shop.entity';
import { StaffMemberModule } from '@/staff-member/staff-member.module';

@Module({
  imports: [
    forwardRef(() => StaffMemberModule),
  ],
  providers: [
    ShopResolver,
    ShopService,
    {
      provide: 'SHOP_REPOSITORY',
      useFactory: (dataSource: any) => dataSource.getRepository(Shop),
      inject: ['DATA_SOURCE'],
    },
  ],

  exports: [ShopService],
})
export class ShopModule {}
