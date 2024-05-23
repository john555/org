import { StaffMember } from '@/staff-member/staff-member.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'root@localhost',
        database: 'org',
        entities: [StaffMember],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
