import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Shop } from './shop.entity';

export class ShopService {
  constructor(
    @Inject('SHOP_REPOSITORY')
    private shopRepository: Repository<Shop>
  ) {}

  findOneById(id: string) {
    return this.shopRepository.findOne({
      where: { id },
    });
  }

  findOneByStaffMemberId(id: string) {
    return this.shopRepository.findOne({
      where: { staffMembers: { id } },
    });
  }
}
