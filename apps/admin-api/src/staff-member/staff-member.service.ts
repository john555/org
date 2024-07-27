import { Inject } from '@nestjs/common';
import { StaffMember } from './staff-member.entity';
import { Repository } from 'typeorm';
import {
  StaffMemberCreateInput,
  StaffMemberUpdateInput,
} from './staff-member.dtos';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { STAFF_MEMBER_CREATED } from '@/constants/events';

export class StaffMemberService {
  constructor(
    @Inject('STAFF_MEMBER_REPOSITORY')
    private readonly staffMemberRepository: Repository<StaffMember>,
    private readonly eventEmitter: EventEmitter2
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
    const createdStaffMember = await this.staffMemberRepository.save(staffMember);
    this.eventEmitter.emit(STAFF_MEMBER_CREATED, createdStaffMember);
    return createdStaffMember;
  }

  async update(input: StaffMemberUpdateInput) {
    await this.staffMemberRepository.update(input.id, {
      ...input,
    });
    return this.staffMemberRepository.findOne({ where: { id: input.id } });
  }

  @OnEvent(STAFF_MEMBER_CREATED)
  async staffMemberCreatedEvent(payload: StaffMember) {
    console.log(`Staff member created with id=${payload.id}`);
  }
}
