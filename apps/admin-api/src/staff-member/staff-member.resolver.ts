import { Args, Query, Resolver } from '@nestjs/graphql';
import { StaffMember } from './models/staff-member.model';
import { StaffMemberService } from './staff-member.service';

@Resolver(() => StaffMember)
export class StaffMemberResolver {
  constructor(private readonly staffMemberService: StaffMemberService) {}
  
  @Query(() => StaffMember)
  staffMember(@Args('id') id: string): Promise<StaffMember> {
    return this.staffMemberService.findOneById(id);
  }
}
