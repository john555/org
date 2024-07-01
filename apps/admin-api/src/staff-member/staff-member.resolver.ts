import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { StaffMember } from './staff-member.entity';
import { StaffMemberService } from './staff-member.service';
import { NotFoundException } from '@nestjs/common';
import { ShopService } from '@/shop/shop.service';

@Resolver(() => StaffMember)
export class StaffMemberResolver {
  constructor(
    private readonly staffMemberService: StaffMemberService,
    private readonly shopService: ShopService
  ) {}

  @Query(() => StaffMember)
  async staffMember(@Args('id') id: string): Promise<StaffMember> {
    const staffMember = await this.staffMemberService.findOneById(id);
    if (!staffMember) {
      throw new NotFoundException('Staff member not found');
    }
    return staffMember;
  }

  @ResolveField()
  async shop(@Parent() staffMember: StaffMember) {
    console.log('staffMember', staffMember);
    return this.shopService.findOneByStaffMemberId(staffMember.id);
  }

  @Mutation(() => StaffMember)
  async createStaffMember(): Promise<StaffMember> {
    return this.staffMemberService.create();
  }
}
