import { Inject } from '@nestjs/common';
import { StaffMember } from './staff-member.entity';
import { Repository } from 'typeorm';

export class StaffMemberService {
  constructor(
    @Inject('STAFF_MEMBER_REPOSITORY')
    private readonly staffMemberRepository: Repository<StaffMember>
  ) {}

  async findOneById(id: string) {
    return this.staffMemberRepository.findOne({
      where: { id },
    });
  }

  async create() {
    const staffMember = this.staffMemberRepository.create({
      email: 'someone@example.com',
      firstName: 'John',
      lastName: 'Doe',
      name: 'John Doe',
      initials: ['J', 'D'],
    });
    return this.staffMemberRepository.save(staffMember);
  }
}
