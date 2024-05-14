import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'staffMember' })
export class StaffMember {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  first_name: string;

  @Field({ nullable: true })
  last_name: string;

  @Field()
  created_at: Date;
}
