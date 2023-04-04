import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity'


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

/*
---Explanation---
Importing the TypeOrmModule and the User entity, UserController and UserServie were already imported

@Module() used to tell NestJS that this is a module

TypeOrmModule.forFeature([User]) added to imports array to tell NestJS to use the User entity
*/