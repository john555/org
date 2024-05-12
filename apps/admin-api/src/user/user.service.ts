import { User } from './models/user.model';

export class UserService {
  async findOneById(id: string): Promise<User> {
    return {
        id,
        name: "jo",
        gender: "m",
        createdAt: new Date("2024/09/01")
    };
  }
}
