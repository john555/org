import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Shop } from './shop.entity';
import { NotFoundException } from '@nestjs/common';
import { ShopService } from './shop.service';
import { StaffMemberService } from '@/staff-member/staff-member.service';

@Resolver(() => Shop)
export class ShopResolver {
  constructor(private readonly shopService: ShopService, private readonly staffMemberService: StaffMemberService) {}

  @Query(() => Shop)
  async shop(@Args('id') id: string, ...params: any[]): Promise<Shop> {
    const shop = await this.shopService.findOneById(id);
    if (!shop) {
      throw new NotFoundException('Shop not found');
    }
    return shop;
  }

  @ResolveField()
  staffMembers(@Parent() shop: Shop) {
    return this.staffMemberService.findByShopId(shop.id);
  }
}
