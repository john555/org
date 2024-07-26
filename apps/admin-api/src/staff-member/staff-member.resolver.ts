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
import {
  StaffMemberCreateInput,
  StaffMemberUpdateInput,
} from './staff-member.dtos';

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
    return this.shopService.findOneByStaffMemberId(staffMember.id);
  }

  @Mutation(() => StaffMember)
  async createStaffMember(
    @Args('input') input: StaffMemberCreateInput
  ): Promise<StaffMember> {
    return this.staffMemberService.create(input);
  }

  @Mutation(() => StaffMember)
  async updateStaffMember(
    @Args('input') input: StaffMemberUpdateInput
  ): Promise<StaffMember> {
    const staffMember = await this.staffMemberService.update(input);

    if (!staffMember) {
      throw new NotFoundException(`Staff member with id=${input.id} not found`);
    }

    return staffMember;
  }
}
