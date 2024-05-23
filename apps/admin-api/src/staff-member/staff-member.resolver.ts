import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StaffMember } from './staff-member.entity';
import { StaffMemberService } from './staff-member.service';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => StaffMember)
export class StaffMemberResolver {
  constructor(private readonly staffMemberService: StaffMemberService) {}

  @Query(() => StaffMember)
  async staffMember(@Args('id') id: string): Promise<StaffMember> {
    const staffMember = await this.staffMemberService.findOneById(id);
    if (!staffMember) {
      throw new NotFoundException('Staff member not found');
    }
    return staffMember;
  }

  @Mutation(() => StaffMember)
  async createStaffMember(): Promise<StaffMember> {
    return this.staffMemberService.create();
  }
}
