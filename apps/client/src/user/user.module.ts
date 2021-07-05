import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './app.controller';
import { userProviders } from './user.provider';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UserService,
  ],
  controllers: [UserController]
})
export class UserModule {}