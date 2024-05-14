import { StaffMember } from './models/staff-member.model';

export class StaffMemberService {
  async findOneById(id: string): Promise<StaffMember> {
    return {
        id,
        email: 'someone@example.com',
        first_name: "jo",
        last_name: "m",
        created_at: new Date("2024/09/01")
    };
  }
}
