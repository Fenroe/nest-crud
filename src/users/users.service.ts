import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id: number): Promise<User> {
        return this.userRepository.findOne({ where: { id }});
    }

    async create(user: Partial<User>): Promise<User> {
        const newuser = this.userRepository.create(user);
        return this.userRepository.save(newuser);
    }

    async update(id: number, user: Partial<User>): Promise<User> {
        await this.userRepository.update(id, user);
        return this.userRepository.findOne({ where: { id } });
    }

    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}

/* 
---Explanation---
Injectable() tells NestJS that this is a service

InjectRepository(User) and Repository(User) tells NestJS to inject the repository of the User entity

Created a UserService with five methods: findAll, findOne, create, update and delete
*/