import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { StaffMemberModule } from '@/staff-member/staff-member.module';

@Module({
  imports: [
    StaffMemberModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: process.env.NODE_ENV !== 'production',
      autoSchemaFile: join(process.cwd(), 'dist', 'graphql.gql'),
      sortSchema: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
