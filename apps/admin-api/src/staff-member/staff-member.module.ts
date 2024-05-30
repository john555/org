import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { StaffMemberResolver } from './staff-member.resolver';
import { StaffMemberService } from './staff-member.service';
import { StaffMember } from './staff-member.entity';

@Module({
  providers: [
    StaffMemberResolver,
    StaffMemberService,
    {
      provide: 'STAFF_MEMBER_REPOSITORY',
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(StaffMember),
      inject: ['DATA_SOURCE'],
    },
  ],
})
export class StaffMemberModule {}
