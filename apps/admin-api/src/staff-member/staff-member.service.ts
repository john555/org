import { Inject } from '@nestjs/common';
import { StaffMember } from './staff-member.entity';
import { Repository } from 'typeorm';
import {
  StaffMemberCreateInput,
  StaffMemberUpdateInput,
} from './staff-member.dtos';

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

  async findByShopId(id: string) {
    return this.staffMemberRepository.find({
      where: { shop: { id } },
    });
  }

  async create(input: StaffMemberCreateInput) {
    const staffMember = this.staffMemberRepository.create({
      email: input.email,
      firstName: input.firstName,
      lastName: input.lastName,
      name: input.name,
      initials: input.initials,
      phone: input.phone,
      shopId: input.shopId,
      active: true,
    });
    return this.staffMemberRepository.save(staffMember);
  }

  async update(input: StaffMemberUpdateInput) {
    await this.staffMemberRepository.update(input.id, {
      ...input,
    });
    return this.staffMemberRepository.findOne({ where: { id: input.id } });
  }
}
