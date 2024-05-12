import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Resolver((of: any) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query((returns) => User)
  user(@Args('id') id: string): Promise<User> {
    return this.userService.findOneById(id);
  }
}
