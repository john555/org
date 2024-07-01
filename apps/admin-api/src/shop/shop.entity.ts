import { StaffMember } from '@/staff-member/staff-member.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'shops' })
@ObjectType({ description: 'shop' })
export class Shop {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field({
    description: `The shop owner's email address. We use this email address to communicate with the shop owner.`,
  })
  email: string;

  @Column()
  @Field({ description: `The shop's name.` })
  name: string;

  @Column()
  @Field({ description: `The URL of the shop's online store.` })
  url: string;

  @OneToMany(() => StaffMember, (staffMember) => staffMember.shop)
  @Field(() => [StaffMember], {
    description: 'The staff members who work at the shop',
  })
  staffMembers: StaffMember[];
}
