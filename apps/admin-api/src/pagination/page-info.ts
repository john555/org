import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class PageInfo {
  @Field((of) => String, { nullable: true })
  startCursor: string | null;

  @Field((of) => String, { nullable: true })
  endCursor: string | null;

  @Field()
  hasPreviousPage: boolean;

  @Field()
  hasNextPage: boolean;

  @Field()
  countTotal: number;
}
