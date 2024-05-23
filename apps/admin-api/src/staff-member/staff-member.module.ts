import { Module } from '@nestjs/common';
import { StaffMemberResolver } from './staff-member.resolver';
import { StaffMemberService } from './staff-member.service';
import { staffMemberProviders } from './staff-member.providers';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [StaffMemberResolver, StaffMemberService, ...staffMemberProviders],
})
export class StaffMemberModule {}
