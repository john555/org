import { Module } from '@nestjs/common';
import { StaffMemberResolver } from './staff-member.resolver';
import { StaffMemberService } from './staff-member.service';

@Module({
  providers: [StaffMemberResolver, StaffMemberService],
})
export class StaffMemberModule {}
