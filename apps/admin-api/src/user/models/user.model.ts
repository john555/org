import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'user' })
export class User {
  @Field((type) => ID)
  id: string;


  @Field()
  gender: string;

  @Field({ nullable: true })
  name: string;

  @Field()
  createdAt: Date
}
