import { Shop } from '@/shop/shop.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'staff_members' })
@ObjectType({ description: 'staffMember' })
export class StaffMember {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({unique: true})
  @Field({ description: 'Email of the staff member' })
  email: string;

  @Column({ nullable: true })
  @Field({ nullable: true, description: 'First name of the staff member' })
  firstName?: string;

  @Column({ nullable: true })
  @Field({ nullable: true, description: 'Last name of the staff member' })
  lastName?: string;

  @Column({ nullable: true })
  @Field({ nullable: true, description: 'Name of the staff member' })
  name?: string;

  @Column({ nullable: true, type: 'simple-array' })
  @Field(() => [String], {
    nullable: true,
    description: 'Initials of the staff member',
  })
  initials?: string[];

  // @Column({ default: false })
  // @Field(() => Boolean, { description:'Is the staff member the shop owner' } )
  // isShopOwner: boolean;

  @Column({ default: false })
  @Field(() => Boolean, { description: 'Is the staff member active' })
  active?: boolean;

  @Column({ nullable: true })
  @Field({ nullable: true, description: 'Phone number of the staff member' })
  phone?: string;

  // @OneToOne(() => MediaImage)
  // @JoinColumn()
  // @Field(() => MediaImage, { nullable: true, description: 'The image used as the staff member's avatar in the dashboard'})
  // avatar: MediaImage

  @CreateDateColumn()
  @Field(() => Date, { description: 'Date the staff member was created' })
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => Date, { description: 'Date the staff member was last updated' })
  updatedAt: Date;

  @Column({ nullable: true })
  @Field(() => [String], {
    nullable: true,
    description: 'Id of the shop the staff member belongs to',
  })
  shopId: string;

  @ManyToOne(() => Shop, (shop) => shop.staffMembers, { cascade: true })
  @JoinColumn({ name: 'shopId' })
  @Field(() => Shop, { description: 'The shop the staff member belongs to' })
  shop: Shop;
}
