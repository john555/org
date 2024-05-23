import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { StaffMemberModule } from '@/staff-member/staff-member.module';
import { DatabaseModule } from '@/database-module/database.module';
import { GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    DatabaseModule,
    StaffMemberModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: process.env.NODE_ENV !== 'production',
      autoSchemaFile: join(process.cwd(), 'dist', 'graphql.gql'),
      sortSchema: true,
      formatError: (error: GraphQLFormattedError) => {
        if (['production', 'staging'].includes(process.env.NODE_ENV as string)) {
          return {
            message: error.message,
            extensions: {
              status: error.extensions?.status,
              originalError: error.extensions?.originalError,
            },
          };
        }

        return error;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
